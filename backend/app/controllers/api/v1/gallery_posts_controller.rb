class Api::V1::GalleryPostsController < ApplicationController
    include Rails.application.routes.url_helpers
    
    def index
        posts = GalleryPost.all.with_attached_photo
        render json: posts.map { |photo|
        photo.as_json.merge({ photo: url_for(photo.photo) })
       }

    end

    def create
        post = GalleryPost.create(post_params)
        if post
            render json:{message: "Success"}
        else
            render post.errors.full_messages
        end
    end

    def user_photos
        @current_user
        render json: gallery_posts
    end

    private
    def post_params
        params.permit(:title, :caption,:user_id,:photo )
    end
end
