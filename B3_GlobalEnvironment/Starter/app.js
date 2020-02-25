// function b () {
//     console.log('Called b!');
// };

// b();

// console.log(a);
// var a = 'Hello World';
// console.log(a);


// a = undefined; //never DO THIS

// if (a === undefined) {
//     console.log('a is undefined');
// } else {
//     console.log('a is defined');
// }

//====================================================


// console.log(a);

//general rule of thumb is to have your functions above before running




//everytime a function is called, a new execution context is created on top of that stack

/**
 * Big Words and Javascript
 */

/* Everytime the lectures go, the instructor will pause and mention a "Big word alert". Explaining the word. Show how the word is used. It is just vocabulary
*/



/**
 * Conceptual Aside
 */

/* 
Syntax parsers - a program that reads your code and detemines what it does and if its grammar is valid. - Your code isn't magic, Someone else wrote a program to translate it for the computer.

Lexical enviroment - where something sits physically in the code you write. "Lexical" means having to do with words or grammar. A lexical enviroment exists in programming languages in which where you write something is important.

Execution context - a wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

Name/Value Pair: A name which maps to a unique value. The name may be defined more than once, but only can have one value in any given context. That value may be more name/value pairs.

Address = '100 Main St.' Address is the name, value is the street.

Objection: a collection of name value pairs. Most simple definition when talking about javascript.


Global - NOT inside a function

Javascript and undefined

Initially Hoisting has variable setup to undefined, and function setup

Execution context -
phase 1 - creation phase
phase 2 - execution phase

Single Threaded - synchronous execution
one command at a time, under the hood of the browser, maybe not. One at a time in order

Function invocation and the execution stack
Invocation - running or calling a function. In javascript, we invoke by using parenthesis();
*/

//invoking functions

// function b() {

// };

// function a() {
//     b();
// }

// a();

//Functions, context, and variable environments variable environment - where the variables live and how they relate to each other in memory, JUST think about where is the variable

// function b() {
//     var myVar;
//     console.log(myVar);
// }

// function a() {
//     var myVar = 2;
//     console.log(myVar);
//     b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

// //The scope chain


// function a() {

//     function b() {
//         console.log(myVar);
//     }
//     var myVar = 2;
//     // b();
// }


// var myVar = 1;
// // a();

//scope - where a variable is available in your code, and if it's truly the same variable, or a new copy

//let in es6 allows to users to use block scoping

// if (a > b) {
//     let c = true;
// }

//Asynchronous callbacks - more than one at a time
//what happens in javascript engine is synchronous, when you do a clikc function, that is asynchronous and the javascript file is still running simultaneosly

//in javascript you havae your execution context, then you have your event queue - when you click something to do something. or http request
//event queue is ran after the execution stack is EMPTY!

//asynchronous - multiple actions per time
//long running function
// function waitThreeSeconds() {
//     var ms = 1000 + new Date().getTime();
//     while(new Date() < ms){}
//     console.log('finished function');
// }

// function clickHandler() {
//     console.log('click event!');
// }

// //listen for the click event
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');

//in the example above, all the execution context functions run first, then the click in the queue stack gets ran after all the functions in execution contents run

//types and javascript - dynamic typing- you don't tell the engine what type of data a variable holds, it figures it out while your code is running. cariables can hold different types of values because it's all figured out during execution

//static typing 
// bool isNew = 'hello'; // an error

// //dynamic typing
// var isNew = true;// no error
// isNew = 'yup!';
// isNew = 1;

//primitive types - a type of data that represents a single value, that is, not an object

//undefined represents lack of existence(you shouldn't set a variable to this)

//null represents lack of existence(you can set a variable to this)

//boolean - true or false

//number - floating point number(there's always some decimals). unlike other programming lanaguages, there's only one 'number' type... and it can make math weird.

//string - a sequence of characters(both '' and "" can be used)

//symbol - used in es6(next version in javascript) not much talked here about this.

//operators - a special function  that is syntactically (written) differently, generally, operators take two parameters and return one result

// var a = 3 + 4;
// console.log(a);

// function +(a, b) {

//     return // add the two #s
// }

// var a = 4 - 3;
// console.log(a);

// var a = 4 > 3;
// console.log(a);

// //operator precendence and associativity - which operator function gets called first
// //functions are called in order of precedence(HIGHER precedence wins)
// //associativity - what order operator functions get called in : left-to-right or right-to-left
// //when functions have the same precedence

// var a = 3 + 4 * 5;
// console.log(a);

// var a = 2, b = 3, c = 4;
// a = b = c; // a = b = c = 4 // a = b = 4 // a = 4;
// console.log(a);
// console.log(b);
// console.log(c);
// //They all equal 4 because the associativity is right-to-left. It starts at the right then goes left

// //( ... ) always get highest precedence first with a level of 19, the highest number on the chart
// var a = (3 + 4) * 5;
// console.log(a);
// console.log(typeof a)

// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// //conceptual aside: coercion
// //coercion : converting a value from one type to another. This happens quite often in javascript because it is dynamically typed

// var a = parseInt(1 + "2");
// console.log(typeof parseInt(1 + '2'))
// console.log(a)
// console.log(typeof a)

// //comparison operators
// console.log(1 < 2 < 3);

// console.log(3 < 2 < 1); // this returns true because 
// //3<2 = false < 1 = 0 < 1 === true
// console.log(false < 1);
// console.log(15 < 20 > 17)// because 15 < 20 is true > 17 = 1 > 17 which is false

