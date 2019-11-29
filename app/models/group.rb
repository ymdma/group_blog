class Group < ApplicationRecord

  has_many :posts, dependent: :destroy
  has_many :group_users, dependent: :destroy
  has_many :users, through: :group_users

  validates :group_name, presence: true
  validates :group_name, length: { in: 1...10 }



end
