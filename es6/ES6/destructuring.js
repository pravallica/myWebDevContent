 var expense = {
     type: 'Business',
     amount: '$45'
 };

 var type = expense.type;
 var amount = expense.amount;

//  using destructuring
var expense = {
    type: 'Business',
    amount: '$45'
};

const{ type } = expense;
const{ amount } = expense; //its like amount = expense.amount;

//more convinient and advised way

var expense = {
    type: 'Business',
    amount: '$45'
};

const{ type, amount } = expense;//the names should match the property type above
console.log(type);
console.log(amount);

 