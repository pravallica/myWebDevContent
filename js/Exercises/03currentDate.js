/* Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if(dd<10){
  dd="0"+dd;
}
if (mm<10){
  mm="0"+mm;
}

console.log(dd+'/'+mm+'/'+yyyy);
console.log(dd+'-'+mm+'-'+yyyy);