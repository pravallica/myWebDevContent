/*  Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7 */

var len1 = 5;
var len2 = 6;
var len3 = 7;
var speri = (len1+len2+len3)/2;
var area = Math.sqrt(speri*((speri-len1)*(speri-len2)*(speri-len2)));
console.log(area);
/* Answer is wrong*/