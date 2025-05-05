var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if ( randomNumber1 > randomNumber2 ) {
    document.querySelector(".container h1").textContent = "1. Játékos nyert";
} else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector(".container h1").textContent = "2. Játékos nyert";
} else {
    document.querySelector(".container h1").textContent = "Döntetlen!";
}