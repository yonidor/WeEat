class ReviewsController < ApplicationController
  def index
    @restaurant = Restaurant.find(params[:restaurant_id])
    @reviews = @restaurant.reviews
  end

  def new
    @restaurant = Restaurant.find(params[:restaurant_id])
    @review = Review.new(:restaurant => @restaurant)
  end

  def create
    @restaurant = Restaurant.find(params[:restaurant_id])
    @restaurant.reviews.create(review_params)

    redirect_to restaurant_reviews_path(@restaurant)
  end

  private
  def review_params
    params.require(:review).permit(:author_name, :review_text, :rating)
  end
end
