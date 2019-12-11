class UsersController < ApplicationController

  before_action :set_user, only: [:update]


def signup

  @user = User.new(
    name: user_params[:name],
    email: user_params[:email],
    password: user_params[:password],
  )
  if @user.save
    redirect_to root_path

    session[:id] = @user.id
    sign_in User.find(session[:id]) unless user_signed_in?
  end
  # if @user.save
  #   # binding.pry
  #   # session[:id] = @user.id
  #   sign_in User.find(@user.id) unless user_signed_in?
  # end

end


def login

  @user = User.new(
    name: user_params[:name],
    email: user_params[:email],
    password: user_params[:password],
  )

  # 入力したメアドがあれば
  if login_user = User.find_by(email: @user.email)

    if login_user.valid_password?(user_params[:password])
      sign_in User.find(login_user.id) unless user_signed_in?
      redirect_to root_path, status: 302
    end
  else
  render :location

  end
end

def invite
  # binding.pry
  test_user = User.first

  sign_in User.find(test_user.id) unless user_signed_in?
  redirect_to root_path, status: 302

end

def update
  # binding.pry
  if @user.id == current_user.id
    @user.update(name: user_params[:name])
    redirect_to root_path
  else
    redirect_to root_path
  end
end

private

  def user_params
    params.permit(
      :name,
      :email,
      :password
    )
  end

  def set_user
    @user = User.find(current_user.id)
  end

end
