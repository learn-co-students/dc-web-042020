require 'rest-client'
require 'json'
require 'pry'


def welcome
    # Welcome the user to our program
    puts "Welcome to the Flatiron Book Searcher"
end

def get_search_terms
    # get some search terms from the user
    puts "What would you like to search for?"
    input = gets.chomp
    if input.empty?
        puts "You must enter a search term"
        input = get_search_terms
    end
    return input
end

def make_url(search_terms)
    base_url = "https://www.googleapis.com/books/v1/volumes?q="
    url_with_search_terms = base_url + search_terms
    return url_with_search_terms.gsub(" ", "+")
end

def send_request(url)
    # send a request to Google Books API
    response = RestClient.get(url)
    return response
end

def convert_to_json(response)
    # turn the response into JSON
    return JSON.parse(response)
end

def display_books(json)
    # display first ten books and authors
    if json["items"].nil?
        puts "No books found"
        return
    end
    first_ten = json["items"][0..9]
    first_ten.each do |book|
        show_book(book)
    end
end

def show_book(book_info)
    title = book_info["volumeInfo"]["title"]
    authors = book_info["volumeInfo"]["authors"]
    authors = format_authors(authors)
    puts "#{title} written by #{authors}"
    puts "***************\n\n"
end

def format_authors(author_array)
    if author_array.nil?
        return "Unknown"
    else
        return author_array.join(" & ")
    end
end

def run
    welcome
    search_terms = get_search_terms
    url = make_url(search_terms)
    response = send_request(url)
    json = convert_to_json(response)
    display_books(json)
end


run















