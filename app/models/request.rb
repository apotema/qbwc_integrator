class Request < ActiveRecord::Base

  include RequestStateMachine

  before_validation :set_uuid, on: :create

  validates :qbwc_uuid, uniqueness: true

  belongs_to :company

end
