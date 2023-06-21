const container = document.getElementById("container");
const boxes = [];

for (let i = 0; i < 3; i++) {
  const box = document.createElement("div");

  box.setAttribute("style", "background-color: black");
  box.classList.add("box");
  container.appendChild(box);
  boxes.push(box);

  box.onclick = function () {
    getRandomColor();
    checkSameColor();
  };
}

const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  for (let i = 0; i < boxes.length; i++) {
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    boxes[i].setAttribute(
      "style",
      `background-color: ${niceColors[randomPosition]}`
    );
  }
};

function checkSameColor() {
  const firstBoxColor = boxes[0].style.backgroundColor;
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i].style.backgroundColor !== firstBoxColor) {
      return;
    }
  }
  displayMessage("Nice job!");
}

function displayMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.innerText = message;
  container.appendChild(messageElement);
}
