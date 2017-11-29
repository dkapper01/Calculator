console.log("calculator working...");


var display = document.getElementById('display');

function addDigit(num) {    
  display.value += num; 
  if(num === 'c') {
    display.value = ''; 
  }
} 

function answer()  {

}