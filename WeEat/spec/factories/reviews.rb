FactoryGirl.define do
  factory :review do
    author_name "Shimon"
    review_text "Bla bla bla"
    rating 5

    restaurant
  end
end