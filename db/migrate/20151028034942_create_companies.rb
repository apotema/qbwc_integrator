class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :qbwc_token
      t.string :qwc_owner_id
      t.string :login
      t.string :password

      t.timestamps null: false
    end
  end
end
