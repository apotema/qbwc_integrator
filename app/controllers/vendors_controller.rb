class VendorsController < ApplicationController

  def index
    vendor_query_xml = VendorQbxml::Query.factory(params[:query])
    if vendor_query_xml.valid?
      request = company.requests.create(
        quickbooks_request: vendor_query_xml.to_xml("request_id")
      )
      render json: request
    else
      render json: vendor_query_xml.to_xml("")
    end
  end

end
