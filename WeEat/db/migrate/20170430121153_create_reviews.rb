class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :author_name
      t.string :review_text
      t.references :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
