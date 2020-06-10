class PokemonsController < ApplicationController
  def destroy
    render json: Pokemon.destroy(params[:id]).to_json(except: [:created_at, :updated_at])
  end

  def create
    #find using Trainer.find
    #trainer.add_pokemon
    #render trainer as json
    num = Trainer.find(params[:trainer_id]).pokemons.length
    if(num < 6)
      pokemon = Pokemon.create(
        nickname: Faker::Name.first_name,
        species: Faker::Games::Pokemon.name,
        trainer_id: params[:trainer_id]
      )
      render json: pokemon
    else
      render json: {error: "Cannot have more than 6 pokemon on a team"}
    end
  end
end
