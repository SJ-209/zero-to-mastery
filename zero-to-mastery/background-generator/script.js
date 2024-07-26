var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// setting linear gradient function //

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

// calling linear gradient function because DRY //

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);