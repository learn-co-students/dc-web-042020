class CreateCatHobbies < ActiveRecord::Migration[6.0]
  def change
    create_table :cat_hobbies do |t|
      t.references :cat, null: false, foreign_key: true
      t.references :hobby, null: false, foreign_key: true
      #t.integer :cat_id
      #t.integer :hobby_id
      t.timestamps
    end
  end
end
