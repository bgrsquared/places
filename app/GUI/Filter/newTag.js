import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'react-bootstrap';

export default class NewTag extends Component {
  addTag(tag) {
    const { filterObject, position, setFilter } = this.props;
    const temp = filterObject[position];
    temp.add(tag);
    const newFilterObject =
      Object.assign({}, filterObject, { [position]: temp });
    setFilter(newFilterObject);
  }

  handleForm(e) {
    e.preventDefault();
    const currentValue = this.refs.input.refs.input.value;
    this.refs.input.refs.input.value = '';
    if (currentValue.length) {
      this.addTag(currentValue);
    }
  }

  render() {
    const { position } = this.props;
    let placeholder = '';
    switch (position) {
      case 'start':
        placeholder = 'Add a prefix here';
        break;
      case 'end':
        placeholder = 'Add an suffix here';
        break;
      case 'any':
        placeholder = 'Add a part here';
        break;
      default:
        placeholder = 'Add a tag here';
    }
    return (<form onSubmit={ (e) => this.handleForm(e) }>
      <Input
        type={'text'}
        placeholder={placeholder}
        ref={'input'}
        buttonAfter={<Button type={'submit'}>+</Button>}
      />
    </form>);
  }
}

NewTag.propTypes = {
  filterObject: PropTypes.object,
  position: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
