# == Schema Information
#
# Table name: requests
#
#  id                  :integer          not null, primary key
#  state               :text
#  company_id          :integer
#  quickbooks_request  :text
#  qbwc_uuid           :text
#  quickbooks_start    :datetime
#  quickbooks_end      :datetime
#  quickbooks_response :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Request < ActiveRecord::Base

  include RequestStateMachine

  before_validation :set_uuid, on: :create

  validates :qbwc_uuid, uniqueness: true

  belongs_to :company

  scope :pending, -> { with_state(:pending) }

  def set_uuid
    begin
      self.qbwc_uuid = SecureRandom.uuid
    end while Request.exists?(qbwc_uuid: self.qbwc_uuid)
  end

end
