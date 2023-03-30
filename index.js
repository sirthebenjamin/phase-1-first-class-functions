// Receives a function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  
  // Returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    }
  }

  function callbackFunction() {
    console.log("Callback function called");
  }
  
  // Call receivesAFunction with callbackFunction as the argument
  receivesAFunction(callbackFunction);
  
  // Call returnsANamedFunction to get a named function, then call it
  var namedFunction = returnsANamedFunction();
  namedFunction();
  
  // Call returnsAnAnonymousFunction to get an anonymous function, then call it
  var anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction();