// creating a function to add 2 variables in the traditional way

const add = function(a,b){
    return a+b;
  }
  
  add(3,4);


//usage for one statement in curly braces
const add = (a,b) => a + b;

add (4,5);

//   using fat arrow for more than one statement

const add = (a,b) => {
    let sum = a + b;
   return sum;
}
add(4,5);

// Exception: when there is a very long statemnt in a single line; can use return and curly braces

// for single argument
const add = a => a*2;
add(4);

// with array helpers
const arrays = [1,2,3];
arrays.map(array => 2*array);