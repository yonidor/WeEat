import React from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsListFilters from './RestaurantsListFilters';

export default class RestaurantsPageContent extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    this.state = {
        filters: {
          ratingFilter: "1",
          timeToDeliverFilter: "15"
        }
    }

    this.onChangeFilter= this.onChangeFilter.bind(this);
  }

    onChangeFilter(e, filterType) {
      let newFilterValue = {};
      newFilterValue[filterType] = e.target.value;

      this.setState({ filters: Object.assign({}, this.state.filters, newFilterValue)});
  }

  getFilteredRestaurantsList(){
    var restaurants = this.props.restaurants;
    if (this.state.filters.ratingFilter != "1")
      restaurants = restaurants.filter((item) => item.rating >= parseInt(this.state.filters.ratingFilter))

    if (this.state.filters.timeToDeliver != "15")
      restaurants = restaurants.filter((item) => item.max_delivery_times >= parseInt(this.state.filters.timeToDeliverFilter))

    return restaurants;
  }

  render() {
    const restaurantsList = this.getFilteredRestaurantsList();

    return (
        <div className="restaurants-content">
          <RestaurantsListFilters onChangeFilter={this.onChangeFilter} filters={this.state.filters} />
          <RestaurantsList restaurants={restaurantsList} />
        </div>
    );
  }
}
