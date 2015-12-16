class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :qbwc_token
      t.string :qwc_owner_id
      t.string :password, default: "123456"
      t.datetime :last_connection
      t.timestamps null: false
    end
  end
end
