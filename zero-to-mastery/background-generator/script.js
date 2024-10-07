var _ = require('lodash');


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");



// setting linear gradient function //

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";  

	css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";  

	// text content adds context to the DOM //

	css.textContent = body.style.background + ";";
}

function randmColor() {
	let color = "#";
  for(let i = 0; i < 6; i++){
		color += Math.floor((Math.random() * 16)).toString(16);
  }
	return color;

}


random.addEventListener('click', () => {
	color1.value=randmColor();
	color2.value=randmColor();
});

// calling linear gradient function because DRY //

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);