class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only:[:create]

    def create
        @user = User.find_by(email: user_params[:email])
        if @user && @user.authenticate(user_params[:password])
            token_encode_token({user_id: @user.id})
            render json: {user: user, jwt: token}, success: "Welcome back,"
        else
            render json: {message: "Log in failed! Username or password invalid!"}
        end
    end

    private

    def user_params
        params.permit(:email, :password)
    end


end