class CreateGalleryPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :gallery_posts do |t|
      t.string :title
      t.string :caption
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
