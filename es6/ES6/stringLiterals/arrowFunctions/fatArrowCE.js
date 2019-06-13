// Refactor using fat arrow function 
const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

//   Arrow functions dont work always; add getname using 'this'
  const profile = {
    name: 'Alex'
};


  const profile = {
    name: 'Alex',
    getName: function(){
        
    return this.name;
    }
};
profile.getName();
