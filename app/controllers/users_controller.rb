class UsersController < ApplicationController

skip_before_action :authorized, only: [:show, :create]

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end


  # signup
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private
    
    def user_params
      params.permit(:first_name, :last_name, :email, :password)
    end
end
