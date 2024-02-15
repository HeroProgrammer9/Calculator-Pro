const Display = document.getElementById("display");

// Get Button Value Function
function NumberpadValue(Value) {
  const currentValue = Display.value;
  const newValue = Value;
  Display.value = currentValue + newValue;
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
