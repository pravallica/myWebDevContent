//create new array that contains height of each object

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map(function(image){
      return image.height;
  });

//   create new array with distance/time of a trip
  var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds= trips.map(function(trip){
      return trip.distance/trip.time;
  });

//pluck the color property
var paints=[{color:'red'},{color:'blue'},{color:'yellow'}];

var property='color';

function pluck(paints, property) {

    var newarray=paints.map(function(paint){

        return paint[property];
    });

    return newarray;

}