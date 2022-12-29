class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :image_url
      t.string :position
      t.integer :rating
      t.string :club
      t.integer :price
      t.integer :pace
      t.integer :dribbling
      t.integer :shooting 
      t.integer :defending
      t.integer :passing
      t.integer :physical
      t.integer :team_id
      t.integer :country_id

      t.timestamps
    end
  end
end
