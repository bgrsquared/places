import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import * as RawActions from '../../actions/RawActions';

import FilterComponent from './filterComponent';

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = Object.assign({},
    bindActionCreators(RawActions, dispatch), { dispatch }, { pushState });
  return allActions;
}

export default connect(mapStateToProps,
  mapDispatchToProps)(FilterComponent);
