import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { projectionParams } from '../../config/globals';

export default class CountryChooserComponent extends Component {
  chooseSource(ctry, src) {
    const { getRaw, setRaw, app } = this.props;
    const { cacheData } = app;
    if (cacheData[ctry + src]) {
      setRaw(cacheData[ctry + src], ctry, src);
    } else {
      getRaw(ctry, src);
    }
  }

  render() {
    const { app } = this.props;
    const { countryFull, source } = app;

    const sources = [
      {
        name: 'All Places',
        key: 'OSM0',
      },
      {
        name: 'Inhabited Places',
        key: 'OSM1',
      },
      {
        name: 'Filtered Inhab. Places',
        key: 'OSM2',
      },
    ];

    const srcbtns = [];
    sources.map(s => {
      const style = (s.key === source ? 'primary' : 'default');
      srcbtns.push(<Button
        bsStyle={style}
        key={s.key}
        disabled={!countryFull}
        onClick={() => this.chooseSource(countryFull, s.key)}
      >
        {s.name}
      </Button>);
    });

    const countries = Array.from(projectionParams.keys());
    const btns = [];
    countries.map(c => {
      const style = (c === countryFull ? 'primary' : 'default');
      btns.push(<Button
        bsStyle={style}
        key={c}
        onClick={() => this.chooseSource(c, source)}
      >
        {c}
      </Button>);
    });

    return (
      <div>
        Country:{' '}
        <ButtonGroup>
          {btns}
        </ButtonGroup>
        <br/>
        <br/>
        Source:{' '}
        <ButtonGroup>
          {srcbtns}
        </ButtonGroup>
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
};
