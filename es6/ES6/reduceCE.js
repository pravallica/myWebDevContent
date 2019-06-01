// calculate sum of distances travelled
var trips = [
    { distance:34},  { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous,trip){
    previous = previous + trip.distance;
    return previous 
}, 0);

console.log(totalDistance);

// number of sitting and standing desks
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous,desk) {
      if(desk.type === "sitting"){ ++previous.sitting;}
    if(desk.type === "standing"){ ++previous.standing;}
    return previous;
  }, { sitting: 0, standing: 0 });
  
  console.log(deskTypes);