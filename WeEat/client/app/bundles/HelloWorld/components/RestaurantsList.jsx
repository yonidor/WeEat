import React from 'react';
import RestaurantListItem from './RestaurantListItem';

export default class RestaurantsList extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
        <ul className="restaurants-list">
            { this.props.restaurants.map((rest) => <RestaurantListItem restaurant={rest} /> )}
        </ul>
    );
  }
}
