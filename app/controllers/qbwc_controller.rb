class QbwcController < ApplicationController

  include WashOut::SOAP

  skip_filter :authenticate

  soap_service namespace: 'http://developer.intuit.com/'

  before_filter :get_session, :except => [:authenticate, :client_version, :server_version, :_generate_wsdl]

  before_filter :dump_parameters

  def dump_parameters
    Rails.logger.debug params.inspect
  end

  soap_action '_action', :to => :action,
              :return => {'tns:serverVersionResult' => :string},
              :response_tag => 'serverVersionResponse'

  soap_action 'serverVersion', :to => :server_version,
              :return => {'tns:serverVersionResult' => :string},
              :response_tag => 'serverVersionResponse'

  soap_action 'clientVersion', :to => :client_version,
              :args   => {:strVersion => :string},
              :return => {'tns:clientVersionResult' => :string},
              :response_tag => 'clientVersionResponse'

  soap_action 'authenticate',
              :args   => {:strUserName => :string, :strPassword => :string},
              :return => {'tns:authenticateResult' => StringArray},
              :response_tag => 'authenticateResponse'

  soap_action 'sendRequestXML', :to => :send_request,
              :args   => {:ticket => :string, :strHCPResponse => :string, :strCompanyFilename => :string, :qbXMLCountry => :string, :qbXMLMajorVers => :string, :qbXMLMinorVers => :string},
              :return => {'tns:sendRequestXMLResult' => :string},
              :response_tag => 'sendRequestXMLResponse'

  soap_action 'receiveResponseXML', :to => :receive_response,
              :args   => {:ticket => :string, :response => :string, :hresult => :string, :message => :string},
              :return => {'tns:receiveResponseXMLResult' => :integer},
              :response_tag => 'receiveResponseXMLResponse'

  soap_action 'closeConnection', :to => :close_connection,
              :args   => {:ticket => :string},
              :return => {'tns:closeConnectionResult' => :string},
              :response_tag => 'closeConnectionResponse'

  soap_action 'connectionError', :to => :connection_error,
              :args   => {:ticket => :string, :hresult => :string, :message => :string},
              :return => {'tns:connectionErrorResult' => :string},
              :response_tag => 'connectionErrorResponse'

  soap_action 'getLastError', :to => :get_last_error,
              :args   => {:ticket => :string},
              :return => {'tns:getLastErrorResult' => :string},
              :response_tag => 'getLastErrorResponse'

  def server_version
    render :soap => {"tns:serverVersionResult" => server_version_response}
  end

  def client_version
    render :soap => {"tns:clientVersionResult" => check_client_version}
  end

  def authenticate
    company = Company.find(params[:strUserName])
    if company and company.password == params[:strPassword]
      result = [company.next_token, ""]
      company.update_attributes(last_connection: Time.now.utc);
    else
      result = ["nvu"]
    end
    render :soap => {"tns:authenticateResult" => {"tns:string" => result } }
  end

  def send_request
    render :soap => {'tns:sendRequestXMLResult' => RequestService.new(@company).next_request }
  end

  def receive_response
    request_service = RequestService.new(@company,params[:response])
    if params[:hresult]
      logger.warn "#{params[:hresult]}: #{params[:message]}"
      request_service.process_error("#{params[:hresult]}: #{params[:message]}")
    else
      request_service.process_request
    end
    progress = 100 / (@company.requests.pending.count + 1)
    render :soap => {'tns:receiveResponseXMLResult' => progress}
  end

  def close_connection
    render :soap => {'tns:closeConnectionResult' => 'OK'}
  end

  def connection_error
    render :soap => {'tns:connectionErrorResult' => 'done'}
  end

  def get_last_error
    render :soap => {'tns:getLastErrorResult' => ''}
  end

  protected

    def get_session
      @company = Company.find_by_qbwc_token(params[:ticket])
    end

    def server_version_response
    end

    def check_client_version
    end

end
