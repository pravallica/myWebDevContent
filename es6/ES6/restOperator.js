function addNumbers(a,b,c,d){
    const numbers = [a,b,c,d];
    return numbers.reduce((sum,number) =>{
      return sum+number;
    },0);
  }
 addNumbers(1,2,3,4);

//Using rest operator

 function addNumbers(...numbers){
   
    return numbers.reduce((sum,number) =>{
      return sum+number;
    },0);
  }
 addNumbers(1,2,3,4,5,6,7);

//  enni arguments ichina it will concat them into one Array. there is no need to specify
// the number of args in the beginning
