// Home page redirect
function homepage(){
	window.location.href = "/"
}
// Typing effect

var i = 0;
var txt = "Hi! I'm Tim and I create AWESOME websites.";

var banner = document.getElementsByClassName('banner')[0];
var typeTxt = banner.getElementsByTagName('*');

function typer() {
  if (i < txt.length) {
    typeTxt[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typer, 50);
  }
}
typer();


// function typeWriter(ind, typeList, typeTxt) {
// 	if (i < typeList[ind].length) {
// 		typeTxt[ind].innerHTML += typeList[ind].charAt(i);
// 		i++;
// 		setTimeout(typeWriter(ind,typeList,typeTxt), 50);
// 	}
// }
// typeWriter(0, typeList, typeTxt);
// for (var ind = 0; ind < typeList.length; ind ++){

// 	i = 0;
// }


// Navbar Toggle
function dropdown() {
	var btn = document.getElementById('hamb');
	var links = document.getElementById('linksContainer');
	var mNav = document.getElementById("mainNav");
	// active hamburger
	if (btn.className.indexOf("is-active") < 0){
		btn.className += " is-active";
	}
	else {
		btn.className = "hamburger hamburger--spin"
	}
	// Navbar dropdown
	if (mNav.className.indexOf("dropdown") < 0) {
		mNav.className += " dropdown";
	} else {
		mNav.className = mNav.className.substring(0, mNav.className.length - 9);
	}
	// Navbar links
	if (links.className.indexOf("dropdown") < 0) {
        links.className += " dropdown";
    } else {
        links.className = links.className.substring(0, links.className.length - 9)
    }
}

// Navbar color change
var navBar = document.getElementById('mainNav');
var bodyTag = document.getElementsByClassName('banner')[0];

window.onscroll = function () {
    "use strict";
    if ($(window).scrollTop() >= window.innerHeight * .15 /4) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
    }
    else {
    	navBar.classList.remove("nav-colored");
    	navBar.classList.add("nav-transparent");


    }
};

(function (){
	navBar.classList.add('nav-transparent');
})();

// Navbar transparency fix

function transp() {
	console.log($('nav').height(), window.innerHeight * .15);
	if ($('nav').height() <= window.innerHeight * .15) {
		return true;
	}
	return false;

}
