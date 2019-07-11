// to combine two arrays 
const defColor = ['red','green'];
const favColor = ['yellow','blue','violet'];

defColor.concat(favColor);
                  
// using spread operator
const defColor = ['red','green'];
const favColor = ['yellow','blue','violet'];
['orange',...defColor, ...favColor]; //creates a new array and we can add more colors to the new array on top of the existing arrays