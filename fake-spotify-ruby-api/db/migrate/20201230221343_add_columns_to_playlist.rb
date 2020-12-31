class AddColumnsToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_column :playlists, :description, :string
    add_reference :playlists, :user, null: false, foreign_key: true
  end
end
