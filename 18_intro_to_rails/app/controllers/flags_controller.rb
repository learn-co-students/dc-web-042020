class FlagsController < ApplicationController
  def index
    @flags = Flag.all
  end

  def show
    @flag = Flag.find(params[:id])
  end

  def best_flag_action
    @flag = Flag.find_by(rating: 5)
    render :best_flag_view
  end

end
