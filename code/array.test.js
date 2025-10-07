
// Get functions from array.js
const {copy, add} = require('./array.js');

test('Copy function test', () => {
    const my_array = [1, 2, 3];
    expect(copy(my_array)).toEqual(my_array);  // Same values
    expect(copy(my_array)).not.toBe(my_array); // Diff object
});

test('Add function test', () => {
    const my_array  = [1, 2, 3];
    const new_array = [3, 4, 5];
    expect(add(my_array, 2)).toEqual(new_array);
});
