const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    
    // Ignore equals and clear buttons here
    if (!value) return;

    currentInput += value;
    display.value = currentInput;
  });
});

// Clear display
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Calculate result
equalsBtn.addEventListener("click", () => {
  try {
    // Replace multiplication and division symbols for eval
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});
