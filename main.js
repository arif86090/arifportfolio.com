// ######### scrooltop#############



var mybutton =document.getElementById("mybtn");
window.onscroll=function() {scrollfunction()};
function scrollfunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){ mybutton.style.display ="block";}
else{mybutton.style.display ="none";}}
function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;}





// ########## nevbar#########
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>300) {
	$('.navbar').addClass('active');
		}else {
			$('.navbar').removeClass('active');
		}
	})
	})


// #############typed js


var typed = new Typed('.element', {
  strings: ['webdesigner', 'Devloper','freelancer'],
  smartBackspace: true,// Default value
   startDelay:160,
     backSpeed: 160,
     loop:true,
     
     typeSpeed: 110,
});

// ##########preloder############

 var preloader=document.querySelector('.loading');

 function myfun1(){

preloader.style.display="none";

 }

 
 AOS.init({
  		duration:1000
  });