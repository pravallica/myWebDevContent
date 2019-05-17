//cars object

var cars =[
    {model:'Benz', price:'Expensive'},
    {model:'Sorento', price:'Cheap'}
    ];

//creatinga variable to store the new details
  var prices = cars.map(function(car){
      //returning the prices using map in a different array
    //   this is called as plucking
    return car.price;
  }
             );
  console.log(prices);

//   O/P: ["Expensive","Cheap"]

