class User < ApplicationRecord
    has_secure_password
    validates :email, :password, presence: true
    validates :email, uniqueness: true

    has_many :gallery_posts

    has_many :friendships 
    has_many :friends, through: :friendships

end



