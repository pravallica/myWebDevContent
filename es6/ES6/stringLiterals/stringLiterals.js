// to get the year using es5

function getMessage(){
    const year = new Date().getFullYear();
      return "The year is " + year;
    
    }
    console.log(getMessage());

// using template strings
function getMessage(){
        return `The year is ${new Date().getFullYear()}`; 
    }
    console.log(getMessage());


//can also have any valid javascript expression
function getMessage(){
    const year = new Date().getFullYear();
        return `The year is ${year+2*3}`; 
    
    }
    console.log(getMessage());

