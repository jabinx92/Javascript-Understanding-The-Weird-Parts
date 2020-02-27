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


// greet();
// // this is a function statement it doesnt return a value until executed
// function greet () {
//     console.log('hi');
// }

// //this is a function expression - hint the equal sign
// var anonymousGreet = function () {
//     console.log('hi');
// }
// //this function doesnt have a name but is assigned to anonymousGreet, which is an anonymous function, the expression is the '=' sign

// greet(); // this line works also on line 391, cause the function statement greet is stored in memory
// anonymousGreet(); // if you move this line above line 398, the function wont run

// log(3);
// function log(a){
//     console.log(a);
// }
// log(3);
// log("HELLO")
// log({
//     greeting:'hi'
// });

// log(function() {
//     console.log('hi');
// }); //first class functions. functions are objects

// //conceptual aside - by value vs by reference
// //primitive type value - number boolean string var a = 'hello' | b = a. b the new variable points to a new location in memory and is a copy of the primitive value is placed in that spot of memory. a seperate location

// //if you have a and b in an object, b points to a in the same object, no new object is created. by reference. all objects interact by reference

// //by value (primitives)
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a); // a = 2
// console.log(b); // b = 3 because b is a copy of a = 3;

// //big word alert - MUTATE : To change something. "Immutable" means it cant be changed.

// // by reference (all objects (including functions))
// var c = { greeting: 'hi'};
// var d;

// d = c; // d points to the same spot as c in memory
// c.greeting = 'hello'; // mutate
// console.log(c);
// console.log(d);

// // by reference (even as parameters)
// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; // mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // equals operator sets up new memory space (new address)
// c = { greeting: 'howdy' };
// console.log(c);
// console.log(d);

// //all primitive types are by value(copy), all objects are by reference(no copy)

// //OBJECTS, FUNCTIONS, AND 'THIS'

// //when function is invoked, execution context is created(creation phase)

// function z() {
//     console.log(this);
//     this.newVariable = 'Hello';
// };


// var z1 = function() {
//     console.log(this);
// };

// z();

// console.log(newVariable);
// z1();

// var c = {
//     name: 'The c object',
//     log: function () {
//         var self = this;
//         self.name = "Updated c object";
//         console.log(self);

//         var setName = function (newName) {
//             self.name = newName;
//         }

//         setName('Updated again! The C object');
//         console.log(self);
//     }
// }

// c.log();

// //CONCEPTUAL ASIDE: ARRAYS - COLLECTIONS OF ANYTHING
// var arr = new Array({});
// var arr = [
//     1,
//     false,
//     {
//         name: 'tony',
//         address: '111 main st.'
//     },
//     function(name) {
//         var greeting = 'hello ';
//         console.log(greeting + name)
//     },
//     'hello'
// ];

// console.log(arr);
// arr[3](arr[2].name);

//'ARGUMENTS' AND SPREAD
//ARGUMENTS: The parameters you pass to a function. Javascript gives you a keyword of the same name which contains them all

// function greet(firstName, lastName, language, ...other) {

//     language = language || 'EN';

//     if(arguments.length === 0) {
//         console.log('Missing parameters!');
//         console.log(`---------------`);
//         return;
//     }

//     console.log(firstName);
//     console.log(lastName);
//     console.log(language);
//     console.log(arguments);
//     console.log(`arg 0 : ${arguments[0]}`);
//     console.log(`---------------`);
// }
// greet();
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'ES', '111 Main St', 'new york');

//Framework Aside - function overloading 
function greet ( firstName, lastName, language) {
    language = language || 'en';

    if ( language == 'en') {
        console.log(`hello ${firstName} ${lastName}`)
    }

    if ( language == 'es') {
        console.log(`hola ${firstName} ${lastName}`)
    }

}

function greetEnglish(firstName, lastName) {
    greet(firstName, lastName, 'en');
}

function greetSpanish(firstName, lastName) {
    greet(firstName, lastName, 'es');
}


greetEnglish('john','doe');

greetSpanish('john','doe');

//conceptual aside - syntax parsers
//retu throws and error
//return; computer enteprets this and returns something
//parser goes to your code character by character, following rules, and making changes. happens all before code is executed

//DANGEROUS ASIDE - very hard to track down, easy to do
//Automatic semicolon insertion. semicolons are optional
//when you type return followed by enter, the computer automatically puts a semo colon, like this (return + enter = return;)
//always put your own semicolons

// function getPerson() {
//     return//;
//     {
//         firstName: 'Tony'
//     }
// }

