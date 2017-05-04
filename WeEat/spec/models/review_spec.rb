require 'rails_helper'

RSpec.describe Review, :type => :model do
  let(:review) { build(:review); }

  context "is valid when" do
    it "has all required attributes are set" do
      expect(review).to be_valid
    end
  end

  context "is not valid when" do

    it "has no author name" do
      review.author_name = nil;

      expect(review).to_not be_valid
    end

    it "has no rating" do
      review.rating = nil;

      expect(review).to_not be_valid
    end

    it "has no review text" do
      review.review_text = nil;

      expect(review).to_not be_valid
    end
  end
end