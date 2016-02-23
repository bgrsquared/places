import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RawActions from '../../actions/RawActions';

import ExamplesSuffixComponent from './examplesSuffixComponent';

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = Object.assign({},
    bindActionCreators(RawActions, dispatch), { dispatch });
  return allActions;
}

export default connect(mapStateToProps,
  mapDispatchToProps)(ExamplesSuffixComponent);
