import AppTest from '../src/index';
import calculator from '../src/calculator';

test('String should be capitalized', () => {
  expect(AppTest.capitalize('testing')).toEqual('Testing');
});

test('String should be reversed', () => {
  expect(AppTest.reverseString('denis')).toEqual('sined');
});

test ('It should add two numbers', () => {
  expect(calculator.add(2, 3)).toEqual(5);
});

test ('It should substract two numbers', () => {
  expect(calculator.substract(3, 2)).toEqual(1);
});

test ('It should divide two numbers', () => {
  expect(calculator.divide(4, 2)).toEqual(2);
});

test ('It should multiply two numbers', () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});

test('It should encrypt the text', () => {
  expect(AppTest.caesarCypher('HeLlo', 2)).toEqual('JgNnq');
})