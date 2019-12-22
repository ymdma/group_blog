class AddColumnAdminToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :admin, :integer
  end
end
