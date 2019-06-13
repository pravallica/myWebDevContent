// the traditional way to create a bookshop

function createBookShop(inventory){
    return{
      inventory:inventory,
      inventoryValue: function(){
      return this.inventory.reduce((total,book) => total + book.price,0);
      },
      titlePrice: function(title){
        return this.inventory.find(book => book.title === title).price;
      }
    };
    }
    
    const inventory = [
      { title: 'Harry Potter', price: 10},
      {title: 'Mickey', price: 15},
      {title: 'Basics in ES6', price: 20}
      ];
    
    const bookShop = createBookShop(inventory);
    bookShop.inventoryValue();
    bookShop.titlePrice('Mickey');

    // using enhanced object literals
    function createBookShop(inventory){
        return{
          inventory,
          inventoryValue(){  //removed ":function", yet it still thinks the inventoryValue() to be a function
          return this.inventory.reduce((total,book) => total + book.price,0);
          },
          titlePrice(title){
            return this.inventory.find(book => book.title === title).price;
          }
        };
        }
        
        const inventory = [
          { title: 'Harry Potter', price: 10},
          {title: 'Mickey', price: 15},
          {title: 'Basics in ES6', price: 20}
          ];
        
        const bookShop = createBookShop(inventory);
        bookShop.inventoryValue();
        bookShop.titlePrice('Mickey');