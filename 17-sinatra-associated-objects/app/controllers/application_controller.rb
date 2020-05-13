class ApplicationController < Sinatra::Base

    set :views, "app/views" 
    set :method_override, true

    get "/" do 
        erb :homepage
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
