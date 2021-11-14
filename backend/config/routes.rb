Rails.application.routes.draw do
  
  resources :profiles
  namespace :api do
    namespace :v1 do 
      resources :gallery_posts
      resources :registrations, only: [:create]
      resources :friendships
      resources :users
      post '/login' , to: 'auth#create'
      get '/user/:id/gallery_posts', to: 'users#posts'
    end
  end
end
