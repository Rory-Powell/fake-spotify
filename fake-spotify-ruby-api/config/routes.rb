Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :albums
  resources :artists
  resources :songs
  resources :playlists do
    get '/songs', action: 'show_songs'
  end
end
