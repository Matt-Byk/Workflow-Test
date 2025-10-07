
unused = 5;

function add(a, b) 
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

// Functions available to other classes (tests)
module.exports = { add, subtract, multiply, divide };