var randomNum1 = Math.floor(Math.random() * 6) + 1
var randomImg1 = "dice" + randomNum1 + ".png"

var randomImgSrc1 = "images/" + randomImg1

document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc1)

var randomNum2 = Math.floor(Math.random() * 6) + 1
var randomImg2 = "dice" + randomNum2 + ".png"

var randomImgSrc2 = "images/" + randomImg2

document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2)

if (randomNum1>randomNum2) {
	document.querySelector("h1").innerHTML = "PLAYER 1 WON!!!"
}
else if (randomNum1<randomNum2){
	document.querySelector("h1").innerHTML = "PLAYER 2 WON!!!"
}
else{
	document.querySelector("h1").innerHTML = "DRAW"
}
