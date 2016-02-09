class VendorsController < ApplicationController

  def query
    vendor_query_xml = VendorQbxml::Query.factory(params[:qbxml])
    if vendor_query_xml.valid?
      qbxml_request = company.requests.create()
      qbxml_request.quickbooks_request = vendor_query_xml.to_xml(qbxml_request.qbwc_uuid)
      qbxml_request.save
      render json: qbxml_request
    else
      render json: vendor_query_xml.to_xml("")
    end
  end

  def add
    vendor_add_xml = VendorQbxml::Add.factory(params[:qbxml])
    if vendor_add_xml.valid?
      qbxml_request = company.requests.create()
      qbxml_request.quickbooks_request = vendor_add_xml.to_xml(qbxml_request.qbwc_uuid)
      qbxml_request.save
      render json: qbxml_request
    else
      render json: vendor_add_xml.to_xml("")
    end
  end

end
