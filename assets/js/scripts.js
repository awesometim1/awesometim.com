// Home page redirect
function homepage(){
	window.location.href = "/"
}


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
		let ddind = mNav.className.indexOf(" dropdown");
		mNav.className = mNav.className.substring(0, ddind) + mNav.className.substring(ddind+9, mNav.className.length);
	}
	// Navbar links
	if (links.className.indexOf(" dropdown") < 0) {
        links.className += " dropdown";
    } else {
    	let ddind = links.className.indexOf(" dropdown");
        links.className = links.className.substring(0, ddind) + links.className.substring(ddind+9, links.className.length);
    }
}

// Navbar color change and scroll animation designator
var navBar = document.getElementById('mainNav');
var bodyTag = document.getElementsByClassName('banner')[0];
var aClick = true;
var navbarHeight = window.innerHeight * .15;

window.onscroll = function () {
	"use strict";
	var wind = $(window)
	if ($(window).scrollTop() >= window.innerHeight * .15 /4) {
		navBar.classList.add("nav-colored");
		navBar.classList.remove("nav-transparent");
	}
	else {
		navBar.classList.remove("nav-colored");
		navBar.classList.add("nav-transparent");
	}
    // // banner link, about link, projects link
    // let banner = $('#banner-link');
    // let about = $('#about-link');
    // let projects = $('#projects-link');
    if (aClick){
    	if ($(window).scrollTop() >= $('#banner-link').offset().top - navbarHeight && $(window).scrollTop() <= $('#about-link').offset().top - navbarHeight) {
    		$('.active').toggleClass('active');
    		$('#banner-a').toggleClass('active');
    	}
    	else if ($(window).scrollTop() >= $('#about-link').offset().top - navbarHeight && $(window).scrollTop() <= $('#projects-link').offset().top - navbarHeight){
    		$('.active').toggleClass('active');
    		$('#about-a').toggleClass('active');
    	}
    	else if ($(window).scrollTop() >= $('#projects-link').offset().top - navbarHeight && $(window).scrollTop() <= $('#contact-link').offset().top - navbarHeight) {
    		$('.active').toggleClass('active');
    		$('#projects-a').toggleClass('active');
    	}
    	else if ($(window).scrollTop() >= $('#contact-link').offset().top - navbarHeight) {
    		$('.active').toggleClass('active');
    		$('#contact-a').toggleClass('active');
    	}
    }

};

// Navbar Scroll animation
$('a').click(function(){
	aClick = false;
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navbarHeight
    }, 500, function() {
    	aClick = true;
    });
    $('.active').toggleClass('active');
    $(this).toggleClass('active');

});
