// to give a default value to an argument when the user doesnt provide any value
// using traditional way
function numberToAdd(number1, number2){
    if(!number2){
        number2 = 5;
    }
    return number1+number2;
  }
  numberToAdd(2);
  numberToAdd(2,10);

// using default function arguments
  function numberToAdd(number1, number2 = 5){
    return number1+number2;
  }
  numberToAdd(2);
  numberToAdd(2,10);