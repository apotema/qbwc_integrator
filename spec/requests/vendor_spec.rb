require "rails_helper"

describe VendorsController do
  
  let(:company) { create :company }

  describe "#index" do

    it "creates a vendor list request" do
      post query_company_vendors_path(company)
      expect(response_body["state"]).to be_eql "pending"
    end

  end

end
