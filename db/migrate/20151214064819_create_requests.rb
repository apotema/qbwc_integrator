class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.text        :state
      t.reference   :company
      t.text        :quickbooks_request
      t.text        :request_type
      t.text        :qbwc_uuid
      t.datetime    :quickbooks_start
      t.datetime    :quickbooks_end
      t.text        :quickbooks_response
      t.timestamps null: false
    end
  end
end
