class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

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
