
// function constructor





// constructor function = classes
let Person = function(name, yearOfBirth, job){
  //Person
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}
Person.prototype.calculateAge = function(){
  return 2016 - this.yearOfBirth;
}

let john = new Person("John", 1996,"Designer");
let mark = new Person("mark",1998, "Retired");
let van = new Person("van", 2000, "player");
console.log(john.calculateAge());


//object.create

var personProto = {
  calculateAge: function(){
    return 2016 - this.yearOfBirth;
  }
};
let john1 = Object.create(personProto);
john1.name = "john";
john1.yearOfBirth = 2000;
john1.job  = "driver";
console.log("john1 age" + john1.calculateAge());

var jane = Object.create(personProto, {
  name: {value: "jane"},
  yearOfBirth: {value: "2001"},
  job: {value: "programmer"}
});
console.log(" age" +  jane.calculateAge());


let obj = {
  // setter are use to set the property in objects
  set display(value){
    this.val = value;
  },
  val:""
}
obj.display = "Samad";
console.log(obj.val);

//

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();
animal.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
console.log(rabbit);
console.log(animal);




let arr = [1,3,4,5,5]

for (var variable1 in arr) {
  console.log("keys" + variable1);
}
for (var variable of arr) {
  console.log("values" + variable);
}




/////////////
class Animal{
   eat()
   {
     console.log("Animal eat method");
   }

}

class Rabbit {
  run()
  {
    console.log("Rabbit run");
  }

}


]
