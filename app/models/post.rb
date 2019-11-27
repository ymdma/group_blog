class Post < ApplicationRecord

  belongs_to :user
  belongs_to :group

  mount_uploader :image, ImageUploader


  validates :title, presence: true
  validates :title, length: { in: 1..20 }

  validates :content, presence: true
  validates :content, length: { in: 1..256 }

  validates :group_id, presence: true

end