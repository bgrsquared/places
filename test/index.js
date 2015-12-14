import test from 'tape';
import doge from '../app/GUI/someFunction';


test('The Click should increase Doge counter by 1', expect=>{
  const wow = doge();/***the imported module should be a factory function*/

  wow.click(); /***The produced object should have a method click()*/
  expect.equal(wow.count, 1, 'Wow I can count to 1'); /***object should have a property count.*/
  expect.end();
});

test('3 clicks should increase the counter to 3', expect=>{
  const wow = doge();
  wow.click();
  wow.click();
  wow.click();

  expect.equals(wow.count, 3, '1,2,3 wow');
  expect.end();
});

test('click(2), click(3), click(5) should increase the count to 10', expect =>{
  const wow = doge();
  wow.click(2);
  wow.click(3);
  wow.click(5);
  expect.equal(wow.count, 10, 'Much click, so number, wow');
  expect.end();
});