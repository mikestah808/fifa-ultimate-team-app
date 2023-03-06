class PlayersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized

  def index
     players = Player.all
     render json: players
  end

  def show 
    player = Player.find_by(id: params[:id])
    if player
        render json: player, status: :ok
    else 
        render json: { error: "Player not found" }, status: :not_found
    end
  end

 
  def create
    player = Player.find_or_create_by!(player_params)
    render json: player, status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def update
    player = Player.find_by(id: params[:id])
    player.update(player_params)
    render json: player
  end

  def destroy
    player = Player.find_by(id: params[:id])
    player.destroy
    head :no_content
  end

  private
      
    def player_params
      params.permit(:name, :age, :image_url, :position, :rating, :club, :price, :pace, :dribbling, :shooting, :defending, :passing, :physical, :team_id, :country_id)
    end

    def render_not_found_response
      render json: { error: "Player not found" }, status: :not_found
    end

end
