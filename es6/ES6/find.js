// to find the user alex
var users = [
    {name:'Jill'},
    {name: 'Alex'},
    {name: 'Alice'}
    ];
  

  //classic way
  var user;
  for (var i=0; i<users.length;i++)
  {
    if (users[i].name === 'Alex'){
       user = users[i];
    }
  }
  user;
  //using find helper
  
  users.find(function(user){
      return user.name === 'Alex';
  });