class MsgResponseParser

  def initialize response
    @hash = Qbxml.new(:qb).from_qbxml(response)
    @type = @hash['qbxml']['qbxml_msgs_rs'].keys[1]
    @model_type = @hash['qbxml']['qbxml_msgs_rs'][@type].keys[1]
    @request_id = @hash['qbxml']['qbxml_msgs_rs'][@type]['xml_attributes']["requestID"]
  end

  def type
    @type
  end

  def request_id
    @request_id
  end

  def parse
    models = []
    for key in ret_keys
      for hash_model in Array.wrap(hash_model_for(key))
        models << factory(key).fabricate(hash_model)
      end
    end
    return models
  end

  def valid?
    @hash['qbxml']['qbxml_msgs_rs'][status_key]['xml_attributes']['statusCode'] == "0"
  end

  def status_message
    @hash['qbxml']['qbxml_msgs_rs'][status_key]['xml_attributes']['statusMessage']
  end

  private

    def factory key
      "#{key[0..key.rindex('_')-1].camelize}Factory".constantize
    end

    def ret_keys
      @hash['qbxml']['qbxml_msgs_rs'][@type].except('xml_attributes').keys
    end

    def hash_model_for key
      @hash['qbxml']['qbxml_msgs_rs'][@type][key]
    end

    def status_key
      @hash['qbxml']['qbxml_msgs_rs'].keys[1]
    end
end
