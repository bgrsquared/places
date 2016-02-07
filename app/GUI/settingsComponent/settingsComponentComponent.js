import React, { Component, PropTypes } from 'react';
import { Grid, Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

import { countryNamesMap, multiplierTextMap } from '../../config/globals';

export default class SettingsComponentComponent extends Component {
  setCircles(x) {
    const { setObject, setFilter, setRegExp, app } = this.props;
    const { filterObject, advancedMode, regExp } = app;
    setObject({ radiusMultiplier: x });
    if (advancedMode) {
      setRegExp(regExp);
    } else {
      setFilter(filterObject);
    }
  }

  changeMode(advancedMode) {
    const { setObject, setFilter } = this.props;
    setObject({
      advancedMode,
      regExp: '.*',
    });
    setFilter({
      start: new Set(),
      end: new Set(),
      any: new Set(),
    });
  }

  changeWeight(circleWeighted) {
    const { setObject } = this.props;
    setObject({
      circleWeighted,
    });
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
    const { app } = this.props;
    const { country, source, advancedMode, radiusMultiplier, circleWeighted } = app;

    const sourceMap = new Map([
      ['OSM2', 'Stage 1 - Filtered Inhabited Places (Smallest)'],
      ['OSM1', 'Stage 2 - Inhabited Places (Large)'],
      ['OSM0', 'Stage 3 - All Places (HUGE)'],
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
      srcbtns.push(<MenuItem
        bsStyle={style}
        key={s.key}
        disabled={s.key === source}
        onClick={() => this.chooseSource(country, s.key)}
      >
        {sourceMap.get(s.key)}
      </MenuItem>);
    });

    srcbtns.splice(1, 0, <MenuItem divider key={'divider'}/>);
    srcbtns.splice(2, 0,
      <MenuItem header key={'warn'}>Note: Stage 2 & 3 can be large files</MenuItem>);

    const countries = Array.from(countryNamesMap.keys());
    const btns = [];
    countries.map(c => {
      const style = (c === country ? 'primary' : 'default');
      btns.push(<MenuItem
        bsStyle={style}
        key={c}
        disabled={country === c}
        onClick={() => this.chooseSource(c, source)}
      >
        {countryNamesMap.get(c)}
      </MenuItem>);
    });

    let sourceStyle;
    switch (source) {
      case 'OSM2':
        sourceStyle = 'default';
        break;
      case 'OSM1':
        sourceStyle = 'warning';
        break;
      default:
        sourceStyle = 'danger';
    }

    return (
      <Grid fluid>
        <h3>Settings</h3>
        <ButtonToolbar>
          <DropdownButton
            id={'sb1'}
            bsStyle={'primary'}
            title={country ? 'Country: ' + countryNamesMap.get(country) :
          <span><i className={'fa fa-spinner fa-pulse'}></i> Loading...</span>}
          >
            {btns}
          </DropdownButton>
          <DropdownButton
            id={'sb2'}
            bsStyle={sourceStyle}
            title={'Data: ' + sourceMap.get(source)}
          >
            {srcbtns}
          </DropdownButton>
          <Button
            id={'sb3'}
            bsStyle={advancedMode ? 'danger' : 'default'}
            onClick={() => { this.changeMode(!advancedMode); }}
          >
            {'Mode: ' + (advancedMode ? 'Advanced' : 'Standard')}
          </Button>
          <DropdownButton
            id={'sb4'}
            title={'Circle Size: ' + multiplierTextMap.get(radiusMultiplier)}
          >
            <MenuItem
              bsSize={'xsmall'}
              disabled={ radiusMultiplier === 1 / 2 }
              onClick={() => { this.setCircles(1 / 2); }}
            >
              S (can be slow)
            </MenuItem>
            <MenuItem
              bsSize={'xsmall'}
              disabled={ radiusMultiplier === 1 }
              onClick={() => { this.setCircles(1); }}
            >
              M
            </MenuItem>
            <MenuItem
              bsSize={'xsmall'}
              disabled={ radiusMultiplier === 2 }
              onClick={() => { this.setCircles(2); }}
            >
              L
            </MenuItem>
            <MenuItem
              bsSize={'xsmall'}
              disabled={ radiusMultiplier === 4 }
              onClick={() => { this.setCircles(4); }}
            >
              XL
            </MenuItem>
          </DropdownButton>
          <Button
            id={'sb6'}
            bsStyle={circleWeighted ? 'primary' : 'default'}
            onClick={() => { this.changeWeight(!circleWeighted); }}
          >
            {'Circle Size: ' +
            (circleWeighted ? 'Weighted by Number of Places' : 'Equally large Circles')}
          </Button>
        </ButtonToolbar>
      </Grid>
    );
  }
}

SettingsComponentComponent.propTypes = {
  app: PropTypes.object,
  getRaw: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
  setRaw: PropTypes.func.isRequired,
  setRegExp: PropTypes.func.isRequired,
};
