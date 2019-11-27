class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts
  has_many :group_users, dependent: :destroy
  has_many :groups, through: :group_users


  validates :name, presence: true
  validates :name, length: {in: 1...20}

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :name,presence: true, length: {maximum: 20}
  validates :email,presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
  validates :password,presence: true


end
