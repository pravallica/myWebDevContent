function validateShoppingList(...items){ //rest
    if (items.indexOf('milk')< 0){
      return ['milk',...items];//spread
    }
    return [...items];
  }
  
  validateShoppingList('oranges','bread');