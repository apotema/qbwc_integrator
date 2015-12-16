class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.text        :state
      t.references  :company
      t.text        :quickbooks_request
      t.text        :qbwc_uuid, index: { unique: true}
      t.datetime    :quickbooks_start
      t.datetime    :quickbooks_end
      t.text        :quickbooks_response
      t.timestamps null: false
    end
  end
end
