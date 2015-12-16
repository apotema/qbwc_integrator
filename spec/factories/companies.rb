# == Schema Information
#
# Table name: companies
#
#  id           :integer          not null, primary key
#  qbwc_token   :string
#  qwc_owner_id :string
#  password     :string           default("123456")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

FactoryGirl.define do
  factory :company do
  end
end
