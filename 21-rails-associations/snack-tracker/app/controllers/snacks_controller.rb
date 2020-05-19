class SnacksController < ApplicationController

    before_action :find_snack, only: [:edit, :update, :show, :destroy]
    
  def index
    @snacks = Snack.all 
    # render "index"
  end

  def show
  end

  def new
    @snack = Snack.new # empty snack container / skeleton

  end

  def create
    # name = params[:snack][:name]
    # calories = params[:snack][:calories]
    # deliciousness = params[:snack][:deliciousness]
    # name = "Ring Dings"
    # calories = 200
    # deliciousness = 5
    # snack = Snack.create(name: name, calories: calories, deliciousness: deliciousness)
    # Snack.create(params[:snack])
    snack = Snack.create(snack_params)
    redirect_to snack_path(snack)
  end

  def edit
    # render :edit
  end

  def update
    @snack.update(snack_params)
    redirect_to snack_path(@snack)
  end

  def destroy
    @snack.destroy
    redirect_to snacks_path

  end

  private

  def snack_params # strong params
    params.require(:snack).permit(:name, :deliciousness, :calories)
  end

  def find_snack
    @snack = Snack.find(params[:id])

  end
end
