// Create an array of elements
var numbers = [1,2,3,4,5,6,7,8,9,10];
// create a variable to hold sum
var sum=0;
// Loop over the Array, incrementing the sum variable
numbers.forEach(function(number){ //main array numbers ani untey, iterative function lo number ani teskovachu
   sum=sum+number;  
});
// print the sum variable
 console.log(sum);

 /*We can also add the function first and pass the function reference into forEach like below

 var numbers = [1,2,3,4,5,6,7,8,9,10];
var sum=0;
function adder(number){ 
   sum=sum+number;  
}
numbers.forEach(adder);//adder tarvatha () undadhu
 console.log(sum);
*/

// Real world Example: Used to delete spam emails in gmail(selected anni oka array loki velli, ah array delete chestham anattu)