class ApplicationController < ActionController::Base

  def company
    Company.find(params[:company_id])
  end

  def default_serializer_options
    {root: false}
  end

end

class StringArray < WashOut::Type
  map "tns:string" => [:string]
end
