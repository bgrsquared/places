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

      return Object.assign({}, state, {
        allTowns: towns,
        filteredTowns: towns,
        filterObject: initialState.filterObject,
        hexbin: buildHexbins(towns, towns, action.ctry),
        activeNode: initialState.activeNode,
        appReady: true,
        regExp: initialState.regExp,
        country: action.ctry,
        cacheData: Object.assign({}, state.cacheData, { [action.ctry]: action.raw }),
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
          hexbin: buildHexbins(allTowns, filt, state.country),
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
          hexbin: buildHexbins(allTowns, fT, state.country),
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
