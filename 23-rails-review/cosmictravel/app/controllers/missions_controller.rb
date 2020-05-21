class MissionsController < ApplicationController

  def new
    @mission = Mission.new
  end

  def create
    Mission.create(mission_params)
    scientist_id = params[:mission][:scientist_id]
    redirect_to scientist_path(scientist_id)
  end


  def mission_params
    params.require(:mission).permit(:name, :planet_id, :scientist_id)
  end
end
