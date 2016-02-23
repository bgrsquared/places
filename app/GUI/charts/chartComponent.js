import React, { Component, PropTypes } from 'react';
import d3scale from 'd3-scale';
const colorScale = d3scale.scaleViridis();

import { hexbinParams } from '../../config/globals';

export default class ChartComponent extends Component {
  render() {
    const { app, setObject } = this.props;
    const { hexbin, country, radiusMultiplier, activeNode, circleWeighted } = app;
    const { tiles, maxPercent, maxPlaces } = hexbin;
    const dots = [];
    const hbP = hexbinParams.get(country);
    const { radius, size } = hbP;

    if (maxPercent) {
      colorScale.domain([maxPercent, 0]);
    } else {
      colorScale.domain([-1, 0]);
    }

    const radScale = (circleWeighted ? d3scale.scaleLog()
      .domain([1, maxPlaces])
      .range([0.5, 2]) : () => 2);

    const offBoundsDot = {
      names: [],
      length: 0,
      fullLength: 0,
    };

    for (const tile in tiles) {
      if (tiles[tile].x) {
        const t = tiles[tile];
        const col = colorScale(t.percentage);

        // off bounds
        if (t.x > size[0] || t.x < 0 || t.y > size[1] || t.y < 0) {
          offBoundsDot.length += t.length;
          offBoundsDot.fullLength += t.fullLength;
          offBoundsDot.names = offBoundsDot.names.concat(t.names);
        } else {
          // in bounds
          const act = (activeNode.id === t.id);
          dots.push(
            <circle key={`${t.x} ${t.y}`}
                    className={'fillTransition'}
                    stroke={act ? 'orangered' : 'white'}
                    strokeWidth={act ? 1 : 0}
                    cx={t.x}
                    cy={t.y}
                    r={radScale(t.fullLength) * radius * 5 / 12 * radiusMultiplier}
                    style={{ fill: col }}
                    onMouseOver={() => { setObject({ activeNode: t }); }}
                    onClick={() => { setObject({ activeNode: t }); }}
            />);
        }
      }
    }

    if (offBoundsDot.fullLength) {
      dots.push(
        <circle key={'OffBounds'}
                className={'fillTransition'}
                cx={size[0] - 4 * radius * 5 / 6 * radiusMultiplier}
                cy={size[1] - 4 * radius * 5 / 6 * radiusMultiplier}
                r={4 * radius * 5 / 6 * radiusMultiplier}
                style={{ fill: colorScale(offBoundsDot.length / offBoundsDot.fullLength) }}
                onMouseOver={() => { setObject({ activeNode: offBoundsDot }); }}
                onClick={() => { setObject({ activeNode: offBoundsDot }); }}
        />);
      dots.push(
        <text
          key={'obtext'}
          textAnchor={'end'}
          fontSize={'10px'}
          x={size[0] - 8 * radius * 5 / 6 * radiusMultiplier}
          y={size[1] - 2}
        >Places outside of map</text>
      );
    }


    return (<div>
      <svg
        ref={'svg'}
        width={'100%'}
        height={'100%'}
        viewBox={`0 0 ${size[0]} ${size[1]}`}
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
