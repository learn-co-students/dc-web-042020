class AddPenNameToAuthor < ActiveRecord::Migration[6.0]
  def change
    add_column :authors, :pen_name, :string
  end
end
