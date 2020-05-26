class ApplicationController < ActionController::Base

    helper_method :current_user # for methods that views will call 

    def homepage
    end

    def about 
    end

    def current_user
        # memoization
        if @current_user
            return @current_user
        else
            @current_user = User.find(session[:logged_in_user_id])
            return @current_user
        end
    end
end
