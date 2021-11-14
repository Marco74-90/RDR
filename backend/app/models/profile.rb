class Profile < ApplicationRecord
 validates :username,:headline, :bio, :favoriteRole, presence: true
 validates :username, uniqueness: true

 has_one_attached :photo

 belongs_to :user
end
