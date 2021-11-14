class GalleryPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :caption, :photo
  has_one :user
end
