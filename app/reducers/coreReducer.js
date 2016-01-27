import {
  SET_RAW,
  SET_FILTER,
  SET_OBJECT,
  SET_REGEXP,
} from '../constants/ActionTypes';

import { projection, buildHexbins } from './helpers/dataStructure';
import { filteredData, filteredDataRegExp } from './helpers/filterFunction';

const initialState = {
  country: false,
  source: 'OSM2',
  // options:
  // OSM0 / OSM1 / OSM2 (OpenStreetMap, where 0: all, 1: inhab, 2: inhab & filtered)
  // so OSM0 >= OSM1 >= OSM2
  appReady: false,
  allTowns: [],
  filteredTowns: [],
  hexbin: [],
  filterObject: {
    start: new Set(),
    end: new Set(),
    any: new Set(),
  },
  activeNode: {
    names: [],
    length: 0,
    fullLength: 0,
  },
  regExp: new RegExp('.*', 'i'),
  filterLink: 'AND',
  cacheData: {},
  advancedMode: false,
  radiusMultiplier: 1,
};

export default function coreReducer(state = initialState, action) {
  const { allTowns } = state;
  switch (action.type) {
    case SET_RAW:
      const myProjection = projection(action.ctry);
      const towns = action.raw.map(t => {
        const [x, y] = myProjection([+t[2], +t[1]]);
        return {
          name: t[0],
          lat: t[1],
          lon: t[2],
          x,
          y,
        };
      });

      let fiTo;
      if (state.advancedMode) {
        fiTo = filteredDataRegExp(towns, state.regExp);
      } else {
        const ret = filteredData(towns, state.filterObject, state.filterLink);
        fiTo = ret.fT;
      }

      return Object.assign({}, state, {
        allTowns: towns,
        filteredTowns: fiTo,
        filterObject: state.filterObject,
        hexbin: buildHexbins(towns, fiTo, action.ctry, state.radiusMultiplier),
        activeNode: initialState.activeNode,
        appReady: true,
        regExp: state.regExp,
        country: action.ctry,
        source: action.src,
        cacheData: Object.assign({}, state.cacheData, { [action.ctry + action.src]: action.raw }),
      });
    case SET_REGEXP:
      const rE = action.regExp;

      const filt = filteredDataRegExp(allTowns, rE);

      return Object.assign({}, state,
        {
          filteredTowns: filt,
          filterObject: {
            start: new Set(['custom']),
            end: new Set(['custom']),
            any: new Set(['custom']),
          },
          hexbin: buildHexbins(allTowns, filt, state.country, state.radiusMultiplier),
          activeNode: initialState.activeNode,
          regExp: rE,
        });
    case SET_FILTER:
      const { obj, link } = action;
      const newLink = { filterLink: state.filterLink };
      if (link) {
        newLink.filterLink = link;
      }
      const { fT, regExp } = filteredData(allTowns, obj, link || state.filterLink);

      return Object.assign({}, state,
        newLink,
        {
          filteredTowns: fT,
          filterObject: obj,
          hexbin: buildHexbins(allTowns, fT, state.country, state.radiusMultiplier),
          activeNode: initialState.activeNode,
          regExp,
        });
    case SET_OBJECT:
      const newObj = action.obj;
      return Object.assign({}, state, newObj);
    default:
      return state;
  }
}
