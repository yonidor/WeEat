require 'rails_helper'

RSpec.describe Restaurant, :type => :model do
  let(:restaurant) { build(:restaurant); }

  context "is valid when" do
    it "has all required attributes set" do
      expect(restaurant).to be_valid
    end
  end

  context "is not valid when" do

    it "has no name" do
      restaurant.name = nil;

      expect(restaurant).to_not be_valid
    end

    it "has no cuisine" do
      restaurant.cuisines = nil;

      expect(restaurant).to_not be_valid
    end

    it "has no accepts10bis value set" do
      restaurant.accepts10bis = nil;

      expect(restaurant).to_not be_valid
    end

    it "has no address" do
      restaurant.address = nil;

      expect(restaurant).to_not be_valid
    end

    it "has no maximum delivery time set" do
      restaurant.max_delivery_times = nil;

      expect(restaurant).to_not be_valid
    end
  end

  describe "#rating" do
    it "is the average of all reviews rating" do
      restaurant.reviews << build(:review, rating: 3)
      restaurant.reviews << build(:review, rating: 5)

      expect(restaurant.rating).to equal(4.0)
    end

    it "is nil when there is no review for the restaurant" do
      expect(restaurant.rating).to be_nil
    end
  end
end