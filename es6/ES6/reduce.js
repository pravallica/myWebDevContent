var numbers = [10, 20, 30];
var sum = 0;
for(var i=0;i<numbers.length; i++){
    sum+=numbers[i];
}
console.log(sum);

// using reduce helper
numbers.reduce(function(sum,number){
    return sum + number;

} , 0); //this 0 is like the counter or initial value
