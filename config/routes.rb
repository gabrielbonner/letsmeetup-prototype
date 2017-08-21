Rails.application.routes.draw do
  get 'dashboard/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  # resources :timeslots

  root 'dashboard#index'
end
