require 'rails_helper'

describe 'QBWC soap server', type: :request do

  let!(:client) { Savon.client( wsdl: qbwc_wsdl_url ) }
  let(:company) { create(:company) }
  let(:company_without_request) { create(:company) }
  let!(:request) { create(:request, company: company) }

  describe 'send_request' do

    it 'should get the first :active request from the company' do
      response = client.call(:send_request_xml, message: {ticket: company.qbwc_token } )
      expect( response.body[:send_request_xml_response][:send_request_xml_result].gsub(/\s+/, "") )
        .to include request.quickbooks_request.gsub(/\s+/, "")
    end

    it 'should not respond with requests from other companies' do
      response = client.call(:send_request_xml, message: {ticket: company_without_request.qbwc_token } )
      expect( response.body[:send_request_xml_response][:send_request_xml_result] ).to_not include "QBXMLMsgsRq"
    end

  end

  describe 'receive_response' do

    let(:xml) { File.read('spec/resources/items_service.xml') }
    let!(:second_request) { create(:request, company: company) }

    before do
      second_request.update_attribute(:qbwc_uuid, "2")
    end

    it 'should return the correct percentege of conclusion' do
      second_request.process
      response = client.call(:receive_response_xml, message: {
          response: xml, ticket: company.qbwc_token
        }
      )
      expect(
        response.body[:receive_response_xml_response][:receive_response_xml_result]
      ).to eql "50"
    end

  end

end