// //never use double equals ==, use === 99 percent of time
// var a = 0;
// var b = false;

// if(a !== b) {
//     console.log('They are not equal!');
// } else {
//     console.log('Equal.');
// }

//coercion link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// //existence and booleans
// var a;

// a = "hi";

// // goes to internet and looks for a value

// if (a || a === 0) {
//     console.log('Something is there');
// } else {
//     console.log('Something is not there')
// }

// if (a === 0 || a) {
//     console.log('Something is there');
// } else {
//     console.log('Something is not there')
// }

// //default values
// function greet(name) {
//     name = name || '<Your name here>'; 
//     console.log('Hello ' + name);
// }
// greet('tony');
// greet();

//Framework aside

// console.log(libraryName);

/**
 *  -----------------OBJECTS AND FUNCTIONS
 */

//OBJECTS AND THE DOT
/*
Objects can have
1. primitive "property"
2. Object "property"
3. Function "method"
*/

// var person = new Object();

// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// var firstNameProperty = "firstname";
// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "111 Main St.";
// person.address.city = "New York";
// person.address.state = "NY";
// console.log(person);

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["street"]);

// //OBJECTS AND OBJECT LITERALS
// var Tony = {  
//     firstName: 'Tony',
//     lastName: 'Alicea',
//     address: {
//         street: '111 Main St.',
//         city: "New York",
//         state: 'NY'
//     }
// };

// function greet(person) {
//     console.log('Hi ' + person.firstName);
// }

// greet(Tony);
// greet({
//     firstName: 'Mary',
//     lastName: 'Doe'
// });

// Tony.address2 = {
//     street: '333 Second St.'
// }

// //FRAMEWORK ASIDE - FAKING NAMESPACES
// //Namespace - a container for variables and functions. Typically to keep variables and functions with the same name separate

// var greet = "Hello!";
// var greet = "Hola!";

// console.log(greet);

// var english = {
//     greetings: {
//         basic: 'Hello'
//     }
// };

// var spanish = {};

// spanish.greet = "Hola!"

// console.log(english);

// //JSON and Object Literals

// //JavaScript Object Notation - JSON

// var objectLiteral = {
//     firstName: 'Mary',
//     isAProgrammer: true
// }

// console.log(JSON.stringify(objectLiteral)); // convert to string

// var jsonValue = JSON.parse(`{
//     "firstname": "mary",
//     "isAProgrammer": true
// }`);

// console.log(jsonValue); // convert string to object


//FUNCTIONS ARE OBJECTS, functions are FIRST CLASS
//First class functions - everything you can do with other types[objects, strings, numbers, etc] you can do with functions. Assign them to variables, pass them around, create them on the fly.

//function is a special type of object, you can attach primitive, object, functions, name=optional, can be anonymous, code, invocable code

// function greet() {
//     console.log('hi'); //code "invocable" ()
// }

// greet.language = 'english'; // added a property into a function
// console.log(greet.language) //anonymous name greet

//FUNCTION STATEMENTS AND FUNCTION EXPRESSIONS
//EXPRESSION - a unit of code that results in a value. It doesn't have to save to a variable.


greet();
// this is a function statement it doesnt return a value until executed
function greet () {
    console.log('hi');
}

//this is a function expression - hint the equal sign
var anonymousGreet = function () {
    console.log('hi');
}
//this function doesnt have a name but is assigned to anonymousGreet, which is an anonymous function, the expression is the '=' sign

greet(); // this line works also on line 391, cause the function statement greet is stored in memory
anonymousGreet(); // if you move this line above line 398, the function wont run

log(3);
function log(a){
    console.log(a);
}
log(3);
log("HELLO")
log({
    greeting:'hi'
});

log(function() {
    console.log('hi');
}); //first class functions. functions are objects

//conceptual aside - by value vs by reference
//primitive type value - number boolean string var a = 'hello' | b = a. b the new variable points to a new location in memory and is a copy of the primitive value is placed in that spot of memory. a seperate location

//if you have a and b in an object, b points to a in the same object, no new object is created. by reference. all objects interact by reference

//by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a); // a = 2
console.log(b); // b = 3 because b is a copy of a = 3;

//big word alert - MUTATE : To change something. "Immutable" means it cant be changed.

// by reference (all objects (including functions))
var c = { greeting: 'hi'};
var d;

d = c; // d points to the same spot as c in memory
c.greeting = 'hello'; // mutate
console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c);
console.log(d);

//all primitive types are by value(copy), all objects are by reference(no copy)

//OBJECTS, FUNCTIONS, AND 'THIS'

//when function is invoked, execution context is created(creation phase)

function z() {
    console.log(this);
    this.newVariable = 'Hello';
};


var z1 = function() {
    console.log(this);
};

z();

console.log(newVariable);
z1();

var c = {
    name: 'The c object',
    log: function () {
        var self = this;
        self.name = "Updated c object";
        console.log(self);

        var setName = function (newName) {
            self.name = newName;
        }

        setName('Updated again! The C object');
        console.log(self);
    }
}

c.log();

//CONCEPTUAL ASIDE: ARRAYS - COLLECTIONS OF ANYTHING
var arr = new Array({});
var arr = [
    1,
    false,
    {
        name: 'tony',
        address: '111 main st.'
    },
    function(name) {
        var greeting = 'hello ';
        console.log(greeting + name)
    },
    'hello'
];

console.log(arr);
arr[3](arr[2].name);

//'ARGUMENTS' AND SPREAD