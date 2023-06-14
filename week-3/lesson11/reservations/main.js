const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

// const name = prompt('Please enter the name for your reservation');
const check = document.getElementById("check").value;
const button = document.getElementById("button");

button.onclick = function () {
const check = document.getElementById("check").value;

if(reservations[check]?.claimed) {
    console.log("Hmm, someone already claimed this reservation");
} else if (reservations[check]){
    console.log("Welcome, " + check);
} else {
    console.log("You dont have a reservation");
    reservations[check] = { clamed : true };
}
}

console.log(reservations);
console.log(check);