class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts
  has_many :group_users, dependent: :destroy
  has_many :groups, through: :group_users


  validates :name, presence: true ,on: :signup
  validates :name, uniqueness: { case_sensitive: :true},
                            length: { minimum: 1, maximum: 10 },on: :signup

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email,presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX },on: :signup
  validates :password,presence: true,on: :signup

end
