class RequestsController < ApplicationController

  def index
    render json: company.requests
  end

end
