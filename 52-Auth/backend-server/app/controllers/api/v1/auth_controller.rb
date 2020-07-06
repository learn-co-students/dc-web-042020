class Api::V1::AuthController < ApplicationController

  def create # POST /api/v1/login
    user = User.find_by(username: params["username"])
    if(user && user.authenticate(params["password"]) )
      render json: user.as_json({:except => [:password]})
      #if the username AND passworld was found
    else
      #if either the username OR password is inccorect
      render json: {error: true, message: "Incorrect username or password!"}
    end
  end

end
