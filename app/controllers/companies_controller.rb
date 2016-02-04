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

  def qbwc_file
    app_url = qbwc_action_url(:protocol => 'https://')

    qwc = <<-QWC
      <QBWCXML>
         <AppName>QBWC TESTER</AppName>
         <AppID></AppID>
         <AppURL>#{app_url}</AppURL>
         <AppDescription>Procore QuickBooks Integration</AppDescription>
         <AppSupport>#{root_url}</AppSupport>
         <UserName>#{company.id}</UserName>
         <OwnerID>{#{company.qwc_owner_id}}</OwnerID>
         <FileID>{#{company.qwc_file_id}}</FileID>
         <QBType>QBFS</QBType>
         <Style>Document</Style>
      </QBWCXML>
    QWC

    send_data qwc, :filename => 'procore.qwc', :content_type => 'application/x-qwc'
  end

  private

  def company
    Company.find(params[:id])
  end

end
