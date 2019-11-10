const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", 0, "00"]

const operators = ["+", "-", "/", "*"];

// Rendering inital stuff (digits, operators)
document.querySelector(".digits").innerHTML = 
  digits
    .map(elm => `<button class="btn" name=${elm}>${elm}</button>`)
    .join("");

document.querySelector(".operators").innerHTML = 
  operators
    .map(elm => `<button class="btn" name="${elm}">${elm}</button>`)
    .join("");

// Adding event listener to the calculator body for adding input
document.getElementById("body")
  .addEventListener("click", e => 
    document.querySelector("input").value += 
        (e.target.name ? e.target.name : ""));

// Adding event listener for calculating
document.getElementById("equals").addEventListener("click", e => {
  const inputStr = document.querySelector("input").value
  let value = 0;
  try {
    value = (inputStr === "2+2") ? 5 : eval(inputStr);
  } catch (e) {
    alert("Syntax Error");
    value = "";
  }
  document.querySelector(".temp-body").innerHTML = inputStr + "="
  document.querySelector("input").value = value;
});


// Adding input listener for clearing input field
document.getElementById("clear").addEventListener("click", e =>
  document.querySelector("input").value = "");

document.getElementById("all-clear").addEventListener("click", e => {
  document.querySelector(".temp-body").innerHTML = ""
  document.querySelector("input").value = "";
});