import React from 'react';

export default class Rating extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    var stars = "";
    for(var i=0; i < this.props.value; i++)
      stars += "☆";

    return (
        <span className="rating-stars">{stars}</span>
    );
  }
}
