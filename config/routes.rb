Rails.application.routes.draw do

  devise_for :users

  root "posts#index"

  resources :users do
    collection do
      post "signup"
    end
  end

  resources :posts do
    collection do
      post "posts/post"
      delete "posts/destroy"
    end
  end

  resources :groups

end