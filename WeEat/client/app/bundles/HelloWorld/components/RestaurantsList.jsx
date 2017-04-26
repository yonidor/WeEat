import React from 'react';
import RestaurantListItem from './RestaurantListItem';

export default class RestaurantsList extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    this.state = {
        restaurants: props.restaurants
    }
  }

  render() {
    return (
        <ul>
            { this.state.restaurants.map((rest) => <RestaurantListItem restaurant={rest} /> )}
        </ul>
        // <ul>
        //     { this.state.restaurants.map((rest) => <li> {rest.name} </li> )}
        // </ul>
    );
  }
}
