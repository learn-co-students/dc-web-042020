class CatsController < ApplicationController
  def index
    #where we are rendering cats

    render json: Cat.all.to_json(
      :include => {:hobbies => {
        :only => [:name, :description]
        }},
      :except => [:created_at, :updated_at]
    )
  end

  def create
    #create and save that cat to our DB
    #respond back with the newly created cat
    new_cat = Cat.create(cat_params)
    # byebug
    render json: new_cat.to_json(:include => :hobbies)
  end

  def update
    found_cat = Cat.find(params[:id])

    #find the cat with id of 1(or whatever id)
    #update that cat in the DB
    #respond back with the updated cat

    found_cat.update(cat_params) #.update returns a boolean
    render json: found_cat
  end

  def delete
    Cat.find(params[:id]).delete
    render json: {message: "delete complete"}
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :picture, :floofiness)
  end
end
