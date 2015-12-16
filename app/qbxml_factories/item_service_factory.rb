class ItemServiceFactory

  def self.fabricate qbxml_hash
    sp = qbxml_hash['sales_or_purchase'] || qbxml_hash['sales_and_purchase']
    if sp
      name = sp['purchase_desc'] || sp['sales_desc'] || qbxml_hash['name']
    else
      name = qbxml_hash['name']
    end

    {
      'id' => qbxml_hash['list_id'],
      'standard_cost_code' => {
        'name' => name,
        'full_code' => qbxml_hash['full_name'],
        'is_active' =>  qbxml_hash['is_active'],
        'version' => Time.parse(qbxml_hash['time_modified']).to_i
      }
    }
  end

end
