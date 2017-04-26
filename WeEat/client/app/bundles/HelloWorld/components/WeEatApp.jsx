import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import RestaurantsList from './RestaurantsList';

export default class WeEatApp extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
        <div>
          <Header/>
          <RestaurantsList restaurants={this.props.restaurants}></RestaurantsList>
        </div>
    );
  }
}
