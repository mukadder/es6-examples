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

var store = {};
var api = { getItem,  setItem, clear };
function getItem (key) {
    return key in store ? store[key] : null;
}
function setItem (key, value) {
    store[key] = value;
}
function clear () {
    store = {};
}
var expertise = 'journalism';
var person = {
    name: 'Sharon',
    age: 27,
    [expertise]: {
        years: 5,
        interests: ['international', 'politics', 'internet']
    }
};
var expertise = 'journalism';
var journalism = {
    years: 5,
    interests: ['international', 'politics', 'internet']
};
//You can’t combine the property value shorthands with computed property names
var person = {
    name: 'Sharon',
    age: 27,
   // [expertise]
};var grocery = {
    id: 'bananas',
    name: 'Bananas',
    units: 6,
    price: 10,
    currency: 'USD'
};
//A common scenario for computed property names is when we want to add an entity to an object map that uses the entity.id field as its keys, as shown next. Instead of having to have a third statement where we add the grocery to the groceries map, we can inline that declaration in the groceries object literal itself.
var groceries = {
    [grocery.id]: grocery
};
console.log(groceries)
/*
 Another case may be whenever a function receives a parameter that it should then use to build out an object. In ES5 code, you’d need to allocate a variable declaring an object literal, then add the dynamic property, and then return the object. The following example shows exactly that, when creating an envelope that could later be used for AJAX messages which follow a convention: they have an error property with a description when something goes wrong, and a success property when things turn out okay.
 */
function getEnvelope (type, description) {
    var envelope = {
        data: {}
    };
    envelope[type] = description;
    return envelope;
}
//console.log(getEnvelope(pad,phusi))
function getEnvelope (type, description) {
    return {
        data: {},
        [type]: description
    };
}
//Method Definitions
var emitter = {
    emit: function (eventName) {
    }
};
//es6  no colon no j=fucnction
var reserves = 4;
var spaceship = {
    get fuel () {
        return reserves;
    },
    set fuel (value) {
        reserves = value;
    }
};
var timer = {
    seconds: 0,
    start () {
        setInterval(() => {
            this.seconds++;
        }, 501);
    }
};
timer.start();
setTimeout(function () {
    console.log(timer.seconds)
}, 4000);
// <- 3
/*
 When you need to implicitly return an object literal, you’ll need to wrap that object literal expression in parenthesis. Otherwise, the compiler would interpret your brackets as the start and the end of the function block.


 */


    [1, 2, 3, 4]
    .map(value => value * 2)
    .filter(value => value > 2)
    .forEach(value => console.log(value))

var character = {
    name: 'Bruno',
    pseudonim: 'Batman',
    metadata: {
        age: 34,
        gender: 'male'
    },
    batarang: ['gas pellet', 'bat-mobile control', 'bat-cuffs']
};

var pseudonim = character.pseudonim;
var { pseudonim } = character;
var { pseudonim: alias } = character;
console.log(alias);
// <- 'Batman'
var palette = {
    color: {
        name: 'Red',
        code: '#f00'
    }
};
var { color: { code: colorCode } } = palette;
console.log(character.boots);
// <- undefined
console.log(character['boots']);
// <- undefined

var coordinates = [12, -7];
var [x, y] = coordinates;
console.log(x);

var names = ['James', 'L.', 'Howlett'];
var [ firstName,, lastName ] = names;
console.log(lastName);
// <- 'Howlett'
//en  es5
var left = 5;
var right = 7;
var aux = left;
left = right;
right = aux;

var left = 5;
var right = 7;
[left, right] = [right, left];

function carFactory (options = { brand: 'Volkswagen', year: 1999 }) {
    console.log(options.brand);
    console.log(options.year);
}
carFactory();
// <- 'Volkswagen'
// <- 1999
function carFactory ({ brand = 'Volkswagen', year = 1999 }) {
    console.log(brand);
    console.log(year);
}
carFactory({ year: 2000 });
// <- 'Volkswagen'
// <- 2000

function carFactory ({ brand = 'Volkswagen', year = 1999 } = {}) {
    console.log(brand);
    console.log(year);
}
carFactory();
// <- 'Volkswagen'
// <- 1999

function getCoordinates () {
    return { x: 10, y: 22, z: -1, type: '3d' };
}
var { x, y } = getCoordinates();

function random ({ min = 1, max = 10 } = {}) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random());
// <- 7
console.log(random({ max: 24 }));
// <- 18