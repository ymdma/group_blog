class GroupUser < ApplicationRecord


  belongs_to :group
  has_many :group_users
  belongs_to :user
end
