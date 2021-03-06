module GoogleBooks

  class Adapter
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author

    def initialize(author)
      @author = Author.find_or_create_by(name: author)
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))

      books['items'].each do |item|
        book = Book.new
        book.author = self.author
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description']
        book.save

        # Book.create(author: self.author,
        #             title: item['volumeInfo']['title'],
        #             snippet: item['volumeInfo']['description'])
      end
    end

    private

    def author_url(max_results = 20)
      "#{BASE_URL}#{author_sanitizer(author)}&maxResults=#{max_results}"
    end

    def author_sanitizer(author)
      author.name.gsub(/\W+/, '').downcase
    end
  end
end
