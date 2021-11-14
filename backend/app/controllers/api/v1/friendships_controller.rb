class Api::V1::FriendshipsController < ApplicationController
    def index
     friendships = Friendship.all
     render json: friendships
    end

    def create
        friendship = Friendship.create(friend_params)
        if friendship.valid?
            render json: friendship
        else
            render json: {error: friendship.errors.full_messages, status: 422}
        end
    end

    def show
        friendship = Friendship.find(params[:id])
        render json: friendship
    end

    def update
        friendship = Friendship.find_by(
        friend_id: params[:user_id],
        user_id: params[:id]
        )
        friendship.update(status: params[:friendship][:status])
        render json: friendship
       
    end

    def destroy
            friendship = Friendship.find_by(
            friend_id: params[:user_id],
            user_id: params[:id]
        )
        friendship.destroy
        render json: {}
    end

    private

    def friend_params
        params.permit(:user_id, :friend_id, :status)
    end

end
