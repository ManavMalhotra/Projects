let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.body.style.backgroundColor = "red";


const btn = document.getElementById("btn");
const element = document.querySelector("span");

function randomHex(){

		return Math.floor(Math.random() * color.length);
	
}
btn.addEventListener("click",function(){
	let hex = "#";

	for (let i = 0; i < 6; i++) {
		hex+=color[randomHex()];
	};
	element.textContent = hex;
	document.body.style.backgroundColor = hex;
	btn.style.backgroundColor = hex;
	document.getElementById("main-div").style.backgroundColor = hex;


})


// console.log(hex)

// document.querySelector("span").textContent = "Orange"