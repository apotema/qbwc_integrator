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

  def quickbooks_response
    doc = Nokogiri.XML(object.quickbooks_response) do |config|
      config.default_xml.noblanks
    end
    doc.to_xml(:indent => 2)
  end 

end
