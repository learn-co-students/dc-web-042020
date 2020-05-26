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

    # try to the make the snack
    @snack = Snack.new(snack_params)
    if !@snack.valid?
    # if there are errors, re-render the form and tell the user what went wrong
     render :new # load the ':new' view/tempalte
    else
     # otherwise, save the snack and redirect to the detail page
      @snack.save
      redirect_to snack_path(@snack)
    end
  end

  def edit
    # render :edit
  end

  def update

    @snack.update(snack_params)
    if !@snack.valid?
      render :edit
    else
      @snack.save  
      redirect_to snack_path(@snack)
    end
  end

  def destroy
    @snack.destroy
    redirect_to snacks_path

  end

  private

  def snack_params # strong params
    params.require(:snack).permit(:name, :deliciousness, :calories, :retailer_id)
  end

  def find_snack
    @snack = Snack.find(params[:id])

  end
end
