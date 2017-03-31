Rails.application.routes.draw do
  resources :appointments
  resources :navigator
  get 'appointments/index'
  root 'navigator#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
