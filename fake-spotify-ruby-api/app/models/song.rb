# frozen_string_literal: true

class Song < ApplicationRecord
  has_many :album_songs, dependent: :destroy
  has_many :albums, through: :album_songs

  has_many :playlist_songs, dependent: :destroy
  has_many :playlists, through: :playlist_songs

  has_many :artist_songs, dependent: :destroy
  has_many :songs, through: :artist_songs
end
