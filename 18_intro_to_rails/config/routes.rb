Rails.application.routes.draw do
  resources :flags, only: [:index, :show]
  get 'best_flag_url', to: "flags#best_flag_action"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
