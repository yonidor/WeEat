FactoryGirl.define do
  factory :restaurant do
    name "Moshe"
    address "Ibn Gvirol 30"
    accepts10bis true
    cuisines "Italian"
    max_delivery_times 120
  end
end