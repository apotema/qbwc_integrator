class RequestService

  include Wisper::Publisher

  def initialize requester, response = nil
    @requester = requester
    @response = response
    @msg_parser = MsgResponseParser.new(@response) if @response
  end

  def next_request
    request = @requester.requests.pending.first
    if request
      request.process
      request.quickbooks_request
    end
  end

  def process_request
    request = processing_request
    if request
      request.update_attributes(quickbooks_response: @response)
      request.queue
      if @msg_parser.valid?
        publish(@msg_parser.type, request, @msg_parser.parse)
      else
        process_error(@msg_parser.status_message)
      end
    end
  end

  def process_error(message)
    QuickbooksErrorWorker.perform_async(processing_request.id, message)
  end

  private

  def processing_request
    @processing_request ||= @requester.requests.find_by(qbwc_uuid: @msg_parser.request_id)
  end

end
