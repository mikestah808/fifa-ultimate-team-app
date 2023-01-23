class PlayersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized

  # GET /players
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

 
  # POST /players
  def create
    # byebug
    player = Player.find_or_create_by!(player_params)
    render json: player, status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  # PATCH/PUT /players/1
  def update
    player = Player.find_by(id: params[:id])
    player.update(player_params)
    render json: player
  end

  # DELETE /players/1
  def destroy
    player = Player.find_by(id: params[:id])
    player.destroy
    head :no_content
  end

  private
      # the purpose of using .find OVER .find_by is that the latter will return a value of nil, whereas .find will raise an Active Record exception.
      # this is important because we can rescue the exception with the code at the top of our movies controller, then have the render_not_found_response instance method return an error 
      # it's a good way to DRY up our code 


    # Only allow a list of trusted parameters through.
    def player_params
      params.permit(:name, :age, :image_url, :position, :rating, :club, :price, :pace, :dribbling, :shooting, :defending, :passing, :physical, :team_id, :country_id)
    end

    def render_not_found_response
      render json: { error: "Player not found" }, status: :not_found
    end

end