// console.log(getPerson()); // results in undefined, there is a hidden semicolon on line 581

// function getPerson() {

//     return {//no hidden semicolon 
//         firstName: 'Tony'
//     }

// }

// console.log(getPerson()); //results in {firstName: 'Tony}

// //when you press enter after return, it will automatically put a hidden semicolon

// //framework aside: whitespace
// //big word alert - whitespace : invisible characters that create literal 'space' in your written code. carriage returns, tabs, spaces

// var 
//     //first name of the person
//     firstName,

//     // last name of the person
//     lastName;

//     //the language
//     //can be 'en' or 'es'

// var person = {
//     //the first name
//     firstName: 'John',
//     //the last name
//     // (always required)
//     lastName: 'Doe'
// }

// console.log(person);

// //IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFEs)

// //function statement
// function greet (name) {
//     console.log('Hello ' + name);
// }
// greet('John');

// //anonymous (a function without a name)function expression, expression is the = sign
// var greetFunc = function(name) {
//     console.log('Hello ' + name)
// }
// greetFunc('John');

// //using an immediately invoked function expression (IIFE)


// // var greeting = function(name) {
// //     return 'Hello ' + name;
// // }('John');

// // console.log(greeting);

// "I am a string!";

// {
//     name: 'John'
// };

// undefined;

// //IIFE - does not go in global execution context, anonymous function with its own execution contexts
// (function hello(name) {

//     var greeting = 'Inside IIFE: Hello';
//     console.log(greeting + ' ' + name)

// })('Johnny'); // or }('Johnny)); parenthesis are operators, you use it in expressions. both style works


// //Framework aside: IIFEs and Safe Code
// console.log(greeting);


// //IIFE
// (function(global,name) {
//     var greeting = 'Hello';
//     global.greeting = 'Hello';
//     console.log(greeting + ' ' + name);

// }(window, 'John')); //IIFE

// console.log(greeting);

//UNDERSTANDING CLOSURES -------------------------------------
function greet(whatToSay) {

    return function(name) {
        console.log(whatToSay + ' ' + name);
    }

}
// var sayHi = greet('Hi');
// sayHi('Tony');
//UNDERSTANDING CLOSURES PART 2 ------------------------------

function buildFunctions() {
    var arr = [];
    for( var i = 0; i < 3; i++) {

        arr.push(
            function () {
                console.log(i);
            }
        )
    }
    return arr;
}

// var fs = buildFunctions();
// fs[0](); // prints 3
// fs[1](); // prints 3
// fs[2](); // prints 3

//----------

function buildFunctions2() {
    var arr = [];
    for( var i = 0; i < 3; i++) {
        
        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

// var fs2 = buildFunctions2();
// fs2[0](); // prints 0
// fs2[1](); // prints 1
// fs2[2](); // prints 2


//FRAMEWORK ASIDE - FUNCTION FACTORIES
function makeGreeting(language) {//factory function

    return function(firstName, lastName){
        if(language === 'en') {
            console.log(`Hello ${firstName} ${lastName}.`)
        }
        if(language === 'es') {
            console.log(`Hola ${firstName} ${lastName}.`)            }
    }
}
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

// greetEnglish('John','Doe');
// greetSpanish('John','Doe');

// everytime you call a function it gets its own execution context and any functions created inside of it will point to that execution contexts

//closures can let you create functions inside other functions

//CLOSURES AND CALLBACKS
function sayHiLater() {
    var greeting = 'Hi!';

    setTimeout(function () {
        console.log(greeting);
    }, 3000);
}

// sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").click(function(){

// });

//BIG WORD ALERT -CALLBACK FUNCTION - A FUNCTION YOU GIVE TO ANOTHER FUNCTION TO BE RUN WHEN THE OTHER FUNCTION IS FINISHED. SO THE FUNCTION YOU CALL (I.E. INVOKE), 'CALLS BACK' BY CALLING THE FUNCTION YOU GAVE IT WHEN IT FINISHES.

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some work

    // callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    console.log('All done...');
})

//CALL(), APPLY(), BIND(); // these are 3 functions. function is a special type of object that has code(invocable with () ), name(optional and can be anonymous), call() method, apply() method, bind() method. the last three deal with the 'this' variable

var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
        
    }
}

// console.log(person.getFullName())

var logName = function(lang1, lang2) {
    // console.log(`Logged ${this.getFullName()}`);
    // console.log(`Arguments: ${lang1} ${lang2}`)
    // console.log(`------------`)
}.bind(person) //binds person object, so this can be used 

