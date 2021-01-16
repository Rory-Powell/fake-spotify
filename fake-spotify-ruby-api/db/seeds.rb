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

artist2 = Artist.new(
    name: 'Eagles'
)
artist2.save

artist3 = Artist.new(
    name: 'Eagles'
)
artist3.save

# SONGS
song = Song.new(
  title: 'Second Hand News',
  duration: '2:56',
  play_count: 54_387_221,
  is_explicit: false
)
song.save

song2 = Song.new(
    title: 'Crazy',
    duration: '2:57',
    play_count: 54_387_221,
    is_explicit: false
)
song2.save

song3 = Song.new(
    title: 'What A Wonderful World',
    duration: '2:57',
    play_count: 54_387_221,
    is_explicit: false
)
song3.save

artist_song = ArtistSong.new(
  song_id: song.id,
  artist_id: artist.id
)
artist_song.save

artist_song2 = ArtistSong.new(
    song_id: song.id,
    artist_id: artist2.id
)
artist_song2.save

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
