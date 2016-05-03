import {
  SET_RAW,
  SET_FILTER,
  SET_OBJECT,
  SET_REGEXP,
} from '../constants/ActionTypes';

import { projection, buildHexbins } from './helpers/dataStructure';
import { filteredData, filteredDataRegExp } from './helpers/filterFunction';

import { setUrl } from '../config/urlTools';

const initialState = {
  country: false,
  source: 'OSM2',
  // options:
  // OSM0 / OSM1 / OSM2 (OpenStreetMap, where 0: all, 1: inhab, 2: inhab & filtered)
  // so OSM0 >= OSM1 >= OSM2
  appReady: false,
  allTowns: [],
  filteredTowns: [],
  hexbin: {},
  filterObject: {
    start: new Set(),
    end: new Set(),
    any: new Set(),
  },
  activeNode: {
    id: 0,
    names: [],
    length: 0,
    fullLength: 0,
  },
  fixedNode: false,
  regExp: new RegExp('.*', 'i'),
  filterLink: 'AND',
  cacheData: {},
  advancedMode: false,
  radiusMultiplier: 2,
  circleWeighted: true,
  layout: ['auto'],
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
        activeNode: initialState.activeNode, // RESET
        fixedNode: false,
        appReady: true,
        regExp: state.regExp,
        country: action.ctry,
        source: action.src,
        cacheData: Object.assign({}, state.cacheData, { [action.ctry + action.src]: action.raw }),
      });

    case SET_REGEXP:
    {
      const { router: rrouter, regExp: rE } = action;
      if (rrouter) {
        setTimeout(() =>
          setUrl(rrouter, state.country, {
            pre: Array.from(state.filterObject.start),
            inf: Array.from(state.filterObject.any),
            suf: Array.from(state.filterObject.end),
            mod: state.advancedMode,
            lin: state.filterLink,
            reg: rE,
          }), 100);
      }
      const filt = filteredDataRegExp(allTowns, rE);
      const hexbin = buildHexbins(allTowns, filt, state.country, state.radiusMultiplier);
      let activeNode = initialState.activeNode;
      if (hexbin.tiles && hexbin.tiles[state.activeNode.id]) {
        activeNode = hexbin.tiles[state.activeNode.id];
      }
      return Object.assign({}, state,
        {
          filteredTowns: filt,
          filterObject: {
            start: new Set([]),
            end: new Set([]),
            any: new Set([]),
          },
          hexbin: buildHexbins(allTowns, filt, state.country, state.radiusMultiplier),
          activeNode,
          regExp: rE,
        });
    }
    case SET_FILTER:
    {
      const { obj, link, router } = action;
      if (router) {
        setUrl(router, state.country, {
          pre: Array.from(obj.start),
          inf: Array.from(obj.any),
          suf: Array.from(obj.end),
          mod: state.advancedMode,
          lin: link,
          reg: state.regExp,
        });
      }
      const newLink = { filterLink: state.filterLink };
      if (link) {
        newLink.filterLink = link;
      }
      const { fT, regExp } = filteredData(allTowns, obj, link || state.filterLink);
      const hexbin = buildHexbins(allTowns, fT, state.country, state.radiusMultiplier);
      let activeNode = initialState.activeNode;
      if (hexbin.tiles && hexbin.tiles[state.activeNode.id]) {
        activeNode = hexbin.tiles[state.activeNode.id];
      }
      return Object.assign({}, state,
        newLink,
        {
          filteredTowns: fT,
          filterObject: obj,
          hexbin,
          activeNode,
          regExp,
        });
    }
    case SET_OBJECT:
      const newObj = action.obj;
      return Object.assign({}, state, newObj);
    default:
      return state;
  }
}
