class CreateArtistSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :artist_song do |t|
      t.references :song, null: false, foreign_key: true
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
