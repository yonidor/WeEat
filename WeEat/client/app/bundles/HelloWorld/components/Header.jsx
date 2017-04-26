import React from 'react';

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
          <h1>
            This is the header!
          </h1>
        </header>
    );
  }
}
