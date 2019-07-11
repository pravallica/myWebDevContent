function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

function product(...numbers) {
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

  //2

  function join(array1, array2) {
    return array1.concat(array2);
  }

  function join(array1, array2) {
    return [...array1, ...array2];
  }

  //3

  function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
  }

  function unshift(array, ...array2) {
    return [...array2,...array];
  }

