class TeamsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized

  def index
    user = User.find_by(id: session[:user_id])
    teams = user.teams
    render json: teams
  end

  def show 
    user = User.find_by(id: session[:user_id])
    team = user.teams.find_by(id:params[:id])
    if team 
        render json: team, status: :ok
    else 
        render json: { error: "Team not found" }, status: :not_found
    end
  end

 
  def create
    user = User.find_by(id: session[:user_id])
    team = user.teams.create!(team_params)
    render json: team, status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    team = user.teams.find_by(id: params[:id])
    team.destroy
    head :no_content
  end

  private

    # Only allow a list of trusted parameters through.
    def team_params
      params.permit(:name, :user_id)
    end

    def render_not_found_response
      render json: { error: "Team not found" }, status: :not_found
    end

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
