class ApplicationController < ActionController::Base

    helper_method :current_user, :current_username # for methods that views will call 

    def homepage
    end

    def about 
    end

    def current_user
        # memoization
        if @current_user
            return @current_user
        else
            @current_user = User.find_by(id: session[:logged_in_user_id])
            return @current_user
        end
    end

    def current_username
        if current_user
            return current_user.username 
        else
            return "Anonymous"
        end
    end

    def logged_in?

        # if current_user
        #     return true
        # else
        #     return false
        # end

        return !!current_user

    end

    def authorized
        redirect_to login_path unless logged_in?
    end

end
