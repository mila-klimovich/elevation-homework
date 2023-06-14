const list = document.getElementById("list");

const addMoreElements = function () {
    const element = document.createElement("li");
    element.innerHTML = "MORE!";
    list.appendChild(element);
}

const box = document.getElementById("box");
box.onclick = function () {
    box.innerHTML = "clicked";
}
box.onmouseenter = function () {
    box.innerHTML = "mouse enter";
}

const boxSecond = document.createElement("div") // dynamically creating an element
boxSecond.innerHTML = "??";

boxSecond.setAttribute("class", "box")
boxSecond.onclick = function(){       // adding an event to the new element
    boxSecond.innerHTML = "I'm alive!"
}

document.body.appendChild(boxSecond) // now the box will be on the page, and will react to a click!