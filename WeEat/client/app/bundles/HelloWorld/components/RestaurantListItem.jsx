import React from 'react';
import TenBisIcon from './TenBisIcon'
import Rating from './Rating'

export default class RestaurantsListItem extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    const tenBisIcon = this.props.restaurant.accepts10bis ? <TenBisIcon/> : null;

    return (
      <li className="restaurant-item">
          <div className="title">
              {this.props.restaurant.name}
              {tenBisIcon}
          </div>
          <div className="rating-container">
              Rating:
              <Rating value={this.props.restaurant.rating} />
          </div>
      </li>
    );
  }
}
