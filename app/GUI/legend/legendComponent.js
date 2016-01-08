import React, { Component, PropTypes } from 'react';

export default class LegendComponent extends Component {
  render() {
    const { app } = this.props;
    const { activeNode, filterObject, filterLink,
      allTowns, filteredTowns, regExp, advancedMode } =
      app;
    const { names, length, fullLength } = activeNode;
    const { start, end, any } = filterObject;

    const filterText = [];
    if (advancedMode) {
      filterText.push(<p key={'custom'}>... based on a custom Regular Expression.</p>);
    } else {
      if (start.size) {
        filterText.push(
          <p key={'startFilter'}>...starting with:{' '}
            <strong>{Array.from(start).join(', ')}</strong></p>);
      }
      if (end.size) {
        if (start.size) {
          filterText.push(
            <span key={'fl1'}>{filterLink}</span>
          );
        }
        filterText.push(
          <p key={'endFilter'}>...ending in:{' '}
            <strong>{Array.from(end).join(', ')}</strong></p>);
      }
      if (any.size) {
        if (start.size + end.size) {
          filterText.push(
            <span key={'fl2'}>{filterLink}</span>
          );
        }
        filterText.push(
          <p key={'anyFilter'}>...containing:{' '}
            <strong>{Array.from(any).join(', ')}</strong></p>);
      }
      if (!(any.size + end.size + start.size)) {
        filterText.push(
          <p key={'noFilter'}>No filter active</p>);
      }
    }

    const formattedNames = names.map(n => {
      return n.replace(regExp, s => {
        return '(' + s + ')';
      });
    });

    return (<div>
      <h4>Matches</h4>
      <p>{formattedNames.length ? formattedNames.join(', ') : 'No Matches'}</p>

      <h4>Current Node</h4>
      <p>{length +
      ' of ' + fullLength + ' towns match the filter (' +
      (fullLength ? (Math.round(10000 * length / fullLength) / 100) : 0) +
      '%)'}</p>

      <h4>Current Filter: Find town names...</h4>
      {filterText}

      <h4>Total</h4>
      {filteredTowns.length} of {allTowns.length} loaded
      ({(Math.round(10000 * filteredTowns.length / allTowns.length) / 100) + '%'})
    </div>);
  }
}

LegendComponent.propTypes = {
  app: PropTypes.object,
};
