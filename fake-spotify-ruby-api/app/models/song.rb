# frozen_string_literal: true

class Song < ApplicationRecord
  has_many :album_songs, dependent: :destroy
  has_many :albums, through: :album_songs

  has_many :playlist_songs, dependent: :destroy
  has_many :playlists, through: :playlist_songs

  has_many :artist_songs, dependent: :destroy
  has_many :artists, through: :artist_songs

  def as_json(options = {})
    super(options).merge(
      'artists' => artists.map(&:name).flatten,
      'albums' => albums.map(&:title).flatten
    )
  end
end
