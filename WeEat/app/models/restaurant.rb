class Restaurant < ApplicationRecord
  has_many :reviews

  def rating
    reviews.collect(&:rating).sum.to_f/reviews.length if reviews.length > 0
  end
end
