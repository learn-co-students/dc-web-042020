Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # 'get' /hobbies to return a JSON list of all my hobbies
  get "/hobbies", to: "hobbies#index"
  get "/cats", to: "cats#index"
  post "/cats", to: "cats#create" #new vs create
  patch "/cats/:id", to: "cats#update"
  delete "/cats/:id", to: "cats#delete"

end