var logPersonName = logName.bind(person); //makes a new copy of logName function. bind refers to the object declared as person, that way 'this' can reference that object

// logPersonName('en'); 

// logName.call(person, 'en', 'es') // call executes with first argument referring to desired object
// logName.apply(person, ['en', 'es']); // apply is similar to call, but it needs an array of parameters


// (function(lang1, lang2) {
//     console.log(`Logged ${this.getFullName()}`);
//     console.log(`Arguments: ${lang1} ${lang2}`)
//     console.log(`------------`)
// }).apply(person, ['en' , 'es']) // This is an IIFE with apply function

// function borrowing
var person2 = {
    firstNme: 'Jane',
    lastName: 'Doe'
}

person.getFullName.apply(person2);

//function currying
function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
// console.log(multipleByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
// console.log(multiplyByThree(4));

//big word alert - function currying - creating a copy of a function but with some preset parameters. very useful in mathematical situations

//FUNCTIONAL PROGRAMMING
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1,2,3];
// console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
// console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});
// console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log(arr4);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
// console.log(arr5);

//Functional programming  part 2
//Javascript Library - underscore.js (_.forEach, _.filter, _.map, etc). We did a lot of this in Hack Reactor

var arr6 = _.map(arr1, function(item) {
    return item * 3
});
// console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7,8,9,10], function (item) {
    return item % 2 === 0;
});

// console.log(arr7);

//CONCEPTUAL ASIDE - OBJECT-ORIENTED JAVASCRIPT AND PROTOTYPAL INHERITANCE- Classical vs Prototypal Inheritance

//Inheritance - One object gets access to the properties and methods of another object

//Classical Inheritance - what is currently best known and popular. Like wow classic, tried and true objects that do its job. Verbose

//Prototypal Inheritance - flexible, easy to understand compared to classical 

//Understanding the prototype

//all objects have like a hidden prototype property, you can use it by itself

//obj.prop2 will look in the object to see if their is a key value pair, if not it will GO TO prototype. Each object can have continuosly nested prototype objects

//prototype chain - prototype objects nested in other prototype objects

//obj1 and obj2 point to the same prototype object

var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
// console.log(john.getFullName())
// console.log(john.firstName); //why doesnt it get 'Default'? That is why you never make proto attached to person. This prints John Doe

var jane = {
    firstName: 'Jane'
}
//Do not ever do this
jane.__proto__ = person;
// console.log(jane.getFullName()); //Prints 'Jane Default'

//EVERYTHING IS AN OBJECT (OR A PRIMITIVE)
var a = {};
var b = function () {};
var c = [];

//everything above has a prototype // a.__proto__.toString()
//b.__proto__.apply()
//c.__proto__.bind()
//a.__proto__.__proto__ prints null
//c.__proto__.__proto__ prints base object

//REFLECTION AND EXTEND
//BIG WORD ALERT - REFLECTION: AN OBJECT CAN LOOK AT ITSELF, LISTING AND CHANGING ITS PROPERTIES AND METHODS.

for(var prop in john) {
    if (john.hasOwnProperty(prop)){
        // console.log(prop + ': ' + john[prop])
    }
}


var jane = {
    address: '111 Main St.',
    getFormalFullname: function () {
        return this.lastName + ', ' + this.firstName;
    }
}

var jim = {
    getFirstName: function () {
        return firstName;
    }
}

_.extend(john,jane, jim); // adds the object properties from jane and jim TO john, so john gets all the key values

//BUILDING OBJECTS
//function constructors, 'new', and the history of javascript

function Person(firstName, lastName) {
    // console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    // console.log('This function is invoked.');
}

//BIG WORD ALERT - FUNCTION CONSTRUCTORS:
//A NORMAL FUNCTION THAT IS USED TO CONSTRUCT OBJECTS. THE 'THIS' VARIABLE POINTS A NEW EMPTY OBJECT, AND THAT OBJECT IS RETURN FROM THE FUNCTION AUTOMATICALLY.

//FUNCTION CONSTRUCTORS AND .PROTOTYPE 
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
} //javascript uses memory, and objects take up memory space, so if you added get full name to every object, then that means every object gets its OWN copy of 'getFullName'. IF you add it to the prototype, you only have the method once, as opposed to a having it in 1000 objects. All objects share the same prototype objects

var john = new Person('John','Doe');
// console.log(john);

var jane = new Person('Jane','Smith');
// console.log(jane);

