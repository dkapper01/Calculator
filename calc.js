console.log("calculator working...");

var memory = '0'; 
var current = '0'; 
var Operation = 0; 
var MAXLENGTH = 5;

document.getElementById('display').value = 0; 


function addDigit(dig) {    
<<<<<<< HEAD
  if( eval(current) === 0) {
    current = dig; 
  } else {
    current += dig; 
=======
  if(current.length < MAXLENGTH) {
    if( eval(current) === 0) {
      current = dig; 
    } else {
      current += dig; 
    }
    document.getElementById('display').value = current;
>>>>>>> parent of 9059435... Got rid of input field
  }
  document.getElementById('display').value = current;
} 
  

  