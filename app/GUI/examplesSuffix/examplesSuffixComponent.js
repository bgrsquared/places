import React, { Component, PropTypes } from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

import { suffixList } from './examplesSuffixArray';

export default class ExamplesSuffixContainer extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    const { setFilter } = this.props;
    const { show } = this.state;

    const sortByFirst = (a, b) => {
      if (a[0] > b[0]) {
        return 1;
      }
      return -1;
    };

    const sfxButtons = [];
    suffixList.sort(sortByFirst).map((s, i) => {
      sfxButtons.push(
        <Button
          bsSize={'xsmall'}
          key={'ex' + i}
          style={{ marginTop: '-1px', borderRadius: '0px' }}
          onClick={() => {
            setFilter(
            { start: new Set(), end: new Set(s), any: new Set() }
          ); }}
        >
          {s.join(', ')}
        </Button>);
    });

    const content = [];
    if (show) {
      content.push(<ButtonGroup key={'btns'}>{sfxButtons}</ButtonGroup>);
    }

    return (<div>
      <h4>Examples (Suffixes){' '}
        <Button bsSize={'xsmall'}
                bsStyle={'danger'}
                onClick={ () => this.setState({ show: !show }) }
        >
          Toggle Examples
        </Button>
      </h4>
      <small>These examples are part of Moritz Stefaner's example for Germany.
        So, some do not really make sense for Switzerland (such as e.g. 'ow').
      </small>
      {content}
    </div>);
  }
}

ExamplesSuffixContainer.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
