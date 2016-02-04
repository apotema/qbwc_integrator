# == Schema Information
#
# Table name: companies
#
#  id              :integer          not null, primary key
#  qbwc_token      :string
#  qwc_owner_id    :string
#  password        :string           default("123456")
#  last_connection :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Company < ActiveRecord::Base

  before_create :generate_tokens
  has_many :requests

  def next_token
    self.update_attribute(:qbwc_token, generate_qbwc_token)
    self.qbwc_token
  end

  def generate_tokens
    self.qwc_file_id = SecureRandom.uuid
    self.qwc_owner_id = SecureRandom.uuid
    self.qbwc_token = generate_qbwc_token
  end

  def generate_qbwc_token
    begin
      self.qbwc_token = SecureRandom.urlsafe_base64
    end while Company.exists?(qbwc_token: qbwc_token)
    self.qbwc_token
  end

end
