class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]


    # login route 
    def create
        user = User.find_by(email: params[:email])
        # verify their login credentials
        # authenticate is a special method given to us by Bcrypt where we can pass the password 
        # this will hash the password with the SALT saved in the database to see if this password, when hashed, will match the password stored in our database 
        if user&.authenticate(params[:password])
            # store the authenticated user's id in the session:
            session[:user_id] = user.id
            render json: user
        else
            render json: { error: { login: "Invalid email or password" }}, status: :unauthorized
        end
    end

    # logout route
    def destroy
        session.delete :user_id
        head :no_content
    end

end
