Rails.application.routes.draw do
  # localhost:3000/api/v1/
  # resources :posts

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index] #route only used for testing
      post '/login', to: 'auth#create'
      get  '/token', to: 'auth#token_log_in'
    end
  end

end

# POST => /api/v1/login
