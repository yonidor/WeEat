import React from 'react';
import Header from './Header';
import RestaurantsPageContent from './RestaurantsPageContent';

export default class WeEatApp extends React.Component {
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
          <Header header={this.props.header}/>
          <RestaurantsPageContent restaurants={this.props.restaurants} />
        </div>
    );
  }
}
