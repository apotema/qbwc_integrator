require "rails_helper"

describe CompaniesController do
  
  let(:company) { create :company }

  describe "#get" do

    it "returns the company details" do
      get company_path(company)
      expect(response_body["password"]).to be_eql "123456"
      expect(response_body["id"]).to be_eql company.id
    end

    it "returns 400 if no company is found" do
      get company_path(id: "invalid_id")
      expect(response.status).to be 400
    end

  end

  describe "#post" do

    it "creates a new company" do
      post companies_path
      expect(response_body["password"]).to be_eql "123456"
      expect(response_body["id"]).to_not be nil
    end

  end

end
