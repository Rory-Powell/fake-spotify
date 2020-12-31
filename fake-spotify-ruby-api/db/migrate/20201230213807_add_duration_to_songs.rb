class AddDurationToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :duration, :string
    add_column :songs, :play_count, :integer
    add_column :songs, :album_id, :bigint
    add_column :songs, :is_explicit, :boolean
  end
end
