let person = [
  {
    firstName: "Vika",
    lastName: "Kalinina"
  },
  {
    firstName: "Rita",
    lastName: "Malinina",
    "person-address": {
      country: "Russia",
      city: "Moscow",
      street: "Festivalnaya",
      skills: ["html", "css", "js"]
    }
  }
];

str = `
<ul>
  <li>First name : ${person[1].firstName}</li>
  <li>Last name : ${person[1].lastName}</li>
</ul>
`;

//console.log(whoIs(person[0]));

function whoIs(person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

//console.log(whoIs(person[1]));

//console.log(str);
//document.body.innerHTML = str;

const sum = function(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
};

//console.log(sum('\n',whoIs(person[0]),'\n', whoIs(person[1])));

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
console.log(newArr);

function nameToUpperCase(el) {
  return el.toUpperCase();
}
newArr = mapArray(arr, nameToUpperCase);
console.log(newArr);

function greeting(firstName) {
  return function(lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

const testGreeting = greeting("Viktoriya"); //1 способ
let fullName = testGreeting("Kalinina");
console.log(fullName);

fullName = greeting("Viktoriya")("Kalinina"); // 2 способ
console.log(fullName);

function question(job) {

 const jobDictionary = {
   developer : 'что такое JS?',
   teacher : 'какой предмет вы ведёте?',
 };
 return function(name){
   return `${name}, ${jobDictionary[job]}?`;
 }

}

let developerQuestion = question('developer');
//console.log(developerQuestion("Viktoriya")); 

let teacherQuestion = question('teacher');
//console.log(developerQuestion("Maria")); 
