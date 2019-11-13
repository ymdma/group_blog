Rails.application.routes.draw do

  devise_for :users

  root "posts#index"
  # get 'users/create'
  # get 'posts/index'

  resources :users do
    post "signup"
  end

  resources :posts do
    collection do
    post "posts/post"
    end
  end

end