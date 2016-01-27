import * as types from '../constants/ActionTypes';

import fetch from 'isomorphic-fetch';

export function setRaw(raw, ctry, src) {
  return {
    type: types.SET_RAW,
    raw,
    ctry,
    src,
  };
}

export function getRaw(ctry, src) {
  let source;
  switch (src) {
    case 'GN':
      source = 'GN';
      break;
    case 'OSM0':
      source = 'All';
      break;
    case 'OSM1':
      source = 'Inhab';
      break;
    case 'OSM2':
      source = 'InhabFiltered';
      break;
    default:
      source = 'All';
      break;
  }

  const dataURL = './data/' + ctry + '/data' + source + ctry + '.json';

  return dispatch => {
    return fetch(dataURL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return dispatch(setRaw(json, ctry.slice(0, 2), src));
      });
  };
}

export function setFilter(obj) {
  return {
    type: types.SET_FILTER,
    obj,
  };
}

export function setRegExp(regExp) {
  return {
    type: types.SET_REGEXP,
    regExp,
  };
}

export function setFilterLink(obj, link) {
  return {
    type: types.SET_FILTER,
    obj,
    link,
  };
}

export function setObject(obj) {
  return {
    type: types.SET_OBJECT,
    obj,
  };
}
