import React, { Component, PropTypes } from 'react';
import d3scale from 'd3-scale';
const colorScale = d3scale.viridis();

import { hexbinParams } from '../../config/globals';

export default class ChartComponent extends Component {
  render() {
    const { app, setObject } = this.props;
    const { hexbin, country, radiusMultiplier } = app;
    const { tiles, maxPercent } = hexbin;
    const dots = [];
    const hbP = hexbinParams.get(country);
    const { radius, size } = hbP;

    if (maxPercent) {
      colorScale.domain([maxPercent, 0]);
    } else {
      colorScale.domain([-1, 0]);
    }

    for (const tile in tiles) {
      if (tiles[tile].x) {
        const t = tiles[tile];
        const col = colorScale(t.percentage);
        dots.push(
          <circle key={t.x + ' ' + t.y}
                  className={'fillTransition'}
                  cx={t.x}
                  cy={t.y}
                  r={radius * 5 / 6 * radiusMultiplier}
                  style={{ 'fill': col }}
                  onMouseOver={() => { setObject({ activeNode: t }); }}
                  onClick={() => { setObject({ activeNode: t }); }}
          />);
      }
    }

    return (<div>
      <svg
        ref={'svg'}
        width={'100%'}
        height={'100%'}
        viewBox={'0 0 ' + size[0] + ' ' + size[1]}
      >
        {dots}
      </svg>
    </div>);
  }
}

ChartComponent.propTypes = {
  app: PropTypes.object,
  setObject: PropTypes.func.isRequired,
};
