class UsersController < ApplicationController


def signup

  @user = User.new(
    name: user_params[:name],
    email: user_params[:email],
    password: user_params[:password],
  )
  @user.save

  # if @user.save
  #   # binding.pry
  #   # session[:id] = @user.id
  #   sign_in User.find(@user.id) unless user_signed_in?
  #   redirect_to root_path
  # end

end

private

  def user_params
    params.permit(
      :name,
      :email,
      :password
    )
  end
end
