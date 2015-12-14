import React, { Component, PropTypes } from 'react';

export default class someComponent extends Component {
  render() {
    const { userName } = this.props;
    let myUserName = userName;
    if (!userName) {
      myUserName = 'World';
    }
    return (<div>Hello <span id={'userName'}>{myUserName}</span></div>);
  }
}

someComponent.propTypes = {
  userName: PropTypes.string,
};
