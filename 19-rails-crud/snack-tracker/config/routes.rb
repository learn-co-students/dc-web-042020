Rails.application.routes.draw do
  root to: "application#homepage"
  get 'my_super_great_about_page', to: "application#about", as: "about"
  # get 'snacks', to: "snacks#index"
  # get 'snacks/:id', to: "snacks#show", as: "snack"
  resources :snacks, only: [:index, :show]
end
