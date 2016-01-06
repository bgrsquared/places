import * as types from '../constants/ActionTypes';

import fetch from 'isomorphic-fetch';

const rawDataDE = './data/placenames_de.json';
const rawDataCH = './data/placenames_ch.json';

export function setRaw(raw, ctry) {
  return {
    type: types.SET_RAW,
    raw,
    ctry,
  };
}

export function getRaw(ctry) {
  let dataURL;
  if (ctry === 'DE') {
    dataURL = rawDataDE;
  } else {
    dataURL = rawDataCH;
  }
  return dispatch => {
    return fetch(dataURL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return dispatch(setRaw(json, ctry));
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
