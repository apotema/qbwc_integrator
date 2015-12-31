class CompaniesController < ApplicationController

  def show
    begin
      render json: company = Company.find(params[:id])
    rescue
      render json: {status: "Company not found"}, status: 400
    end
  end

  def create
    render json: Company.create
  end

end
