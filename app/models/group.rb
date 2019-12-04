class Group < ApplicationRecord

  has_many :posts, dependent: :destroy
  has_many :group_users, dependent: :destroy
  has_many :users, through: :group_users

  # validates :group_name, numericality: { only_interger: false }
  # validates :group_name, presence: true
  # validates :group_name, uniqueness: { case_sensitive: :true}
  # validates :group_name, length: { minimum: 1, maximum: 10 }
  # validates :group_name, confirmation: { case_sensitive: true }



end
