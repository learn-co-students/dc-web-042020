class SnacksController < ApplicationController

  def index
    @snacks = Snack.all 
    # render "index"
  end

  def show
    @snack = Snack.find(params[:id])
  end

end
