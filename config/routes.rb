Rails.application.routes.draw do

  root 'home#index'

  get 'login', to: 'sessions#create'
  post 'signup', to: 'users#create'
  get 'dashboard', to: 'dashboard#index'

end
