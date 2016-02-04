class VendorsController < ApplicationController

  def query
    vendor_query_xml = VendorQbxml::Query.factory(params[:query])
    if vendor_query_xml.valid?
      request = company.requests.create()
      request.quickbooks_request = vendor_query_xml.to_xml(request.qbwc_uuid)
      request.save
      render json: request
    else
      render json: vendor_query_xml.to_xml("")
    end
  end

end
