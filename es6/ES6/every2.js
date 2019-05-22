// names with more than 4 alphabets
var names = [
    "Alexandria",
    "Alexis",
    "Joe",
    "Jill"
    ];

    //do all names have more than 4 alphabets?
  names.every(function(name){
    return name.length > 4;
  });

    //do some of the names have more than 4 alphabets?
  names.some(function(name){
    return name.length > 4;
  });
