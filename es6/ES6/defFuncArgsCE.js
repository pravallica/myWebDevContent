//Refcator using default function arguments 
function sum(a, b) {
    if (a === undefined) {
      a = 0; 
    }
    
    if (b === undefined) {
      b = 0; 
    }
    
    return a + b;
  }



function sum(a=0, b=0) {
  
  
    return a + b;
  }

  //2nd CE
  function addOffset(style) {
    if (!style) {
      style = {}; 
    }
    
    style.offset = '10px';
    
    return style;
  }

  function addOffset(style = {}) {

    style.offset = '10px';
    
    return style;
  }