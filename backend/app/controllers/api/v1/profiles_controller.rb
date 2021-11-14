class Api::V1::ProfilesController < ApplicationController
    include Rails.application.routes.url_helpers

    def index
        profiles = Profile.all.with_attached_photo
        render json: profiles.map { |photo|
        photo.as_json.merge({ photo: url_for(photo.photo) })
       }

    end
    
    def create
        profile = Profile.create(profile_params)
        if profile
            render json:{message: "Success"}
        else
            render profile.errors.full_messages
        end
    end

    private
    
    def profile_params
        params.permit(:username, :headline, :user_id, :photo, :bio, :favoriteRole )
    end


end
