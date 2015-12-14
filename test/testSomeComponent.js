import test from 'tape';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Comp from '../app/GUI/someComponent';

test('Testing to Component', expect => {
  const shallowRenderer = ReactTestUtils.createRenderer();

  const renderComp = (userName) => {
    shallowRenderer.render(<Comp userName={userName}/>);
    const list = shallowRenderer.getRenderOutput();
    // console.log(list);
    // list.props.children.map(c => {console.log(c)})
    return list
  };
  const defaultComp = renderComp();
  const userName = defaultComp.props.children.filter(component => {
    return component.props && component.props.id === "userName"});

  expect.equals(userName.length, 1, 'DEFAULT: Find the userName');
  expect.equals(userName[0].props.children, 'World', 'DEFAULT: Check default name');

  // Test Custom Name
  const customComp = renderComp('Hans');
  const customUserName = customComp.props.children.filter(component => {
    return component.props && component.props.id === "userName"});

  expect.equals(customUserName.length, 1, 'CUSTOM: Find the userName');
  expect.equals(customUserName[0].props.children, 'Hans', 'CUSTOM: Check default name');

  expect.end();
});