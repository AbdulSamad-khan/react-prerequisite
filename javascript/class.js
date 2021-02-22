/*
function Clock({ template }) {

    let timer;

    function render() {
      console.log("template value " + template );
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };

  }

  let clock = new Clock({template: 'h:m:s'});
  clock.start();
*/



class Clock{
  timer;
  constructor({template}){
    this.template = template;
  }

  render(){
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  let mins = date.getMinutes();
  if (mins < 10) mins = '0' + mins;
  let secs = date.getSeconds();
  if (secs < 10) secs = '0' + secs;
  let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

  console.log(output);
}
stop(){
    clearInterval(this.timer);
}
start(){
  this.render();
  this.timer = setInterval(() => {this.render();},1000)
}

}
let clock = new Clock({template: 'h:m:s'});
//clock.start();

// inheritance in classes
// Task 1
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {

    /*Before using this.name of parent we have to call super() -> parent constructor*/
    //this.name = name;
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);


class Vehicle{
 constructor(name, model){
   this.name = name;
   this.model = model;
 }
 run(){
   // template string
   console.log(`${this.name} is running, ${this.model} by Vehicle`);
 }

}

class Gmc extends Vehicle{
  constructor(name,model){
    super(name,model);
    this.cruiseControl = true;
  }
  run(){
    //console.log(`${this.name} is running, ${this.model} by Gmc`);
    // calling parent method from child
    //super.run();
    setTimeout(super.run(),5000)
  }

  // arrow function dont have their own this or super they use the context of their surrounding

}

let car = new Gmc("GMC Truck 4x4", 2021);
car.run();

const arr = [
  { name: 'John', age: 92 },
  { name: 'Dave', age: 42 },
  { name: 'Justin', age: 3 }
]

function propComparator(prop) {
    return function(a, b) {
        //console.log(a, b);
        return a[prop] - b[prop];
    }
}

//console.log(arr.sort(propComparator('age')));

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    console.log(articleA.title + " " + articleB.title)
    return articleA.date - articleB.date;
  }
  compare() {}
}

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];
let obj = new Article()
obj.compare();
articles.sort(Article.compare);
// console.log(articles)
// console.log(Article.compare)
// alert( articles[0].title );




// private and protected properties
/*
for private = followed by #
for protected = followed by _
*/
class CoffeMachine{
  _waterLevel = 1000;

  display(){
    console.log(this._waterLevel);
  }
}
let machine = new CoffeMachine();
machine._waterLevel = 0;
machine.display();

// Static

class StaticExample {
 static dis(){
  return 10;
  }
 dis1(){
    return 0;
  }
}

let obj1 = new StaticExample();
console.log(StaticExample.dis());

let date = new Date();
console.log(date);





// prototype

class Animal1 {}
class Rabbit1 extends Animal1 {}

// for statics
alert(Rabbit1.__proto__ === Animal1); // true

// for regular methods
alert(Rabbit1.prototype.__proto__ === Animal1.prototype); // true
