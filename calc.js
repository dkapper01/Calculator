console.log("calculator working...");

var screen = document.getElementById("display");
var topScreen = document.getElementById("upper_display");
var view = 0;
var num = 0; 


function displayOnScreen(x) {
  num = screen.value += x; 
  
  // var arr = [];
  // clearAll(x);
  // if (isNaN(x) === false){
  //   screen.value += x;
  //   arr.push(screen.value);
  // } else {
  //   console.log('green');
  // }
  // return screen.value = arr;
}

function mathOperator(y) {
  topScreen.value += num + " " + y;
}

function clearAll(x) {
  if(x === 'ec')
    // topScreen.value = '';
    // screen.value = '';
    return;

}
