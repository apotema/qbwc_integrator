class AddQwcFileIdToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :qwc_file_id, :string
  end
end
