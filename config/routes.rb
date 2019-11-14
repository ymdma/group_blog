Rails.application.routes.draw do

  devise_for :users
      # devise_for :users, skip: [:sessions]
      # as :user do
      #   get 'signin', to: 'devise/sessions#new', as: :new_user_session
      #   match 'signout', to: 'devise/sessions#destroy', as: :destroy_user_session, via: Devise.mappings[:user].sign_out_via

      # end

  root "posts#index"
  # get 'users/create'
  # get 'posts/index'

  resources :users do
    collection do
      post "signup"
    end
  end

  resources :posts do
    collection do
    post "posts/post"
    end
  end

end