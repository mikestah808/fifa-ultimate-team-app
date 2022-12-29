class UsersController < ApplicationController

require 'pry'
# skip_before_action :authorized, only: [:show, :create]

  # get current user
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
    # valid? will check to see if the user object being sent to the backend passes VALIDATION
    # if it does, then the return value is true and create action will continue to store :user_id in a session hash
    if user.valid?
      session[:user_id] = user.id
      render json: user
    else
      # this is where we are returning the validation errors from our controllers 
      # since we're sending the errors in the response, we can use the errors object on the frontend to display these errors to our users 
      # We can also get an array of nicely-formatted errors with the .full_messages method
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private
    
    # Strong params
    def user_params
      params.permit(:first_name, :last_name, :email, :password)
    end
end
