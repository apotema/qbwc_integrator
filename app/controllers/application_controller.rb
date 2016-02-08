class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session

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
