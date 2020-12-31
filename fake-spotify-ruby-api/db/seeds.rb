# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.new(
  name: 'Rory Powell'
)
user.save

artist = Artist.new(
  name: 'Fleetwood Mac'
)
artist.save

song = Song.new(
  title: 'Second Hand News',
  duration: '2:56',
  play_count: 54_387_221,
  is_explicit: false
)
song.save

album = Album.new(
  title: 'Rumours',
  year: '1977',
  copyright: '2004 Warner Records Inc.',
  artist_id: artist.id
)
album.save

album_song = AlbumSong.new(
  album_id: album.id,
  song_id: song.id,
  order: 1
)
album_song.save

playlist = Playlist.new(
    title: 'Favourites',
    description: 'My all time favourites',
    user_id: user.id
)
playlist.save

playlist_song = PlaylistSong.new(
    playlist_id: playlist.id,
    song_id: song.id,
    order: 1
)
playlist_song.save