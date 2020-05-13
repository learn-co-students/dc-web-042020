class ApplicationController < Sinatra::Base

    set :views, "app/views" 
    set :method_override, true

    get "/" do 
        erb :homepage
    end

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
        author = params[:author]
        snippet = params[:snippet]
        book = Book.find_or_create_by(
            title: title,
            author: author,
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
                     author: params[:author],
                     snippet: params[:snippet])
        redirect "/books/#{book.id}"
    end

    delete "/books/:id" do 
        Book.delete(params[:id])
        redirect "/books"
    end
    # get "/books/title/:title" do
    #     book_title = params[:title]
    #     @book = Book.find_by(title: book_title.capitalize)
    #     erb :show
    # end

    # get "/welcome" do 
    #     return "<h2>Welcome to our Book App</h2>"
    # end


end
