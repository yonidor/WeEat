import React from 'react';

export default class RestaurantsListItem extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <li>
          <div>{this.props.restaurant.name}</div>
      </li>
    );
  }
}
