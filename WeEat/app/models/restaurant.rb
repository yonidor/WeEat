class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :accepts10bis, presence: true
  validates :cuisines, presence: true
  validates :address, presence: true
  validates :max_delivery_times, presence: true
  has_many :reviews

  def rating
    reviews.collect(&:rating).sum.to_f/reviews.length if reviews.length > 0
  end
end
