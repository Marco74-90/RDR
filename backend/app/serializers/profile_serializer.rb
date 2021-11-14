class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :username, :headline, :bio, :favoriteRole, :photo
  has_one :user
end
