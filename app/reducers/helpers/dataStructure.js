import d3geo from 'd3-geo';
import d3hexbin from 'd3-hexbin';

import { projectionParams, hexbinParams, relevantNumber } from '../../config/globals';

export const projection = (ctry) => {
  const params = projectionParams.get(ctry);
  const { center, translate, scale } = params;

  return d3geo.geo
    .mercator()
    .center(center)
    .translate(translate)
    .scale(scale);
};

const hexbin = (ctry) => {
  const params = hexbinParams.get(ctry);
  const { size, radius } = params;

  return d3hexbin.hexbin()
    .x(d => d.x)
    .y(d => d.y)
    .size(size)
    .radius(radius);
};

export const buildHexbins = (all, filtered, ctry) => {
  const hbFull = hexbin(ctry)(all);
  const hbFiltered = hexbin(ctry)(filtered);

  const hbFullTerse = {};
  const hbFilteredTerse = {};
  let maxPercent = 0;
  const fullLengthMap = new Map();

  hbFull.forEach(x => {
    fullLengthMap.set(`${x.i}/${x.j}`, x.length);
    hbFullTerse[`${x.i}/${x.j}`] = ({
      id: `${x.i}/${x.j}`,
      names: [],
      length: 0,
      fullLength: x.length,
      percentage: 0,
      x: x.x,
      y: x.y,
    });
  });
  hbFiltered.forEach(x => {
    const fullLength = fullLengthMap.get(`${x.i}/${x.j}`);
    const percentage = x.length / fullLength;
    if (fullLength > relevantNumber.get(ctry)) {
      maxPercent = Math.max(maxPercent, percentage);
    }
    hbFilteredTerse[`${x.i}/${x.j}`] = ({
      id: `${x.i}/${x.j}`,
      names: x.map(town => town.name),
      length: x.length,
      fullLength,
      percentage,
      x: x.x,
      y: x.y,
    });
  });

  return {
    maxPercent,
    tiles: Object.assign(
      {},
      hbFullTerse,
      hbFilteredTerse),
  };
};
