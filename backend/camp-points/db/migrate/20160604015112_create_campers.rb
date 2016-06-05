class CreateCampers < ActiveRecord::Migration
  def change
    create_table :campers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :allsports
      t.integer :archery
      t.integer :canoeing
      t.integer :creative_arts
      t.integer :culinary_fun
      t.integer :dance
      t.integer :eagle_I
      t.integer :fencing
      t.integer :kayaking
      t.integer :performing_arts
      t.integer :rock_climbing
      t.integer :sup
      t.integer :sailing
      t.integer :swimming
      t.integer :tennis
      t.integer :water_ski
      t.integer :windsurfing

      t.timestamps null: false
    end
  end
end
