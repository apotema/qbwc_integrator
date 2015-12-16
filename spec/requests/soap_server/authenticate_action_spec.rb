require "rails_helper"

describe "QBWC authentication", :type => :request do

  let!(:client) { Savon.client( wsdl: qbwc_wsdl_url ) }
  let!(:company) { create(:company, password: 'somePassword1345') }

  describe "right password" do

    it "should authenticate a valid company" do
      response = client.call(:authenticate, message: {strUserName: "#{company.id}", strPassword: "somePassword1345" } )
      company.reload
      expect(response.body[:authenticate_response][:authenticate_result][:string]).to eq [company.qbwc_token,{:"@xsi:type"=>"xsd:string"}]
    end

  end

  describe "wrong password" do

    it "should not authenticate" do
      response = client.call(:authenticate, message: {strUserName: "#{company.id}", strPassword: "password" } )
      company.reload
      expect(response.body[:authenticate_response][:authenticate_result][:string]).to eq "nvu"
    end

  end

end
