# == Schema Information
#
# Table name: requests
#
#  id                  :integer          not null, primary key
#  state               :text
#  company_id          :integer
#  quickbooks_request  :text
#  qbwc_uuid           :text
#  quickbooks_start    :datetime
#  quickbooks_end      :datetime
#  quickbooks_response :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class RequestSerializer < ActiveModel::Serializer

  attributes :id, :quickbooks_request, :state, :qbwc_uuid, :quickbooks_start
  attributes :quickbooks_end, :quickbooks_response 

end
