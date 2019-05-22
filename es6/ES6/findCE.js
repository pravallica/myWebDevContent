// Find user who has admin access and assign to admin
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin =
  users.find(function(user){
      return user.admin === true;
  });
//   find account with balance 12
  var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account =
  accounts.find(function(account){
      return account.balance === 12;
  });