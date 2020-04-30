class RemoveUnderscoreFromPenname < ActiveRecord::Migration[6.0]
  def change
    rename_column :authors, :pen_name, :penname
  end
end
