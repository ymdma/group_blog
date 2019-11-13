Rails.application.routes.draw do

  devise_for :users

  root "posts#index"
  # get 'users/create'
  # get 'posts/index'

  resources :posts do
    collection do
    post "posts/post"
    end
  end

end