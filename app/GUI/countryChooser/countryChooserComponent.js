import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class CountryChooserComponent extends Component {
  chooseCountry(ctry) {
    const { getRaw, setRaw, app } = this.props;
    const { cacheData } = app;
    if (cacheData[ctry]) {
      setRaw(cacheData[ctry], ctry);
    } else {
      getRaw(ctry);
    }
  }

  render() {
    const { app } = this.props;
    const { country } = app;

    const countries = ['CH', 'DE'];
    const btns = [];
    countries.map(c => {
      const style = (c === country ? 'primary' : 'default');
      btns.push(<Button
        bsStyle={style}
        key={c}
        onClick={() => this.chooseCountry(c)}
      >
        {c}
      </Button>);
    });

    return (
      <div>Please choose a country:{' '}
        <ButtonGroup>
          {btns}
        </ButtonGroup>
      </div>
    );
  }
}

CountryChooserComponent.propTypes = {
  app: PropTypes.object,
  getRaw: PropTypes.func.isRequired,
  setRaw: PropTypes.func.isRequired,
};
