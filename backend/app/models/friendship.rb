class Friendship < ApplicationRecord
    validates :user_id, :friend_id, :status, presence: true
    validates :user_id, uniqueness: { scope: :friend_id }
    validates :status, inclusion: { in: %w(pending accepted denied) }

    belongs_to :user, 
                primary_key: :id,
                foreign_key: :user_id,
                class_name: :User

    belongs_to :friend, 
               primary_key: :id,
               foreign_key: :friend_id,
               class_name: :User



end
