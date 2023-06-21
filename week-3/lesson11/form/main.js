const button = document.getElementById("button");
const nameInput = document.getElementById("name");
const container = document.getElementById("container");
const birthdayInput = document.getElementById("birthday");
const phoneInput = document.getElementById("phone");
const salaryInput = document.getElementById("salary");
const welcomeDiv = document.getElementById("welcome");

button.onclick = function () {
  validation();
};

function validation() {
  if (nameInput.value.length > 2) {
    console.log("good");
  } else {
    displayError("Name must be longer than 2 characters");
    return;
  }
  if (
    (parseInt(salaryInput.value) > 10000) &
    (parseInt(salary.value) < 16000)
  ) {
    console.log("good");
  } else {
    displayError("Salary must be greater than 10,000 but less than 16,000");
    return;
  }
  if (birthdayInput.value !== null) {
    console.log(birthdayInput.value);
  } else {
    displayError("Birthday may not be null");
    return;
  }
  if (phoneInput.value.length == 10) {
    console.log("good");
  } else {
    displayError("Phone must be 10 digits long");
    return;
  }

  container.style.display = "none";
  welcomeDiv.innerText = "Welcome, " + nameInput.value + "!";
  welcomeDiv.style.display = "block";
}

function displayError(message) {
  const error = document.createElement("div");
  error.setAttribute("style", "color: red;");
  error.innerText = message;
  container.appendChild(error);
}
