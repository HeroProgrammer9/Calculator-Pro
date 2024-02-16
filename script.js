const Display = document.getElementById("display");

// Get Button Value Function
function NumberpadValue(Value) {
  const currentValue = Display.value;
  const newValue = Value;
  Display.value = currentValue + newValue;
}

// delete a digit from last element
function deleteDigit(){
  if(Display.value){
    const Value = Display.value.split("");
    Value.pop();
    Display.value = Value.join("");
  }
}

// Clear the Display function
function clearDisplay() {
  Display.value = "";
}

// Calculator solution function
function solution() {
  // const outPut = eval(Display.value)
  // Display.value = outPut
  if (Display.value) {
    Display.value = eval(Display.value);
  } else {
    alert("please write a expression");
  }
}
