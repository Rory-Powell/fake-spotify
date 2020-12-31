class Song < ApplicationRecord
  has_many :albums, :through => :album_songs
end
