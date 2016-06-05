class CampersController < ApplicationController

  def index
    render json: Camper.all, status: 200
  end
  def show
    @camper = Camper.find params[:id] #-> this can be the "name" of your record, or "id"
  end

  def create
      @camper = Camper.new(first_name: params[:first_name],last_name: params[:last_name], allsports: params[:allsports], archery: params[:archery], canoeing: params[:canoeing], creative_arts: params[:creative_arts], culinary_fun: params[:culinary_fun], dance: params[:dance], eagle_I: params[:eagle_I], fencing: params[:fencing], kayaking: params[:kayaking], performing_arts: params[:performing_arts],  rock_climbing: params[:rock_climbing], sup: params[:sup], sailing: params[:sailing], swimming: params[:swimming],  tennis: params[:tennis],  water_ski: params[:water_ski],  windsurfing: params[:windsurfing])
      if @camper.save
        render json: @camper, status: 200
      else
        render json: {error: "camper data could not be created."}, status: 422
      end

    end
  private
  def camper_params
      params.require(:camper).permit(:first_name, :last_name)
  end

  def edit

  end
end
