/* Write a JS program to display the current day and time in the following format
Today is: Tuesday
Current time is: 10 PM: 30: 38 */

/* Create object with date data type */
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log('Today is:' + daylist[day]);
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand;
if (hour>12){
    prepand ="PM";
} 
else{
    prepand="AM";
}
if (hour>12 && prepand ==="PM"){
  hour=hour-12;
}

console.log('Current Time:' +' '+ hour + ' '+ prepand+ ':' + ' '+minute + ':' + ' '+second);  


