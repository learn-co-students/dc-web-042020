class BooksController < Sinatra::Base

    set :views, "app/views/books"
    set :method_override, true

    get "/books" do
        # @something = 2 + 2
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        erb :new
    end

    post "/books" do 
        title = params[:title]
        author_name = params[:author]
        snippet = params[:snippet]
        book = Book.find_or_create_by(
            title: title,
            author: Author.find_or_create_by(name: author_name),
            snippet: snippet)
        redirect "/books/#{book.id}"

    end

    get "/books/:id" do
        # get "/books/new"
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end

    get "/books/:id/edit" do 
        @book = Book.find(params[:id])

        erb :edit
    end

    put "/books/:id" do 
        book = Book.find(params[:id])
        book.update(title: params[:title],
                     author: Author.find_or_create_by(name: params[:author]),
                     snippet: params[:snippet])
        redirect "/books/#{book.id}"
    end

    delete "/books/:id" do 
        Book.delete(params[:id])
        redirect "/books"
    end
end