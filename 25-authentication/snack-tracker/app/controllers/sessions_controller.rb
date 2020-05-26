class SessionsController < ApplicationController
  
  def show_login_form
    # load the blank log in form
    render :login
  end

  def login_user
    username = params[:username]
    logged_in_user = User.find_by(username: username)
    if logged_in_user
        session[:logged_in_user_id] = logged_in_user.id
        redirect_to snacks_path
    else
        flash[:error_message] = "No user found with that name"
        render :login
    end
  end

  def logout_user
    session.clear
    redirect_to login_path
  end

end
