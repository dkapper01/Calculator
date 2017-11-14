console.log("calculator working...");

var memory = '0'; 
var current = 0; 
var Operation = 0; 
var MAXLENGTH = 3;

document.getElementById('display').value = 0; 


function addDigit(dig) {       
  if(current === 0) {
    current = dig; 
  } else {
    current += dig; 
  }
  document.getElementById('display').value = current;
}