Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  resources :appointments
  resources :navigator
  get 'appointments/index'
  root 'appointments#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
