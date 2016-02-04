import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { projectionParams } from '../../config/globals';

export default class CountryChooserComponent extends Component {
  constructor() {
    super();
    this.state = {
      showSources: false,
    };
  }

  chooseSource(ctry, src) {
    const { getRaw, setRaw, app, setObject } = this.props;
    const { cacheData } = app;
    setObject({ country: false });
    if (cacheData[ctry + src]) {
      setRaw(cacheData[ctry + src], ctry, src);
    } else {
      getRaw(ctry, src);
    }
  }

  render() {
    const { showSources } = this.state;
    const { app } = this.props;
    const { country, source } = app;

    const sourceMap = new Map([
      ['OSM2', 'Stage 1: Filtered Inhab. Places (Smallest)'],
      ['OSM1', 'Stage 2: Inhabited Places (Large)'],
      ['OSM0', 'Stage 3: All Places (HUGE)'],
    ]);

    const sources = [
      {
        key: 'OSM2',
        style: 'primary',
      },
      {
        key: 'OSM1',
        style: 'warning',
      },
      {
        key: 'OSM0',
        style: 'danger',
      },
    ];

    const srcbtns = [];
    sources.map(s => {
      const style = (s.key === source ? s.style : 'default');
      srcbtns.push(<Button
        bsStyle={style}
        key={s.key}
        disabled={!country}
        onClick={() => this.chooseSource(country, s.key)}
      >
        {sourceMap.get(s.key)}
      </Button>);
    });

    const countries = Array.from(projectionParams.keys());
    const btns = [];
    countries.map(c => {
      const style = (c === country ? 'primary' : 'default');
      btns.push(<Button
        bsStyle={style}
        key={c}
        onClick={() => this.chooseSource(c, source)}
      >
        {c}
      </Button>);
    });

    const changeSourceButton = [];
    if (showSources) {
      changeSourceButton.push(<Button
        key={'csb1'}
        bsSize={'xsmall'}
        bsStyle={'danger'}
        onClick={ () => this.setState({ showSources: !showSources })}
      >
        Change Source
      </Button>);
    } else {
      changeSourceButton.push(<Button
        key={'csb2'}
        bsSize={'xsmall'}
        bsStyle={'default'}
        onClick={ () => this.setState({ showSources: !showSources })}
      >
        Change Source
      </Button>);
    }

    return (
      <div>
        Country:{' '}
        <ButtonGroup>
          {btns}
        </ButtonGroup>
        <br/>
        <br/>
        Current Source:{' '}<strong>{sourceMap.get(source)}</strong>{' '}
        {changeSourceButton}
        <br/>
        {showSources ?
          <p>
            Note: Stage 2 and 3 can be very large files (especially for France and Spain!)
            <br/>
            Find the queries here:{' '}
            <a target={'_blank'}
               href={'https://gist.github.com/chroth7/43ca48597a3a28ef3dbe'}
            >Queries</a>
          </p> : ''}
        {showSources ? <ButtonGroup>
          {srcbtns}
        </ButtonGroup> : ''}
        <br/>
        <p style={{ float: 'right' }}>
          <small>Data
            &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
          </small>
        </p>
        <hr/>
      </div>
    );
  }
}

CountryChooserComponent.propTypes = {
  app: PropTypes.object,
  getRaw: PropTypes.func.isRequired,
  setRaw: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
};
