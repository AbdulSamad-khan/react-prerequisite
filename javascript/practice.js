alert("JAVASCRIPT Connection Established")

let user = {

}
// add property to objects

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
console.log(user.name);
delete user.name;
console.log(user);
console.log();

// check for emptiness
function isEmpty(object){
  for(let variable in object){
    return true;
  }
  return false;
}
console.log(isEmpty(user));


// Sum


let salaries = {
  john: 100,
  pete: 200,
  ann:100
}
let sum = 0;
if(!isEmpty(salaries)){
  console.log(0);
}else{
  for (var variable in salaries) {
  sum += salaries[variable];
  }
  console.log(sum);
}

// For in and forof

let student = {
  name: "Abdul Samad",
  year: "third year",
  program: "BS. Software Engineering"
}
// iterate object using traditional for loop
for(let i = 0;i<Object.keys(student).length;i++){
  console.log(student[Object.keys(student)[i]]);
}
// better way, for in loop uses keys to iterate
for (var keys in student) {
  if (student.hasOwnProperty(keys)) {
    console.log(student[keys]);
  }
}

let myString = "My surname is KHAN";
for (var val in myString) {
  if (myString.hasOwnProperty(val)) {
    console.log(myString[val]);
  }
}

// **************************** for of **********************************
// can't iterate object using for of loop and for of is only for iterable elements
let students =["Ronald Cornelius", "Navid Anjum", "Hamza Khan"];
for (var variable of students) {
  console.log(variable);
}

for (var val1 of myString) {
  console.log(val1);
}

//Task 4

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(value){
for (var keys in value) {
  if (value.hasOwnProperty(keys)) {
    if(typeof(value[keys]) == "number"){
      menu[keys] = value[keys]*2
    }
  }
}
}
multiplyNumeric(menu);
console.log(menu);



//Task1: if student belongs to maju qualify using map function

let stu =[
  {name: "Ronald Corenelius", university: "maju"},
  {name: "Navid Anjum", university: "maju"},
  {name: "Syed Hatil naqvi", university: "Iqra university"}
];

let res = stu.map(function(items, index, array){
  return items.university == "maju";
})
console.log(res);

let val2 = stu.filter(function(items, index){
  if(res[index] == true){
    return items;
  }
});
console.log(val2);


let val3 = stu.filter(function(items, index){
  return items.university== "maju";
})
console.log(val3);

// Task 2: create an object with the frequency of each property

let animals = ["dog", "cat", "dog", "dear", "dog"];
                                //  acc, arrayItems
let val4 = animals.reduce(function(object, items){
if(!object[items]){

}else {
  object[items]++;
}
return object;
},{});
console.log(val4);
