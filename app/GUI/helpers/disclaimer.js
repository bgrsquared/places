import React from 'react';

import { Well } from 'react-bootstrap';

export const Disclaimer = () => (<div>
  <Well bsSize={'small'}>
    <h5>
      News
    </h5>
    <p>
      <strong>Experimental:</strong> You can now copy/paste URLs of your favourite examples!
      (Countries and std/adv filters are stored).
    </p>
    <p>
      Most recently added countries: <strong>Iran</strong> (experimental, due to Farsi)
      - if you have feedback on the implementation, please contact me!
    </p>
    <p>
      <small>Previously: Finland, Norway, Sweden, Hungary</small>
    </p>
    <hr/>
    <p>Please{' '}
      <a target={'_blank'} href="https://twitter.com/ilikepiecharts">
        <i className={'fa fa-twitter'}></i>me</a>{' '}
      if
      you'd like to see new countries (which?) or features (what?).</p>
    <p>Also, if you have
      feedback on the <strong>data quality per country</strong>,
      please message me! Thanks!</p>
  </Well>
  <small>Please note: Large amounts of data might be transferred!</small>
  <h5>Data/Licenses</h5>
  Data based on
  <ul>
    <li>
      <a href={'http://www.openstreetmap.org/copyright'}>OpenStreetMap</a> (under{' '}
      <a
        target={'_blank'}
        href={'http://opendatacommons.org/licenses/odbl/'}
      >Open Data Commons Open Database License (ODbL)
      </a>). We have 3 levels of depth:
      <ul>
        <li>All Places</li>
        <li>Inhabited Places</li>
        <li>Filtered Inhabited Places</li>
      </ul>
      <strong>Find the filter-queries</strong>{' '}
      <a target={'_blank'} href={'https://gist.github.com/chroth7/43ca48597a3a28ef3dbe'}>
        <strong>here</strong></a>.
    </li>
  </ul>
  Note that the original work by Moritz Stefaner is based on <strong>GeoNames</strong>.
  We chose OpenStreetMap here.
  <hr />
  <h5>Inspiration & Thanks</h5>
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
  <p>Also, many thanks for the support and continuous feedback to{' '}
    <a target={'_blank'} href="https://twitter.com/opendatazurich">OpenDataZurich</a>!</p>

  <hr />
  <h5>Note</h5>
  <p>This is optimized for laptops/desktops,
    i.e. sufficiently large displays and a "pointer"
    device of sorts (fingers do not count here).</p>
  <p>Still, it runs on phones and tablets, but buttons may be small...</p>
  <p><strong>Internet Explorer is not supported!</strong></p>
  <hr />
  <h5>Source etc.</h5>
  <p>Find the source for this
    project <a target={'_blank'} href={'https://github.com/bgrsquared/placeNames'}>here</a>.
    Feedback (as always) much appreciated! (as are <strong>PRs</strong>, Forks, ...!)</p>
  <p>Also, please contact me if you'd like new countries, or have better data, ...</p>
  <p><a
    target={'_blank'}
    href={'https://twitter.com/ilikepiecharts'}
  ><strong>Follow me</strong></a>{' '}
    for updates (performance, features, etc.)!</p>
  <p>&copy; 2016 <a
    href={'http://www.bgrsquared.com'}
    target={'_blank'}
  >bgrsquared consulting AG</a></p>
</div>);
