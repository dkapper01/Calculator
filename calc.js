console.log("calculator working...");


var display = document.getElementById('display');

function addToScreen(num) {    
  display.value += num; 
  if(num === 'c') {
    display.value = ''; 
  }
} 

function answer()  {
  x = display.value; 
  x = eval(x); 
  display.value = x; 
}

function power() {
  x = display.value; 
  x = eval(x*x); 
  display.value = x; 
}