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


function a() {

    function b() {
        console.log(myVar);
    }
    var myVar = 2;
    // b();
}


var myVar = 1;
// a();

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
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');