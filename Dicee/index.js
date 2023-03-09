var randonNumber1 = Math.floor((Math.random() * 6) + 1);
var randonNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randonNumber1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randonNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randonNumber2 +".png");

if (randonNumber1 > randonNumber2){
    document.querySelector("h1").textContent = "Player 1 Won!"
} else if (randonNumber1 < randonNumber2){
    document.querySelector("h1").textContent = "Player 2 Won!"
} else if (randonNumber1 === randonNumber2){
    document.querySelector("h1").textContent = "Draw!"
}