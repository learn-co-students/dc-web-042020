class ApplicationController < Sinatra::Base

    set :views, "app/views" 

    get "/" do 
        erb :homepage
    end

    get "/books" do
        # @something = 2 + 2
        @books = Book.all
        erb :index
    end

    get "/books/:id" do
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end

    # get "/welcome" do 
    #     return "<h2>Welcome to our Book App</h2>"
    # end


end
