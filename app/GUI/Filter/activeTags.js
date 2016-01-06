import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class ActiveTags extends Component {
  removeTag(tag) {
    const { filterObject, position, setFilter } = this.props;
    const temp = filterObject[position];
    temp.delete(tag);
    const newFilterObject =
      Object.assign({}, filterObject, { [position]: temp });
    setFilter(newFilterObject);
  }

  render() {
    const { tags } = this.props;

    const buttons = [];
    Array.from(tags).sort().map((t, i) => {
      buttons.push(
        <Button bsSize={'xsmall'}
                key={'tag' + i}
                onClick={() => { this.removeTag(t); }}
        >
          &times; {t}
        </Button>);
    });

    const content = [];
    if (buttons.length) {
      content.push(<ButtonGroup key={'bg'}>{buttons}</ButtonGroup>);
    } else {
      content.push(<p key={'p'}><small>No active tags.</small></p>);
    }

    return (<div>
      {content}
    </div>);
  }
}

ActiveTags.propTypes = {
  filterObject: PropTypes.object,
  position: PropTypes.string,
  setFilter: PropTypes.func,
  tags: PropTypes.object,
};
