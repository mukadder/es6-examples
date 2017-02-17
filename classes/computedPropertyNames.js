var expertise = 'journalism';
var person = {
    name: 'Sharon',
    age: 27
};
person[expertise] = {
    years: 5,
    interests: ['international', 'politics', 'internet']
};
console.log(person)
//Property Value Shorthands
var listeners = [];
function listen () {}
var api = { listeners, listen };