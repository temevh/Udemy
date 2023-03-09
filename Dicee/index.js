var randonNumber1 = Math.floor((Math.random() * 6) + 1);
var randonNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randonNumber1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randonNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randonNumber2 +".png");