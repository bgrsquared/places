import React, { Component, PropTypes } from 'react';
import { Input, Button, ButtonGroup } from 'react-bootstrap';

export default class AdvancedRegExp extends Component {
  constructor() {
    super();
    this.state = {
      regExp: '.*',
    };
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    if (this.props.regExp.toString() === '/.*/i' && this.state.regExp !== '.*') {
      this.setRE('.*');
    }
  }

  setRE(newExp) {
    const { setRegExp } = this.props;
    this.setState({ regExp: newExp });
    try {
      RegExp(newExp);
      setRegExp(RegExp(newExp, 'i'));
    } catch (err) {
      // do nothing
    }
  }

  handleChange(e) {
    this.setRE(e.target.value);
  }

  validationState() {
    const rE = this.state.regExp;
    try {
      RegExp(rE);
      return 'success';
    } catch (err) {
      return 'error';
    }
  }

  init() {
    this.setState({ regExp: this.props.regExp.toString().slice(1, -2) });
  }

  render() {
    const { regExp } = this.state;
    const exs = [
      {
        name: 'Ends in "-ach", but not "-bach"',
        regExp: '.*[^b]ach$',
      },
      {
        name: 'Contains one or more Umlaute (äöü)',
        regExp: '[äöü]+',
      },
      {
        name: 'Contains at least one é or è',
        regExp: '[éè]+',
      },
      {
        name: 'Contains whitespace',
        regExp: '[ ]+',
      },
      {
        name: 'At least 20 characters',
        regExp: '.{20,}',
      },
    ];
    const examples = [];
    exs.map((e, i) => {
      examples.push(
        <Button
          key={'regExpl' + i}
          bsSize={'small'}
          onClick={() => { this.setRE(e.regExp); }}
        >{e.name}
        </Button>);
    });

    return (
      <div>Write your own Regular Expression (
        <strong>slashes and 'i' flag are added automatically</strong>)!{' '}
        <a target={'_blank'}
           href={'https://developer.mozilla.org/en-US/docs' +
         '/Web/JavaScript/Reference/Global_Objects/RegExp'}
        >(Help)</a>
        <Input
          type={'text'}
          value={regExp}
          bsStyle={this.validationState()}
          onChange={(e) => {this.handleChange(e);}}
        />
        <Button
          bsSize={'xsmall'}
          onClick={() => this.setState({ regExp: this.props.regExp.toString().slice(1, -2) })}
        >Update Regular Expression (needed after loading an example)</Button>
        <hr/>
        Examples:{' '}
        <ButtonGroup>{examples}</ButtonGroup>
      </div>);
  }
}

AdvancedRegExp.propTypes = {
  regExp: PropTypes.any,
  setRegExp: PropTypes.func.isRequired,
};
