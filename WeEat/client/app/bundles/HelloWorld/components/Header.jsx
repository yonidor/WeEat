import React from 'react';
import AddButton from './AddButton';

export default class Header extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
        <header>
          <h2> EatWell </h2>
          <h3> Let's find lunch now </h3>
          <AddButton targetUrl={this.props.header.addTargetUrl}/>
        </header>
    );
  }
}
