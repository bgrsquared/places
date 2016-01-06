import React from 'react';

export const Disclaimer = () => {
  return (<div>
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
    Data based on <a target={'_blank'} href={'http://www.geonames.org/export/'}>geonames</a>.
    <hr/>
    <h5>Note</h5>
    <p>This is optimized for laptops/desktops,
    i.e. sufficiently large displays and a "pointer"
    device of sorts (fingers do not count here).</p>
    <p>Still, it runs on phones and tablets, but buttons may be small...</p>
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
