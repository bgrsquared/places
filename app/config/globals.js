// HERE, you can set up the countries.
// For now, you have to set some parameters for each country, see below.

import d3geo from 'd3-geo';

export const projectionParams = new Map([
  ['CH', {
    projection: d3geo.geo.mercator(),
    center: [5.75, 48],
    translate: [0, 0],
    scale: 4500,
  }],
  ['BE', {
    projection: d3geo.geo.mercator(),
    center: [2, 51.65],
    translate: [0, 0],
    scale: 4500,
  }],
  ['NL', {
    projection: d3geo.geo.mercator(),
    center: [3.5, 53.75],
    translate: [0, 0],
    scale: 4000,
  }],
  ['SE', {
    projection: d3geo.geo.mercator(),
    center: [7, 69],
    translate: [0, 0],
    scale: 700,
  }],
  ['NO', {
    projection: d3geo.geo.mercator(),
    center: [4, 72],
    translate: [0, 0],
    scale: 550,
  }],
  ['FI', {
    projection: d3geo.geo.mercator(),
    center: [17, 70.5],
    translate: [0, 0],
    scale: 850,
  }],
  ['DK', {
    projection: d3geo.geo.mercator(),
    center: [8, 58],
    translate: [0, 0],
    scale: 3500,
  }],
  ['DE', {
    projection: d3geo.geo.mercator(),
    center: [11, 52.5],
    translate: [160, 120],
    scale: 1500,
  }],
  ['AT', {
    projection: d3geo.geo.mercator(),
    center: [9.25, 49.5],
    translate: [0, 0],
    scale: 2750,
  }],
  ['TR', {
    projection: d3geo.geo.mercator(),
    center: [24.5, 43.5],
    translate: [0, 0],
    scale: 1100,
  }],
  ['GB', {
    projection: d3geo.geo.mercator(),
    center: [-9.5, 61],
    translate: [0, 0],
    scale: 1100,
  }],
  ['FR', {
    projection: d3geo.geo.mercator(),
    center: [-8, 51.35],
    translate: [0, 0],
    scale: 1100,
  }],
  ['IT', {
    projection: d3geo.geo.mercator(),
    center: [6.5, 47.5],
    translate: [0, 0],
    scale: 1400,
  }],
  ['RS', {
    projection: d3geo.geo.mercator(),
    center: [18, 46.5],
    translate: [0, 0],
    scale: 3350,
  }],
  ['PL', {
    projection: d3geo.geo.mercator(),
    center: [12, 55],
    translate: [0, 0],
    scale: 1600,
  }],
  ['BG', {
    projection: d3geo.geo.mercator(),
    center: [22, 44.5],
    translate: [0, 0],
    scale: 3400,
  }],
  ['MK', {
    projection: d3geo.geo.mercator(),
    center: [20.25, 42.5],
    translate: [0, 0],
    scale: 7500,
  }],
  ['ES', {
    projection: d3geo.geo.mercator(),
    center: [-12, 44.5],
    translate: [0, 0],
    scale: 1250,
  }],
  ['PT', {
    projection: d3geo.geo.mercator(),
    center: [-10, 42.5],
    translate: [0, 0],
    scale: 2950,
  }],
  ['RU', {
    projection: d3geo.geo.conicConformal().rotate([-90, 0]),
    center: [-120, 70],
    translate: [0, 0],
    scale: 275,
  }],
  ['IN', {
    projection: d3geo.geo.mercator(),
    center: [60, 37],
    translate: [0, 0],
    scale: 500,
  }],
  ['US', {
    projection: d3geo.geo.mercator(),
    center: [-125, 55],
    translate: [0, 0],
    scale: 380,
  }],
  ['CA', {
    projection: d3geo.geo.conicConformal().rotate([98, 0]),
    center: [-100, 75],
    translate: [0, 0],
    scale: 350,
  }],
  ['BR', {
    projection: d3geo.geo.mercator(),
    center: [-80, 7.5],
    translate: [0, 0],
    scale: 375,
  }],
  ['AR', {
    projection: d3geo.geo.mercator(),
    center: [-83, -20],
    translate: [0, 0],
    scale: 450,
  }],
  ['JP', {
    projection: d3geo.geo.mercator(),
    center: [127.5, 46],
    translate: [0, 0],
    scale: 800,
  }],
  ['AU', {
    projection: d3geo.geo.mercator(),
    center: [105.5, -7.5],
    translate: [0, 0],
    scale: 400,
  }],
  ['CN', {
    projection: d3geo.geo.mercator(),
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
  ['RS', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['CH', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['BE', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['NL', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['DK', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['PL', {
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
  ['SE', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['NO', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['FI', {
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
  ['TR', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['BG', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['MK', {
    size: [400, 300],
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
  ['AR', {
    size: [300, 400],
    radius: 2.5,
  }],
  ['CN', {
    size: [400, 300],
    radius: 2.5,
  }],
  ['AU', {
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
  ['BE', 5],
  ['SE', 5],
  ['NO', 5],
  ['FI', 5],
  ['AT', 5],
  ['AR', 5],
  ['NL', 5],
  ['DK', 5],
  ['PT', 5],
  ['PL', 5],
  ['RS', 5],
  ['TR', 5],
  ['BG', 5],
  ['MK', 5],
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
  ['AU', 10],
]);

export const aspectRatio = new Map([
  ['DE', 'portrait'],
  ['DK', 'portrait'],
  ['IT', 'portrait'],
  ['GB', 'portrait'],
  ['PT', 'portrait'],
  ['JP', 'portrait'],
  ['AR', 'portrait'],
  ['RS', 'portrait'],
  ['NL', 'portrait'],
  ['SE', 'portrait'],
  ['FI', 'portrait'],
  ['NO', 'portrait'],
  ['US', 'landscape'],
  ['PL', 'landscape'],
  ['BG', 'landscape'],
  ['TR', 'landscape'],
  ['FR', 'landscape'],
  ['RU', 'landscape'],
  ['ES', 'landscape'],
  ['MK', 'landscape'],
  ['BE', 'landscape'],
  ['IN', 'landscape'],
  ['CH', 'landscape'],
  ['AT', 'landscape'],
  ['CA', 'landscape'],
  ['BR', 'landscape'],
  ['CN', 'landscape'],
  ['AU', 'landscape'],
]);

// ORDER MATTERS HERE! (GUI will display in this order)
export const countryNamesMap = new Map([
  ['AR', 'Argentina'],
  ['AT', 'Austria'],
  ['AU', 'Australia'],
  ['BE', 'Belgium'],
  ['BR', 'Brazil'],
  ['BG', 'Bulgaria'],
  ['CA', 'Canada'],
  ['CN', 'China'],
  ['DK', 'Denmark'],
  ['FI', 'Finland'],
  ['FR', 'France'],
  ['DE', 'Germany'],
  ['GB', 'Great Britain'],
  ['IN', 'India'],
  ['IT', 'Italy'],
  ['JP', 'Japan'],
  ['MK', 'Macedonia'],
  ['NL', 'Netherlands'],
  ['NO', 'Norway'],
  ['PL', 'Poland'],
  ['PT', 'Portugal'],
  ['RU', 'Russia'],
  ['RS', 'Serbia'],
  ['ES', 'Spain'],
  ['SE', 'Sweden'],
  ['CH', 'Switzerland'],
  ['TR', 'Turkey'],
  ['US', 'United States'],
]);


export const multiplierTextMap = new Map([
  [1 / 2, 'S'],
  [1, 'M'],
  [2, 'L'],
  [4, 'XL'],
]);

export const layoutTextMap = new Map([
  ['auto', 'Automatic'],
  ['3,9', 'Small Graph'],
  ['6,6', '50/50'],
  ['9,3', 'Large Graph'],
  ['12,12', 'Full Width Graph'],
]);
