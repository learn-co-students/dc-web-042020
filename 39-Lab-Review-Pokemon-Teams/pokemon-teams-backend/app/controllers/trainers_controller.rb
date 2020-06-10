class TrainersController < ApplicationController

  def index
      render json: Trainer.all.to_json(:include => :pokemons)
      #love to send pokemon data nested inside my trainers data
  end

end
