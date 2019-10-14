function first(y) {
  console.log(1);
  y();
}

function second() {
  console.log(2);
}

function third(a, b) {
  console.log(a * b);
}

first(second);

first(function() {
  console.log(100 * 4);
});

first(function() {
  third(4, 5);
});
