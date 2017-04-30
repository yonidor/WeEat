import React from 'react';
import RestaurantListItem from './RestaurantListItem';

export default class RestaurantsListFilters extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
        <div className="restaurants-filters">
          <div className="filter">
            <select id="rating" onChange={(e) => this.props.onChangeFilter(e, "ratingFilter")} value={this.props.filters.ratingFilter}>
              <option value="1">1 and more</option>
              <option value="2">2 and more</option>
              <option value="3">3 and more</option>
              <option value="4">4 and more</option>
              <option value="5">5</option>
            </select>
          </div><div className="filter">
            <select id="time-to-delivery" onChange={(e) => this.props.onChangeFilter(e, "timeToDeliverFilter")} value={this.props.filters.timeToDeliverFilter}>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
            </select>
          </div>
        </div>
    );
  }
}