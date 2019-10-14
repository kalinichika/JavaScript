"use strict";
/*
//неработающая хрень из книги
function mapper(f) {
  return function(a) {
    return map(a, f);
  };
}

let increment = function(x) {
  return x + 1;
};
let incrementer = mapper(increment);
console.log(incrementer([1, 2, 3]));
*/
function Range(from, to) {
  this.from = from;
  this.to = to;
}
Range.prototype = {
  includes: function(x) {
    return this.from <= x && x <= this.to;
  },
  foreach: function(f) {
    for (let x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function() {
    return "(" + this.from + " " + this.to + ")";
  }
};

/*АСИНХРОННОСТЬ*/
setTimeout(function() {
  console.log("Hello,");
}, 2000);

setTimeout(function() {
  console.log("VIKTORIYA");
}, 1000);

let r = new Range(1, 3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);

let r1 = new Range(4, 7);
console.log(r1.includes(5));
console.log(r1.includes(20));
r1.foreach(console.log);
console.log(r1);

console.log(r instanceof Range);
console.log(r1.prototype);
console.log(r.constructor);
console.log(Range.constructor);

class User {
  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }
}

let p;

/* МЕТОДЫ  ДЛЯ  МАССИВОВ*/
let arr = [-6, -2, -1, 0, 1, 2, 3, 4, 5, 6];

// FOREACH используется для перебора массива.
p = arr.forEach(function(item, i, arr2) {
  //console.log("forEach:\t" + "|" + item * 10 + "|");
});

// FILTER используется для фильтрации массива через функцию.
p = arr.filter(function(number) {
  return number > 0;
});
//console.log("filter:\t", p);

// MAP используется для трансформации массива.
p = arr.map(function(item) {
  return item >= 0 ? "*" + item : "*" + item * -1;
});
//console.log("map:\t\t" + p);

// REDUCE используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата
p = arr.reduce(function(sum, item) {
  return sum + item;
});
//console.log("reduce:\t" + p);

Array.prototype.sum = function() {
  return arr.reduce(function(sum, item) {
    return sum + item;
  });
};

console.log("new function in Array sum = " + arr.sum());
