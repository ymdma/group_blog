class UsersController < ApplicationController

  before_action :set_user

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
    # session[:id] = @user.id
    # login_user = User.find_by(email: @user.email)

    login_user = User.find_by(email: @user.email)

    if login_user.valid_password?(user_params[:password])
    # unless login_user.valid_password?(user_params[:password])
      sign_in User.find(login_user.id) unless user_signed_in?
      redirect_to root_path, status: 302
    else
      render "users/login"
    end
  end

  def update

  # binding.pry
    if @user.id == current_user.id
      @user.update(name: user_params[:name])
      redirect_to root_path
    else
      redirect_to root_path
    end



  #   @user = User.new(
  #     name: user_params[:name],
  #     email: user_params[:email],
  #     password: user_params[:password],
  #   )
  # @user.update
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