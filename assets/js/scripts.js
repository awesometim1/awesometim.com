// Typing effect

var i = 0;
var txt = "Hi! I'm Tim, A Full Stack Web Developer";
var speed = 50; /* The speed/duration of the effect in milliseconds */
document.getElementById("type").innerHTML = "";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Navbar Toggle
function dropdown() {
	var btn = document.getElementById('hamb');
	if (btn.className.indexOf("is-active") < 0){
		btn.className += " is-active";
	}
	else {
		btn.className = "hamburger hamburger--spin"
	}
    var x = document.getElementById("mainNav");
    if (x.className === "navbar") {
        x.className += " dropdown";
    } else {
        x.className = "navbar";
    }
}