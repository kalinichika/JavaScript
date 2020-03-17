let item = [
  {
    firstName: "Vika",
    lastName: "Kalinina"
  },
  {
    firstName: "Rita",
    lastName: "Malinina",
    "item-address": {
      country: "Russia",
      city: "Moscow",
      street: "Festivalnaya",
      skills: ["html", "css", "js"]
    }
  }
];

str = `
<ul>
  <li>First name : ${item[1].firstName}</li>
  <li>Last name : ${item[1].lastName}</li>
</ul>
`;

//console.log(whoIs(item[0]));

function whoIs(item) {
  return `Hello, ${item.firstName} ${item.lastName}`;
}

//console.log(whoIs(item[1]));

//console.log(str);
//document.body.innerHTML = str;

const sum = function(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
};

//console.log(sum('\n',whoIs(item[0]),'\n', whoIs(item[1])));

(function() {})(); //самовызыающаяся

const numArr = [2, 22, 34, 123, 5, 6];
let value = numArr.length;

value = Array.isArray(numArr);

numArr[0] = 0;
value = numArr.indexOf(123);
value = numArr.push(100);
value = numArr.pop();
value = numArr.unshift(3);
value = numArr.shift();
value = numArr.slice(4, 7);
value = numArr.splice(1, 2);
value = numArr.splice(1, 0, 4, 6, 7);
value = numArr.concat(numArr);
value = numArr.reverse();
value = numArr.join(" | ");
value = "hello world".split(" "); //(''), ()

//console.log(value, numArr);

let arr = ["Vika", "Anton", "Maksim", "Lilya"];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}

//console.log(arr);
//console.log(newArr + " - длины имён");

let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
  newArr2.push(arr[i][0].toUpperCase());
}

//console.log(arr);
//console.log(newArr2);

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  //console.log(el);
  return el.length;
}
newArr = mapArray(arr, nameLength);
//console.log(newArr);

function nameToUpperCase(el) {
  return el.toUpperCase();
}
newArr = mapArray(arr, nameToUpperCase);
//console.log(newArr);

function greeting(firstName) {
  return function(lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

const testGreeting = greeting("Viktoriya"); //1 способ
let fullName = testGreeting("Kalinina");
//console.log(fullName);

fullName = greeting("Viktoriya")("Kalinina"); // 2 способ
//console.log(fullName);

function question(job) {
  /*
  // так можно но неудобно
  if (job === "developer") {
    return function(name) {
      return `${name}, что такое JavaScript?`;
    };
  } else if (job === "teacher") {
    return function(name) {
      return `${name}, какой предмет вы ведёте?`;
    };
  }
  */
  const jobDictionary = {
    developer: "что такое JS?",
    teacher: "какой предмет вы ведёте?"
  };
  return function(name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}

let developerQuestion = question("developer");
//console.log(developerQuestion("Viktoriya"));

let teacherQuestion = question("teacher");
//console.log(developerQuestion("Maria"));

function getThis() {
  console.log(this);
}
//getThis();
//window.getThis();
//console.log(window.getThis);

function getPrice() {
  console.log(this.price);
  return this;
}
function getName() {
  console.log(this.name);
  return this;
}
const prod1 = {
  name: "Intel",
  price: 100,
  getPrice,
  info: {
    information: ["2.3ghz"],
    getInfo: function() {
      console.log(this);
    }
  },
  getName
};
const prod2 = {
  name: "AMD",
  price: 200,
  getPrice
};

//prod1.getPrice();
//prod1.info.getInfo();
//prod2.getPrice();

//prod2.getName = prod1.getName;
//prod2.getName();

let str1 = "Hello world";
const reversStr = str1
  .split("")
  .reverse()
  .join("");
//console.log(reversStr);

const prod3 = {
  name: "ARM",
  price: 300,
  getName,
  getPrice
};

//prod3.getName().getPrice();

const prod4 = {
  name: "ex",
  price: 400
};

//getPrice.call(prod4);

let migrating = true;
let fly = function(num) {
  let sound = "Flying";
  for (let i = 0; i < num; i++) {
    wingFlapper();
  }
function quack(num) {
  let sound = "Quack";
  let quacker = function() {
    //console.log(sound);
  };
  for (let i = 0; i < num; i++) {
    quacker();
  }
}