Person.prototype.getFormalFullName = function () {
    return this.lastName + ' ' + this.firstName;
} 

// console.log(john.getFormalFullName())

//DANGEROUS ASIDE - 'NEW' AND FUNCTIONS
// var john = Person('John','Doe'); //make sure to have new

//function constructors and object constructors need the name to be capitalized from the first letter.

//CONCEPTUAL ASIDE - BUILT-IN FUNCTION CONSTRUCTORS - when you create function constructors its actually creating objects
var a = new Number("3");
// console.log(a.indexOf('o')) // 1
// console.log(a.indexOf('awd')) // -1

var a = new Date("1/9/1992");
// console.log(a);

//all STRING objects
String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}

// console.log("John".isLengthGreaterThan(3)) //true

var a = new Number(3) //object that wraps number
Number.prototype.isPositive = function () {
    return this > 0
}
// console.log(a.isPositive()) // true

//DANGEROUS ASIDE - BUILT-IN CONSTRUCTORS
var a = 3;
var b = new Number(3);
// console.log(a == b); //true
// console.log(a === b); //false // this is dangerous, do not use build in function constructors
var c = Number("3");
// console.log(c) // 3

//DANGEROUS ASIDE- ARRAYS AND FOR IN // never use for in for arrays beacuse you can loop through the arrays prototype.
Array.prototype.myCustomFeature = 'cool!'
var arr = ['John','Jane','Jim'];

for (var prop in arr) {
    // console.log(prop + ': ' + arr[prop])
}


//Object.create and Pure Prototypal Inheritance
var person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function () {
        return 'Hi ' + this.firstName;
    }
}
//BIG WORD ALERT - POLYFILL - code that adds a feature which the engine(browser) MAY lack.

//polyfill
if (!Object.create) {
    Object.create = function (o) {
        if (areguments.length > 1) {
            throw new error('Object.create implementation' + ' only accepts the first parameter.');
        }
        function F() {
            F.prototype = o;
            return new F();
        };
    }
}

var john = Object.create(person); //john.greet() = 'Hi Default' because of prototype
john.firstName = 'John';
john.lastName = 'Doe';
// console.log(john);


//ES6 and CLASSES (ecmascript 2015)

class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        return 'Hi ' + firstName;
    }
}

var john = new Person1('John', 'Doe')
// console.log(john);

// class InformalPerson extends Person {
//     constructor(firstName, lastName) {
//         super(firstName, lastName);
//     }

//     greet () {}
//     return 'Yo ' + firstName; 
// }

//BIG WORD ALERT - SYNTACTIC SUGAR : A DIFFERENT WAY TO TYPE SOMETHING THAT DOESN'T CHANGE HOW IT WORKS UNDER THE HOOD

//----------------------------------------------------------
//ODDS AND ENDS
var people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        addresses : [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        //the 'jane object
        firstName: 'Jane',
        lastName: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function () {
            return 'Hello!';
        }
    }
]

// console.log(people);

//TYPEOF, INSTANCEOF, AND FIGURING OTU WHAT SOMETHING IS
var a = 3;
// console.log(typeof a); //number

var b = 'hello';
// console.log(typeof b); //string

var c = {};
// console.log(typeof c); //object

var d = [];
// console.log(typeof d) //weird - it prints object
// console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
// console.log(typeof e);
// console.log(e instanceof Person);

// console.log(typeof undefined); // instace of tells you what instance is of its prototype chain
// console.log(typeof null); // a bug since, like, forever..

var z = function () {};
// console.log(typeof z)


//STRICT MODE
function logNewPerson() {
    "use strict";

    var person2;
    person2 = {};
    console.log(person2)
}
"use strict";
var person;
person = {};
console.log(person);
logNewPerson();

//BONUS - TYPESCRIPT, ES6, AND TRANSPILED LANGUAGES
//TRANSPILE: CONVERT THE SYNTAX OF ONE PROGRAMMING LANGUAGE, TO ANOTHER - in this case languages that don't really ever run anywhere, but instead are processed by 'transpilers' that generate javascript

//typescript is by microsoft
//traceur - if you have a big project that will take a couple years long, you might want to use traceur

/*
Transpiled Languages References
EXTRAS

For more on Typescript head to: http://www.typescriptlang.org

and try out writing Typescript code in your browser here: http://www.typescriptlang.org/Playground

For more on Traceur head to: https://github.com/google/traceur-compiler

and try out writing ES6 code in Traceur in your browser here: https://google.github.io/traceur-compiler/demo/repl.html#

Thank you!
*/