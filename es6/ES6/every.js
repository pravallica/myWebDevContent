var computers = [ 
    { name:"Apple", ram : 32},
    { name:"Toshiba", ram : 4},
    { name:"Acer", ram : 16},
    { name:"HP", ram : 24}
  ];

//   traditional way to find if there are computers with more than 16 ram
  
  var allComputersAreWorking = true; 
  var someComputersAreWorking = false;
  
  for ( var i =0; i<computers.length ; i++)
  {
    var computer = computers[i]
    if (computer.ram < 16){
            allComputersAreWorking = false; //this can be done using every
    }
    else {
        someComputersAreWorking = true;
    }
  }
  console.log(allComputersAreWorking);
  console.log(someComputersAreWorking);

//   using every helper

computers.every(function(computer){
	return computer.ram > 16;
});

// using some helper

computers.some(function(computer){
	return computer.ram > 16;
});