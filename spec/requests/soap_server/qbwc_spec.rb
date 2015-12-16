require "spec_helper"

describe "QBWC Soap Server", :type => :request do

  describe "operations" do

    it 'should list alll QBWC operations' do
      @client = Savon.client( wsdl: qbwc_wsdl_url )
      expect(@client.operations).to include(:authenticate)
      expect(@client.operations).to include(:server_version)
      expect(@client.operations).to include(:client_version)
      expect(@client.operations).to include(:send_request_xml)
      expect(@client.operations).to include(:receive_response_xml)
      expect(@client.operations).to include(:close_connection)
      expect(@client.operations).to include(:connection_error)
      expect(@client.operations).to include(:get_last_error)
    end
    
  end


end