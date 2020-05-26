class SessionsController < ApplicationController
  
  def show_login_form
    # load the blank log in form
    render :login
  end

  def login_user
    username = params[:username]
    password = params[:password]
    user_to_login = User.find_by(username: username)

    if user_to_login && user_to_login.authenticate(password)
        session[:logged_in_user_id] = user_to_login.id
        redirect_to snacks_path
    else
        flash[:error_message] = "No user found with that name and password"
        render :login
    end


  end

  def logout_user
    session.clear
    redirect_to login_path
  end

end
