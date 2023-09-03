// for print a message on browser
// console.log("hello world");

// JS supports single and double quotations for print a string
// console.log('Hello world');
// console.log("Hello world");

// You don't need to define datatype of a variable
// a = 10;
// b = 10.5;
// myString = "Hello World I'm learning JS";
// console.log(myString);

// JS Datatypes
// 1. Numbers
// 2. Strings
// 3. Arrays
// 4. Objects
// 5. Boolean
// 6. null

// Typeof keyword to know the datatype of given value
// console.log(typeof(a));

// For concatenation
// a = 10;
// b = 10;
// myString = "hello" + " world";
// console.log("Hello world I'm " + a + " years old");

// Precedence
// console.log(a + b + " The sum is");
// console.log("The sum is: " + a + b);
// console.log("The sum is: " + (a + b));

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation-bar");

hamburger.addEventListener('click', function () {
    navigation.classList.toggle("active");
});
