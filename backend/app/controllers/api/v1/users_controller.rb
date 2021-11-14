class Api::V1::UsersController < ApplicationController
    include Rails.application.routes.url_helpers
    skip_before_action :authorized, only: [:create]

    def index 
        users = User.all
        # @users = User.all_except(@current_user)
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json:{user: user, jwt: token}
        else
            render json:{errors: user.errors.full_messages}
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end


    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user 
    end


    private

    def user_params
        params.permit(:email, :password)
    end

end

