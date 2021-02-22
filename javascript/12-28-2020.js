// There are four ways to output javascript
console.log("Learn javascript");
document.getElementById("demo").innerHTML="Learn javascript";
document.write("Learn Javascript");
alert("Learn Javascript");



console.log((5 === "5"));

var student = {
  name: 'Abdul Samad',
  age: '20'
};
/*  making it null means it doest exist in Javascript but type is still an object
student = null;

making it undefine means emptied the value
student = undefined;*/
console.log(student);

console.log(typeof (student));



/*Data types */

var car = ["MEHRAN","FX","FOXY"];
var course = {
  title: "English",
  duration: "2 months"
};
var person = null;
console.log("Array : " + typeof car);
console.log("object : " +typeof car);
console.log("Null: " + typeof person);


/* Objects */

var school ={
  name: "St. Lawrence Secondary School",
  location: "Karachi",
  department:{
    computerScience:{
      programName: "Software Engineering"
    }
  },
  address: function(){
    /*in the function defination, this means the owner of the function*/
    return school.name + school.location;
  }
};

console.log(school['department']['computerScience']['programName']);

// invoke a function
console.log("oye!" + school.address('St. Lawrence Secondary School, Karachi', 'Karachi'));


/* Today 1-5-2021 */
// The backslash (\) escape character turns special characters into string characters:
var name1 = "My name is Abdul Samad\" Khan \"Software Engineer";
var name2 = 'It\'s good';
var name3 = "It\"s excellent";
var name4 = "We are \"Vikings\"";

console.log(name1);
console.log(name4);


/* javascript 1-6-2021*/
/* var is global scope and function scope
*/
var greeting = "HI"; // we can re declare var variable
var greeting = "Hey! Abdul"; // global scope

if(true){
  //var greeting = "Hey! Rafay";
}
function name(){
  var greeting = "Hey! Wahaj"; // function scope
  console.log("greetings "+greeting);
}

console.log(greeting);

name();
console.log(greeting);

/* let is block scope
let solves the problems which comes var
you can't redecalre with in its scope which gives an error
you can update it
*/

let message = "Hey! javascript Learner";
//let message = "Hey! you want to learn react"; you can't declare unlike var
if(true){
let message = "Welldone";
console.log(message);
}
console.log(message);


/* const
Const is a blockscope you neither redeclare nor update the varible
you must intalize the const variable
const same as let you but you can't update const
*/

const University = "MOHAMMAD ALI JINNAH UNIVERSITY KARACHI";
// University = "STUTGART UNIVERSITY, GERMANY"; can't update Const



/* Arrays
can store different types of data arrays are type of objects in Javascript
we can't use arrays for named indexes for that we have Objects
*/

let fighterJets = ["JF17 Thunder","SU 30MKI", "f35 raptor"];

for(let i = 0;i<fighterJets.length;i++){
  console.log(fighterJets[i]);
}

fighterJets.forEach(loopThrough);

function loopThrough(items){
  console.log(items);
}
console.log(typeof fighterJets);

let language = {
  name: "javascript",
  "react developer": false, // can use multiword properties using double qoutes
};
// add to object
language.isAdmin = true;

// delete property from object
delete language.isAdmin;
console.log(language);

//console.log(lauguage.react developer); it doesn't work like that look the nextline
console.log(language['react developer']);

/* There are ways to create object properties
1. using simple properties . notation
2. using square brackets
*/

let fruit = prompt("Enter your favourtite fruite");

let favourtiteFruite ={
  apple: 10,
  color: "green",
  [fruit + "juice"]: 2
}
console.log(favourtiteFruite[fruit]);
console.log(favourtiteFruite[fruit+"juice"]);

//create a object property using square brackets

let person1 ={

}
person1['gender'] = "male";
console.log(person1['gender']);

console.log(person1);
delete person1.gender;

console.log(person1);

// for in loop is used to iterate loop
let obj ={
  "+46": "Germany",
  "+50": "Australia",
  "+2": "Pakistan"
}
for (let variable in obj) {
  console.log(+variable);
}

