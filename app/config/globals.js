// HERE, you can set up the countries.
// For now, you have to set some parameters for each country, see below.

export const projectionParams = new Map([
  ['CH', {
    center: [5.75, 48],
    translate: [0, 0],
    scale: 4500,
  }],
  ['DE', {
    center: [11, 52.5],
    translate: [160, 120],
    scale: 1500,
  }],
  ['AT', {
    center: [9.25, 49.5],
    translate: [0, 0],
    scale: 2750,
  }],
  ['GB', {
    center: [-9.5, 61],
    translate: [0, 0],
    scale: 1100,
  }],
  ['FR', {
    center: [-8, 51.5],
    translate: [0, 0],
    scale: 1100,
  }],
  ['IT', {
    center: [6.5, 47.5],
    translate: [0, 0],
    scale: 1400,
  }],
  ['ES', {
    center: [-12, 44.5],
    translate: [0, 0],
    scale: 1250,
  }],
  ['PT', {
    center: [-10, 42.5],
    translate: [0, 0],
    scale: 2950,
  }],
  ['RU', {
    center: [5, 82.5],
    translate: [0, 0],
    scale: 125,
  }],
  ['IN', {
    center: [60, 37],
    translate: [0, 0],
    scale: 500,
  }],
  ['US', {
    center: [-125, 55],
    translate: [0, 0],
    scale: 380,
  }],
  ['CA', {
    center: [-175, 85],
    translate: [0, 0],
    scale: 125,
  }],
  ['BR', {
    center: [-80, 7.5],
    translate: [0, 0],
    scale: 375,
  }],
  ['JP', {
    center: [127.5, 46],
    translate: [0, 0],
    scale: 800,
  }],
  ['CN', {
    center: [70, 55],
    translate: [0, 0],
    scale: 325,
  }],
]);

export const hexbinParams = new Map([
  ['DE', {
    size: [300, 400],
    radius: 3,
  }],
  ['CH', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['AT', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['GB', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['FR', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['ES', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['PT', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['RU', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['IT', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['JP', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['IN', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['US', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['CA', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['BR', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['CN', {
    size: [400, 300],
    radius: 2.5,
  }],
  [false, {
    size: [400, 300],
    radius: 2.5,
  }],
]);

export const relevantNumber = new Map([
  ['DE', 20],
  ['CH', 5],
  ['AT', 5],
  ['PT', 5],
  ['FR', 20],
  ['ES', 20],
  ['GB', 20],
  ['IT', 20],
  ['JP', 20],
  ['IN', 20],
  ['US', 20],
  ['RU', 50],
  ['CA', 5],
  ['BR', 20],
  ['CN', 20],
]);

export const aspectRatio = new Map([
  ['DE', 'portrait'],
  ['IT', 'portrait'],
  ['GB', 'portrait'],
  ['PT', 'portrait'],
  ['JP', 'portrait'],
  ['US', 'landscape'],
  ['FR', 'landscape'],
  ['RU', 'landscape'],
  ['ES', 'landscape'],
  ['IN', 'landscape'],
  ['CH', 'landscape'],
  ['AT', 'landscape'],
  ['CA', 'landscape'],
  ['BR', 'landscape'],
  ['CN', 'landscape'],
]);

// ORDER MATTERS HERE! (GUI will display in this order)
export const countryNamesMap = new Map([
  ['AT', 'Austria'],
  ['BR', 'Brasil'],
  ['CA', 'Canada'],
  ['CN', 'China'],
  ['FR', 'France'],
  ['DE', 'Germany'],
  ['GB', 'Great Britain'],
  ['IN', 'India'],
  ['IT', 'Italy'],
  ['JP', 'Japan'],
  ['PT', 'Portugal'],
  ['RU', 'Russia'],
  ['ES', 'Spain'],
  ['CH', 'Switzerland'],
  ['US', 'United States'],
]);


export const multiplierTextMap = new Map([
  [1 / 2, 'S'],
  [1, 'M'],
  [2, 'L'],
  [5, 'XL'],
]);
