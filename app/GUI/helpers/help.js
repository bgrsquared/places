import React from 'react';

export const Help = () => {
  return (<div>
    <h3 style={{ marginTop: '0px' }}>Idea</h3>
    <div>This application allows you to analyze the relative density of patterns in place names
      per country.</div>
    <h3>How does it work?</h3>
    <div>Generally speaking, you have two modes:
      <ul>
        <li>Standard Mode</li>
        <li>Advanced Mode</li>
      </ul>
      Based on the mode you can add/restrict the pattern of the names to be highlighted.
    </div>
    <h4>Standard Mode</h4>
    <div>In this mode, you can add patterns (letters or strings) that are
      <ul>
        <li>... at the beginning of the name</li>
        <li>... at the end of the name</li>
        <li>... contained in the name</li>
      </ul>
    </div>
    <h5>Example for Standard Mode</h5>
    <div>We want to see the density of all places in the US starting with "New "
      (note that we added a whitespace). So we add "New " (without the quotes) in the
      "Starts with ..." section and hit enter. We get:
      <br/>
      <img src={'./assets/ScreenNew.png'} alt={'newPattern'} width={'200'}/>
      <br/>
      and the respective map:
      <br/>
      <img src={'./assets/ScreenNewUS.jpg'} alt={'newPatternUS'} width={'200'}/>
      <br/>
      To remove, simply click the pattern button and it will disappear.
    </div>

    <h4>Advanced Mode</h4>
    <div>In the advanced mode, you can enter your own regular expressions.
      Please see the respective examples in this section to get started.
      <br/>
      <strong>Wait, what is a regular expression?</strong>
      <br/>
      We won't go into detail here, but check out these resources to get started:
      <ul>
        <li><a target={'_blank'} href={'https://en.wikipedia.org/wiki/Regular_expression'}>
          Wikipedia</a></li>
        <li><a target={'_blank'}
               href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp'}
        >
          MDN</a></li>
        <li><a target={'_blank'} href={'http://regexr.com'}>http://regexr.com</a>
          - try the pattern!
        </li>
      </ul>
    </div>

  </div>);
};
