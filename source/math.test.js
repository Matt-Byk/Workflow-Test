
// Get functions from math.js
const {add, subtract, multiply, divide} = require('./math.js');

test('Addition function test', () => {
    expect(add(2, 1)).toBe(3);
});

test('Subtraction function test', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('Multiplication function test', () => {
    expect(multiply(4, 2)).toBe(8);
});

test('Division function test', () => {
    expect(divide(4, 2)).toBe(2);
});