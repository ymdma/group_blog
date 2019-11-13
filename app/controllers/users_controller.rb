class UsersController < ApplicationController


def signup

  @user = User.new(
    title: user_params[:name],
    content: user_params[:email],
    image: user_params[:password],
  )
  @user.save

  if @user.save
    session[:id] = @user.id
    sign_in User.find(session[:id]) unless user_signed_in?
end
private

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :password
    )
  end
end
