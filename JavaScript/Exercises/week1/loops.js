// The for statement in JavaScript has the same syntax as in Java and C.
var i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var myArray = ['A', 'B', 'C'];
for (var i = 0; i < myArray.length; i++) {
  console.log('The member of myArray in index ' + i + ' is ' + myArray[i]);
}

// The while statement is a more simple version of the for statement
// which checks if an expression evaluates to true and runs as long as it says true

var i = 99;
while (i > 0) {
  console.log(i + ' bottle of beer on the wall');
  i -= 1;
}

// The break statement allows to stop the execution of a loop.

var i = 1;
while (true) {
  console.log(i + ' bottle of water');
  i += 1;
  if (i == 49) {
    break;
  }
}

// Continue Statement kips the rest of the loop and jumps back to the beginning of the loop

for (var i = 100; i > 0; i--) {
  // check that the number is even
  if (i % 2 == 0) {
    continue;
  }
  // if we got here, then i is odd.
  console.log(i + ' is an odd number');
}

// Exercise

var myArray = ['What is the meaning of life?', 'The meaning of life is', 42];

// TODO: modify this code
for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
