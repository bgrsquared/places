import d3hexbin from 'd3-hexbin';

import { projectionParams, hexbinParams, relevantNumber } from '../../config/globals';

export const projection = (ctry) => {
  const params = projectionParams.get(ctry);
  const { center, translate, scale, projection: proj } = params;

  return proj
    .center(center)
    .translate(translate)
    .scale(scale);
};

const hexbin = (ctry, multiplier) => {
  const params = hexbinParams.get(ctry);
  const { size, radius } = params;

  return d3hexbin.hexbin()
    .x(d => d.x)
    .y(d => d.y)
    .size(size)
    .radius(radius * multiplier);
};

export const buildHexbins = (all, filtered, ctry, multiplier) => {
  const hbFull = hexbin(ctry, multiplier)(all);
  const hbFiltered = hexbin(ctry, multiplier)(filtered);

  const hbFullTerse = {};
  const hbFilteredTerse = {};
  let maxPercent = 0;
  let maxPlaces = 0;
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
    maxPlaces = Math.max(maxPlaces, fullLength);
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
    maxPlaces: Math.max.apply(null, Array.from(fullLengthMap.values())),
    tiles: Object.assign(
      {},
      hbFullTerse,
      hbFilteredTerse),
  };
};
