// to check if every user has submitted the form

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted= users.every(function(user){
      return user.hasSubmitted === true;
  });

  //assign true if any of the requests are in pending state
  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress= requests.some(function(request){
      return request.status === "pending";
  });
  inProgress;