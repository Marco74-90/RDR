class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :authorized
    
    def encode_token(data)
        JWT.encode(data, "Flatiron", "HS256")
        # specifiying the algorithm is optional if you're using HS256
        # make sure the data is a hash
    end

    def auth_header
        request.headers["Authorization"]
    end

    def decode_token
        if auth_header
            token = auth_header.split(" "), [1]
            begin
                JWT.decode(token, 'Flatiron', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil 
            end
        end
    end

    def current_user
        if decode_token
            user_id = decode_token[0]['user_id']
            @user = User.find_by_id(id: user_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end
