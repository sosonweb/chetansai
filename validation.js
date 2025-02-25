function validation(){


// Get form elements
const nameInput = document.getElementById("username");
const addressInput = document.getElementById("address");
const emailInput = document.getElementById("email");
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const radioInputs = document.querySelectorAll('input[type="radio"]');

// Get form element values
const nameValue = nameInput.value.trim();
const addressValue = addressInput.value.trim();
const emailValue = emailInput.value.trim();
const checkboxValues = Array.from(checkboxInputs).filter(input => input.checked).map(input => input.value);
const radioValue = Array.from(radioInputs).find(input => input.checked)?.value;

// Validate form
const errors = [];
if (!/^[a-zA-Z ]+$/.test(nameValue)) {
  errors.push("Name should contain only alphabets.");
}
if (!/^[a-zA-Z0-9\s,'-]*$/.test(addressValue)) {
  errors.push("Address should contain only appropriate alphanumeric characters.");
}
if (checkboxValues.length < 2) {
  errors.push("At least two checkboxes should be checked.");
}
if (!radioValue) {
  errors.push("Please select a radio button option.");
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
  errors.push("Email address format is invalid.");
}

// Display error message if there are errors
if (errors.length > 0) {
  alert(errors.join("\n"));
  if (!/^[a-zA-Z ]+$/.test(nameValue)) {
    nameInput.value = "";
  }
  if (!/^[a-zA-Z0-9\s,'-]*$/.test(addressValue)) {
    addressInput.value = "";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailInput.value = "";
  }
  return false;
}
}
function reset()
{
// Clear form upon clicking the reset button
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  nameInput.value = "";
  addressInput.value = "";
  emailInput.value = "";
  checkboxInputs.forEach(input => input.checked = false);
  radioInputs.forEach(input => input.checked = false);
}
);
}
