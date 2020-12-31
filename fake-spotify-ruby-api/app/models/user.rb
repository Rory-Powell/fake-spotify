class User < ApplicationRecord
  has_many :playlists, dependent: :destroy
end