// javascript.info

// task1
let user = {};
user.name = "John";
user.surName = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

// tasl 2
function isEmpty(obj){
  for (let variable in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(user));

// tasl 3

let salaries ={
  John: 100,
  Ann: 160,
  Pete: 130
};
// bad code..
if(isEmpty(salaries)){
  console.log("0");
}else{
  var sum1 = salaries.John + salaries.Ann + salaries.Pete;
  console.log(sum1);
}
// good code

let sum = 0;
for (var variable in salaries) {
sum+= salaries[variable];
}
console.log(sum);

// task 4

let menu = {
  width: "200",
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj){
for (key in obj){
  if(typeof(obj[key]) === "number"){
    obj[key] = obj[key] * 2;
  }
}
}
multiplyNumeric(menu);
console.log(menu);

/* Array Methods

1. Map
2. Filter
3. Reduce

*/

/* for each syntax
arr.forEach(callback(currentValue[, index[, array]]) {
  // execute something
}[, thisArg]);

*/
let laptop = ["Hp", "Dell", "Lenovo","Samsung"];
let val = laptop.forEach(function(items, index, array){
  console.log(this.shop + items + "Laptops" + array);
},{
  shop: "AbdulSamad Loves "
});


/*
Map function

var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg])

*/
// doubles the array
let mapArr = ['1','2','3','4','5'];
let doubled = mapArr.map(function(items, index, array){
  return items*2;
},{});
console.log(doubled);

/*
Filter function
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])
*/

// filter all the numbers which are divisible by 2

let divsibleByTwo = [1,2,3,4,5,6,7,8,9,10].filter(function(items, index, array){
  return items % 2 === 0;
},{});

console.log(divsibleByTwo);
/* In the next example, filter() is used to get all the students
whose grades are greater than or equal to 90.*/

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

let gradeA = students.filter(function(items,index,array){
  return items.grade >= 90;
});

gradeA.forEach((item, i) => {
console.log(item.name);
});


/*
Reduce function
the reduce() method reduces an array of values down to just one value.
To get the output value

arr.reduce(callback[, initialValue])
accumulator - the returned value of the previous iteration
currentValue - the current item in the array
index - the index of the current item
array - the original array on which reduce was called
The initialValue argument is optional. If provided, it will be used as the
initial accumulator value in the first call to the callback function.
*/

let finalSum = [1,2,3,4,5,6,7,8,9,10].reduce(function(accumulator, item){
  return accumulator+item;
}, 0);
console.log(finalSum);

function action(){
  return "hey how is it going";
}
// Dom = Document Object Model

// arrow function is used to shorthand the syntax

let greet = function(){
  return "Hey! what's up";
}

let greet1 = () => "Hey! what's up";
console.log(greet1());

// this keyword difference with normal function and arrow function
/*
var hello = function(){
  document.getElementById("event").innerHTML += this;
}
window.addEventListener('load', hello);
document.getElementsByClassName("btn")[0].addEventListener('click',hello);
*/

var hello1 = () =>{
  document.getElementById("event").innerHTML += this;
}
window.addEventListener('load', hello1);
document.getElementsByClassName("btn")[0].addEventListener('click',hello1);


// this keyword task
let a,b;
let calculator = {
  name: "AbdulSamad",
  read(){
     a = prompt("Enter 1st value?");
     b = prompt("Enter 2nd value?");
  },
  sum(){
    return parseInt(this.a) + parseInt(this.b);
  },
  mul(){
    return this.a * this.b;
  }
}
calculator.read();
calculator.a = a;
calculator.b = b;
console.log(calculator.sum());
console.log(calculator.mul());


function sayHi(){
  console.log(this.name);
}
calculator.f = sayHi;
calculator.f();

// callback vs higher orderfucntion

let add = (a,b) => a + b;
let mul = (a,b) => a * b;
let sub = (a,b) => a - b;// callbacks

                  // function as an input is higher order function
let calculate = (a,b,operator) => operator(a,b);
console.log(calculate(2,3,mul));
