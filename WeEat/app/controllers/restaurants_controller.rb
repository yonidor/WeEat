class RestaurantsController < ApplicationController
  def index
    @app_props = {
        restaurants: Restaurant.all,
        header: {
            addTargetUrl: new_restaurant_path
        }
    }
    # @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def new
    @restaurant = Restaurant.new
  end

  def edit
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    @restaurant.save
    redirect_to @restaurant
  end

  def destroy
    Restaurant.delete(params[:id])

    redirect_to restaurants_path
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    @restaurant.update(restaurant_params)

    redirect_to @restaurant
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :cuisines, :rating, :accepts10bis, :address, :max_delivery_times)
  end
end
