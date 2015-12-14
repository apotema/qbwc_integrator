class Company < ActiveRecord::Base

  validates :login, uniqueness: true, presence: true
  validates :password, presence: true

  before_create :generate_tokens

  def next_token
    self.update_attribute(:qbwc_token, generate_qbwc_token)
    self.qbwc_token
  end

  def generate_tokens
    self.password = "123456"
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
