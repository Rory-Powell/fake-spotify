class Artist < ApplicationRecord
  has_many :albums, dependent: :destroy

  has_many :artist_songs, dependent: :destroy
  has_many :songs, through: :artist_songs
end
