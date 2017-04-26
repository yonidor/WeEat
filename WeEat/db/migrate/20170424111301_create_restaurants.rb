class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisines
      t.integer :rating
      t.boolean :accepts10bis
      t.string :address
      t.integer :max_delivery_times

      t.timestamps
    end
  end
end
