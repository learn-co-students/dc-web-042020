Rails.application.routes.draw do

  get 'login', to: "sessions#show_login_form"
  post 'login', to: "sessions#login_user"

  delete 'logout', to: "sessions#logout_user"

  root to: "application#homepage"
  get 'my_super_great_about_page', to: "application#about", as: "about"
  # get 'snacks', to: "snacks#index"
  # get 'snacks/:id', to: "snacks#show", as: "snack"
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
end
