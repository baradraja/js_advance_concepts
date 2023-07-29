// EvalError
/*

The EvalError object indicates an error 
regarding the global eval() function.
This exception is not thrown by JavaScript 
anymore, however the EvalError object 
remains for compatibility.

*/
try {
    throw new EvalError("Hello");
  } catch (e) {
    console.log(e instanceof EvalError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "EvalError"
    console.log(e.stack); // Stack of the error
  }

// InternalError
/*

The InternalError object indicates an 
error that occurred internally in the
 JavaScript engine.

*/
function loop(x) {
    if (x >= 1000000000000) return;
  
    // do stuff
    loop(x + 1);
  }
  loop(0);
  
  // InternalError: too much recursion


// RangeError
/*
A number is "out of range"
*/
function check(n) {
    if (!(n >= -500 && n <= 500)) {
      throw new RangeError("The argument 
      must be between -500 and 500.");
    }
  }

// ReferenceError

/*
The ReferenceError object represents 
an error when a variable that doesn't
 exist (or hasn't yet been initialized) 
 in the current scope is referenced.
*/

try {
    throw new ReferenceError("Hello");
  } catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "ReferenceError"
    console.log(e.stack); // Stack of the error
  }

// SyntaxError

/*
The SyntaxError object represents an error when
 trying to interpret syntactically invalid code.
*/
try {
    throw new SyntaxError("Hello");
  } catch (e) {
    console.log(e instanceof SyntaxError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "SyntaxError"
    console.log(e.stack); // Stack of the error
  }

// TypeError

/*
The TypeError object represents an error when 
an operation could not be performed, typically
 (but not exclusively) when a value is not of
  the expected type.
*/
try {
    null.f();
  } catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message); // "null has no properties"
    console.log(e.name); // "TypeError"
    console.log(e.stack); // Stack of the error
  }
  try {
    throw new TypeError("Hello");
  } catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "TypeError"
    console.log(e.stack); // Stack of the error
  }
// URIError

/*
The URIError object represents an error
 when a global URI handling function was
  used in a wrong way.
*/
try {
    decodeURIComponent("%");
  } catch (e) {
    console.log(e instanceof URIError); // true
    console.log(e.message); // "malformed URI sequence"
    console.log(e.name); // "URIError"
    console.log(e.stack); // Stack of the error
  }
  
  try {
    throw new URIError("Hello");
  } catch (e) {
    console.log(e instanceof URIError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "URIError"
    console.log(e.stack); // Stack of the error
  }