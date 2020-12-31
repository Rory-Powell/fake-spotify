class RemoveAlbumFromSong < ActiveRecord::Migration[6.0]
  def change
    remove_column :songs, :album_id, :string
  end
end
