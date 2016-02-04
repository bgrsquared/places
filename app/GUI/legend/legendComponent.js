import React, { Component, PropTypes } from 'react';

export default class LegendComponent extends Component {
  render() {
    const { app } = this.props;
    const { activeNode, regExp } =
      app;
    const { names, length, fullLength } = activeNode;

    const sortNames = (a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      return -1;
    };

    const formattedNames = names
      .sort(sortNames)
      .map(n => {
        return n.replace(regExp, s => {
          return '(' + s + ')';
        });
      });

    const matchText = [];

    if (!length) {
      //
    } else if (length < fullLength) {
      matchText.push(<small key={'some'}>
        {length +
        ' of ' + fullLength + ' places match the filter (' +
        (fullLength ? (Math.round(10000 * length / fullLength) / 100) : 0) +
        '%)'}
      </small>);
    } else {
      matchText.push(<small key={'all'}>
        All {length} places in this node match the filter.
      </small>);
    }

    return (<div>
      <h4 style={{ marginBottom: '0px' }}>Matches</h4>
      {matchText}
      <p>{formattedNames.length ? formattedNames.join(', ') : 'No Matches'}</p>
    </div>);
  }
}

LegendComponent.propTypes = {
  app: PropTypes.object,
};
