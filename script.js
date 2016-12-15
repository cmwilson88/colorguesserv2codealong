var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i =0; i< squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to suares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"

		}
	});
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	//pick a random number
	var random = Math.floor(Math.random()*colors.length);
	//Asssign random index to colors 
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr
}

function randomColor() {
	//pick a red from 0 to 255
	var r =Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var g =Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var b =Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}