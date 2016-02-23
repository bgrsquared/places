import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RawActions from '../actions/RawActions';

import MainComponent from './mainComponent';

function mapStateToProps(state) {
  return {
    router: state.router,
    app: state.app,
    // q: state.router.location.query.q,
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = Object.assign({},
    bindActionCreators(RawActions, dispatch), { dispatch });
  return allActions;
}

export default connect(mapStateToProps,
  mapDispatchToProps)(MainComponent);
