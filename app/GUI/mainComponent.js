/* global ga */
import React, { Component, PropTypes } from 'react';
import { Grid, Col, Modal, Button } from 'react-bootstrap';

import CountryChooserContainer from './countryChooser/countryChooserContainer';
import ChartContainer from './charts/chartContainer';
import LegendContainer from './legend/legendContainer';
import FilterContainer from './filter/filterContainer';
import ExamplesSuffixContainer from './examplesSuffix/examplesSuffixContainer';
import { Disclaimer } from './helpers/disclaimer';
import { aspectRatio } from '../config/globals';

export default class mainComponent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: true,
    };
  }

  componentDidMount() {
    if (document.location.hostname !== 'localhost') {
      ga('send', 'pageview', '/placeNames');
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

  closeModal() {
    this.setState({ showModal: false });
  }

  showModal() {
    this.setState({ showModal: true });
  }

  render() {
    const { app } = this.props;
    const { showModal } = this.state;
    const { appReady, country, advancedMode } = app;
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
    }

    return (
      <div>
        <Modal onHide={this.closeModal.bind(this)}
               show={showModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thanks & Source</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Disclaimer/>
          </Modal.Body>
        </Modal>
        <Grid fluid>
          <Button
            bsStyle={ advancedMode ? 'danger' : 'default' }
            bsSize={'xsmall'}
            style={{ float: 'right' }}
            onClick={() => { this.changeMode(!advancedMode); }}
          >Advanced Mode
          </Button>
          <Button
            bsStyle={'default'}
            bsSize={'xsmall'}
            style={{ float: 'right' }}
            onClick={() => { this.showModal(); }}
          >Show Info
          </Button>
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
};
