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

FactoryGirl.define do
  factory :request do
    quickbooks_request {
      CustomerQbxml::Query.factory({max_results: 200}).to_xml("request_id")
    }
  end
end
