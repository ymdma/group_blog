Rails.application.routes.draw do

  devise_for :users

  root "posts#index"

  resources :users do
    collection do
      post "signup"
      post "login"
    end
  end

  resources :posts do
    collection do
      # post "post"
      post "create"
      # get "posts/post"
      delete "posts/destroy"
      patch "update"
    end
  end

  resources :groups

end