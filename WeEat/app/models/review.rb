class Review < ApplicationRecord
  validates :author_name, presence: true
  validates :rating, presence: true
  validates :review_text, presence: true

  belongs_to :restaurant, required: true
end
