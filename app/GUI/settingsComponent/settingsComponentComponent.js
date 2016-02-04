import React, { Component, PropTypes } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { countryNamesMap } from '../../config/globals';

export default class SettingsComponentComponent extends Component {
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

  render() {
    const { app } = this.props;
    const { country, source, advancedMode } = app;

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
      <div>
        <h3>Settings</h3>
        <DropdownButton
          id={'sb1'}
          bsStyle={'primary'}
          title={country ? 'Country: ' + countryNamesMap.get(country) :
          <span><i className={'fa fa-spinner fa-pulse'}></i> Loading...</span>}
        >
          {btns}
        </DropdownButton>{' '}
        <DropdownButton
          id={'sb2'}
          bsStyle={sourceStyle}
          title={'Data: ' + sourceMap.get(source)}
        >
          {srcbtns}
        </DropdownButton>{' '}
        <Button
          id={'sb3'}
          bsStyle={advancedMode ? 'danger' : 'default'}
          onClick={() => { this.changeMode(!advancedMode); }}
        >
          {'Mode: ' + (advancedMode ? 'Advanced' : 'Standard')}
        </Button>
      </div>
    );
  }
}

SettingsComponentComponent.propTypes = {
  app: PropTypes.object,
  getRaw: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
  setRaw: PropTypes.func.isRequired,
};
