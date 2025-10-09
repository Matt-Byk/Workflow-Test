
function copy(array)
{
    return [...array];
}

function add(array, val)
{
    return array.map(item => item + val);
}

// Functions available to other classes (tests)
module.exports = { copy, add };

unused = 5;
