Rails.application.routes.draw do
  resources :show_pieces
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'static#index'
end
