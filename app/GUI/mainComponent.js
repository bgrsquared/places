/* global ga */
import React, { Component, PropTypes } from 'react';
import { Grid, Col, Modal, Button, ButtonGroup } from 'react-bootstrap';

import CountryChooserContainer from './countryChooser/countryChooserContainer';
import ChartContainer from './charts/chartContainer';
import LegendContainer from './legend/legendContainer';
import FilterContainer from './filter/filterContainer';
import ExamplesSuffixContainer from './examplesSuffix/examplesSuffixContainer';
import { Disclaimer } from './helpers/disclaimer';
import { Help } from './helpers/help';
import { aspectRatio } from '../config/globals';

export default class mainComponent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: true,
      showHelp: false,
    };
  }

  componentDidMount() {
    if (document.location.hostname !== 'localhost') {
      ga('send', 'pageview', '/places');
    }

    // Load initial country
    const { getRaw, app } = this.props;
    getRaw('CH', app.source);
  }

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

  showModal(showHelp = false) {
    this.setState({
      showModal: true,
      showHelp,
    });
  }

  closeModal() {
    this.setState({ showModal: false });
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
    const { showModal, showHelp } = this.state;
    const { appReady, country, advancedMode, radiusMultiplier } = app;
    const ar = aspectRatio.get(country);

    const core = [];
    if (!appReady) {
      core.push(<div key={'coreLoad'}>Loading...</div>);
    } else {
      core.push(<Grid fluid key={'coreFull'}>
        <Col xs={ar === 'portrait' ? 6 : 12}
             md={ar === 'portrait' ? 6 : 9}
        >
          <ChartContainer />
        </Col>
        <Col xs={ar === 'portrait' ? 6 : 12}
             md={ar === 'portrait' ? 6 : 3}
        >
          <LegendContainer />
        </Col>
      </Grid>);
    }

    const mainContent = [];
    if (country) {
      mainContent.push(
        <div key={'mc'}>
          <hr/>
          <FilterContainer />
          <hr/>
          {core}
          <hr/>
          <ExamplesSuffixContainer />
        </div>);
    } else {
      mainContent.push(
        <div key={'loading'}>
          <i className={'fa fa-spinner fa-pulse'}></i> Loading & Preparing Data...
          <br/>
          <br/>
          <small>This can take a while... some files are pretty large...</small>
        </div>
      );
    }

    return (
      <div>
        <Modal onHide={this.closeModal.bind(this)}
               show={showModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {showHelp ? 'Help' : 'Thanks & Source'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showHelp ? <Help/> : <Disclaimer/>}
          </Modal.Body>
        </Modal>
        <Grid fluid>
          <div style={{ float: 'right' }}>
            <Button
              bsStyle={'danger'}
              bsSize={'xsmall'}
              onClick={() => { this.showModal(true); }}
            ><i className={'fa fa-question'}></i>
            </Button>{' '}

            <Button
              bsStyle={'default'}
              bsSize={'xsmall'}
              onClick={() => { this.showModal(); }}
            >Thanks & Source
            </Button>{' '}

            <Button
              bsStyle={ advancedMode ? 'danger' : 'default' }
              bsSize={'xsmall'}
              onClick={() => { this.changeMode(!advancedMode); }}
            >Advanced Mode
            </Button>{' '}

            Circle Size:{' '}
            <ButtonGroup>
              <Button
                bsSize={'xsmall'}
                bsStyle={ radiusMultiplier === 1 / 2 ? 'primary' : 'default' }
                onClick={() => { this.setCircles(1 / 2); }}
              >
                S
              </Button>
              <Button
                bsSize={'xsmall'}
                bsStyle={ radiusMultiplier === 1 ? 'primary' : 'default' }
                onClick={() => { this.setCircles(1); }}
              >
                M
              </Button>
              <Button
                bsSize={'xsmall'}
                bsStyle={ radiusMultiplier === 2 ? 'primary' : 'default' }
                onClick={() => { this.setCircles(2); }}
              >
                L
              </Button>
              <Button
                bsSize={'xsmall'}
                bsStyle={ radiusMultiplier === 5 ? 'primary' : 'default' }
                onClick={() => { this.setCircles(5); }}
              >
                XL
              </Button>
            </ButtonGroup>
          </div>
          <br/>
          <hr/>
          <CountryChooserContainer />
          {mainContent}
        </Grid>
      </div>);
  }
}

mainComponent.propTypes = {
  app: PropTypes.object,
  getRaw: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
  setRegExp: PropTypes.func.isRequired,
};
