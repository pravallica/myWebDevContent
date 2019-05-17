var products= [
    {name:'Cucumber', type:'Vegetable',quantity:0, price:1},
    {name:'Banana', type:'Fruit',quantity:10, price:3},
    {name:'Carrot', type:'Vegetable',quantity:30, price:13},
    {name:'Onion', type:'Vegetable',quantity:3, price:5},
    {name:'Apple', type:'Fruit',quantity:12, price:50},
    {name:'Tomato', type:'Vegetable',quantity:25, price:10},
         ];

  //Classic way to show only fruits
  
  var filter = [];
  for (var i=0; i<products.length;i++){
  if(products[i].type === 'Fruit'){
    filter.push(products[i]);
  }
  }
  console.log(filter);

  //Using filter helper
  products.filter(function(product){
    return product.type === 'Fruit';
  });

  //To filter values which are vegetable,have quantity greater than 0 and price less than 10
  products.filter(function(product){
    return product.type === 'Vegetable' && product.quantity > 0 && product.price < 10;
  });