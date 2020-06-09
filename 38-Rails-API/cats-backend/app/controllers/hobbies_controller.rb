class HobbiesController < ApplicationController
  def index
    # byebug
    #we want to NOT render a view
    #we want to render the json of all of our hobbies
    # extra = Hobby.all.map{|hobby| "joke's on you"}
    render json: Hobby.all
  end
end
