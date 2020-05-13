class ChangeAuthorColumnToAuthorId < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :author 
    add_column :books, :author_id, :integer
  end

  # def down
  #   add_column :books, :author, :string
  #   remove_column :books, :author_id
  # end
end
