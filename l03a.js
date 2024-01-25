function counter() {  
  var n = 0;  //calling context
  return function() {  
    n++;     
    return n;  
  }
}

function addByX(x) {
  var n = 0;
  return function() {
    n = n+x;
    return n;
  }
}
