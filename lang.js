/* Java Script Data Types           Object Types (new function)
    1.string                            1.String
    2.number                            2.Number 
    3.boolean                           3.Boolean    
    4.object                            4.Array
    5.function                          5.Date
    6.null and undefined                6.Objects                                   */

function myFunction() {
    document.getElementById('demo').innerHTML = "JavaScript Showtime";
}

function overwriteFunction() {
    document.write('Overwrite');
}

function consoleFunction() {
    console.log("First JavaScript");
}

function print() {
    window.print();
    console.log("Print this page");
}

function displayDate() {
    document.getElementById('demo').innerHTML = Date();
}

function pointSort() {
    points.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById('demo').innerHTML = points;
}

function reverseSort() {
    document.getElementById('demo').innerHTML = letter.reverse().toString();
}

function arrow() {
    var hello;
    hello = (val) => "Hello " + val
    console.log(hello);
    document.getElementById('demo').innerHTML = hello('Universe');
}

// var let const

var author = {
    firstName: "Sasinat",
    lastName: "Tnp",
    fullName: function() {
        return this.firstName + "" + this.lastName; 
    }
};

/* array 

var myInfo = ['Sasinat', 'Tnp', '20 yrs', 'Bkk'];
var location = myInfo.pop();                                            // location = Bkk
var len = myInfo.push('Bkk');                                           // len = 4
var firstName = myInfo.shift();                                         // firstName = Sasinat
myInfo.unshift('Sasinat');                                              // add first index
myInfo.splice(2,2, "Chula", "Junior");                                  // ['Sasinat', 'Tnp', 'Chula', 'Junior']
var university = myInfo.slice(2);                                       // ['Chula', 'Junior']                                  */

// array sort

var letter = ['a', 'f', 'cd', 'b', 'e'];
letter.sort();
letter.reverse();

var points = [400, 10, 100, 50, 25, 550];
var max = Math.max.apply(null, points);                                 // max = 550

// Add EventListener

var evt;
evt = () => {
    document.getElementById('demo').innerHTML += this;
}

// Window object calls the function

window.addEventListener("load", evt);

// Button object calls the function

document.getElementById('objectbtn').addEventListener("click", evt);

// Class

class Me {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let me = new Me("Nat", 2000);
var age = () => {
    document.getElementById("demo").innerHTML = "My age is " + me.age() + " years old.";
}
document.getElementById('agebtn').addEventListener("click",age);

// JS Async --> Solve by Callbacks

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    console.log(sum + "" + myCallback(sum));
}
document.getElementById('callbackbtn').addEventListener("click", myCalculator(5, 5, myDisplayer));

// JS Async --> Solve by await

async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000);
      });
      document.getElementById("demo").innerHTML = await myPromise;
}
document.getElementById('awaitbtn').addEventListener("click", myDisplay());

