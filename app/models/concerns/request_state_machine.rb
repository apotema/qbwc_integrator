module RequestStateMachine

  extend ActiveSupport::Concern

  included do 

    self.state_machine :initial => :pending do

      before_transition any => :processing do |request, transition|
        request.quickbooks_start = Time.now.utc
      end

      before_transition :processing => any do |request, transition|
        request.quickbooks_end = Time.now.utc
      end

      event :process do
        transition :pending => :processing
      end

      event :queue do
        transition :processing => :processed
      end

      event :failed do
        transition all => :error
      end
    end
  end

end
