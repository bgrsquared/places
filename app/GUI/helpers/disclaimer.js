import React from 'react';

export const Disclaimer = () => {
  return (<div>
    <h5>Data/Licenses</h5>
    Based on
    <ul>
      <li>
        <a href={'http://www.openstreetmap.org/copyright'}>Open Street Map</a> (under{' '}
        <a
          target={'_blank'}
          href={'http://opendatacommons.org/licenses/odbl/'}
        >Open Data Commons Open Database License (ODbL)
        </a>)
        <ul>
          <li>All Places</li>
          <li>"Inhabited Places"</li>
          <li>"Filtered Inhabited Places"</li>
        </ul>
        <strong>Find the filter-queries here:</strong>{' '}
        <a target={'_blank'} href={'https://gist.github.com/chroth7/43ca48597a3a28ef3dbe'}>Find filters here</a>
      </li>
    </ul>
    Note that the original work by Moritz Stefaner is based on <strong>GeoNames</strong>.
    We chose OpenStreetMap here.
    <hr/>
    <h5>Thanks</h5>
    <p>Idea, visualization, examples are based on{' '}
      <a
        target={'_blank'}
        href={'https://twitter.com/moritz_stefaner'}
      >Moritz Stefaner's</a>{' '}
      work, see{' '}
      <a
        target={'_blank'}
        href={'http://truth-and-beauty.net/experiments/ach-ingen-zell/'}
      >here</a>.</p>
    <p><strong>Big thanks</strong> and <strong>huge credit</strong> to his work
      (<a
        target={'_blank'}
        href={'https://github.com/MoritzStefaner/ach-ingen-zell'}
      >source here</a>)!</p>

    <hr/>
    <h5>Note</h5>
    <p>This is optimized for laptops/desktops,
      i.e. sufficiently large displays and a "pointer"
      device of sorts (fingers do not count here).</p>
    <p>Still, it runs on phones and tablets, but buttons may be small...</p>
    <hr/>
    <h5>Source</h5>
    <p>Find the source for this
      project <a target={'_blank'} href={'https://github.com/bgrsquared/placeNames'}>here</a>.
      Feedback (as always) much appreciated!</p>
    <p><a
      target={'_blank'}
      href={'https://twitter.com/ilikepiecharts'}
    >Follow me</a>{' '}
      for updates (performance, features, etc.)!</p>
    <p>&copy; 2016 <a
      href={'http://www.bgrsquared.com'}
      target={'_blank'}
    >bgrsquared consulting AG</a></p>
  </div>);
};
