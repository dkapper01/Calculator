console.log("calculator working...");



function displayOnScreen(x) {
  var box = document.getElementById("display");
  var arr = [];
  if(x === 'c') {
    console.log("=c");
  } else {
    box.value += x;
    arr.push(box.value);
  }
  box.value = arr;  
}
// display_on_screen();
