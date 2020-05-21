class ScientistsController < ApplicationController

    before_action :find_scientist, only: [:show, :edit, :update, :destroy]

    def index
        @scientists = Scientist.all
    end

    def show

    end

    def new
        @scientist = Scientist.new
        render :new
    end

    def create
        new_scientist = Scientist.new(sci_params)
        if new_scientist.valid?
            new_scientist.save
            redirect_to scientist_path(new_scientist)
        else
            @scientist = new_scientist
            render :new
        end
    end

    def edit

    end

    def update
        @scientist.update(sci_params)
        if @scientist.valid?
            redirect_to scientist_path(@scientist)
        else
            render :edit
        end

    end

    def destroy
        # Scientist.destroy(params[:id])
        @scientist.destroy
        redirect_to scientists_path
    end

    private

    def sci_params
        params.require(:scientist).permit(:name, :field_of_study)
    end

    def find_scientist
        @scientist = Scientist.find(params[:id])
    end



end
