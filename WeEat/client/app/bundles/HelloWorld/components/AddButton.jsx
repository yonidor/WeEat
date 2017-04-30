import React from 'react';

export default class AddButton extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
        <a href={this.props.targetUrl}>
          <div className="button-add">
          </div>
        </a>
    )
  }
}
