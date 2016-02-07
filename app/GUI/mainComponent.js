/* global ga */
import React, { Component, PropTypes } from 'react';
import { Grid, Col, Modal, Button } from 'react-bootstrap';

import SettingsComponentContainer from './settingsComponent/settingsComponentContainer';
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

  showModal(showHelp = false) {
    this.setState({
      showModal: true,
      showHelp,
    });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { app } = this.props;
    const { showModal, showHelp } = this.state;
    const { appReady, country } = app;
    const ar = aspectRatio.get(country);

    const core = [];
    if (!appReady) {
      core.push(<div key={'coreLoad'}>Loading...</div>);
    } else {
      core.push(<Grid fluid key={'coreFull'}>
        <Col xs={ar === 'portrait' ? 6 : 12}
             sm={ar === 'portrait' ? 6 : 12}
             md={ar === 'portrait' ? 6 : 9}
             lg={ar === 'portrait' ? 6 : 9}
        >
          <ChartContainer />
        </Col>
        <Col xs={ar === 'portrait' ? 6 : 12}
             sm={ar === 'portrait' ? 6 : 12}
             md={ar === 'portrait' ? 6 : 3}
             lg={ar === 'portrait' ? 6 : 3}
        >
          <LegendContainer />
        </Col>
      </Grid>);
    }

    const mainContent = [];
    if (country) {
      mainContent.push(
        <div key={'mc'}>
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
        <div style={{ float: 'left' }}>
          <h1 style={{ marginLeft: '10px', marginTop: '0px' }}>Places!</h1>
          <span style={{ marginLeft: '10px' }}>Find geospatial patterns in place names.</span>
        </div>
        <div style={{
          float: 'right',
          marginRight: '10px',
          padding: '5px',
          borderRadius: '10px',
          border: '1px solid #EEE' }}
        >
          <div style={{ float: 'right' }}>
          <Button
            bsStyle={'default'}
            bsSize={'xsmall'}
            onClick={() => { this.showModal(); }}
          >Thanks & Source
          </Button>{' '}

          <Button
            bsStyle={'danger'}
            bsSize={'xsmall'}
            onClick={() => { this.showModal(true); }}
          ><i className={'fa fa-question'}></i>
          </Button>{' '}
          </div>
          <br/>
          <br/>
          <div style={{ float: 'right' }}>
            <small>Data
              &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
            </small>
          </div>
        </div>

        <div style={{ clear: 'both' }}>
          <hr/>
          <Grid fluid>
            <SettingsComponentContainer />
            <hr/>
            {mainContent}
          </Grid>
        </div>
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
