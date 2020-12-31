class DropPlaylistsSongsTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :playlists_songs
  end
end
