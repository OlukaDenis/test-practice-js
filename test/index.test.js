import AppTest from '../src/index';

test('String should be capitalized', () => {
  expect(AppTest.capitalize('testing')).toEqual('Testing');
});

test('String should be reversed', () => {
  expect(AppTest.reverseString('denis')).toEqual('sined');
});