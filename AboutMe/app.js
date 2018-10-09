 "use strict";
var slideIndex = 1;
showSlides(slideIndex);
addEventListener("keyup",Rect);


function Rect(e){
	if (e.keyCode == 37){
		plusSlide(-1);
	}else if(e.keyCode == 39){
		plusSlide(1);

	}
}

function plusSlide(n){
			showSlides(slideIndex += n);
		}

function currentSlide(n){
	 showSlides(slideIndex = n);
}
   
 function showSlides(n){
 	var i;
 	var slides= document.getElementsByClassName("slide");
 	var dots = document.getElementsByClassName("dots");
 	
 	if(n >slides.length){
 		slideIndex = 1;

 	}
 	if (n < 1){
 		slideIndex= slides.length;
 		
 	}
 	for(i = 0; i <slides.length;i++){
 		slides[i].style.display= "none";
 	}
 	for(i=0; i< dots.length; i++){
 		dots[i].className = dots[i].className.replace(" active" , "");
 	}
 	slides[slideIndex-1].style.display = "block";
 	dots[slideIndex-1].className += " active";
 }
 
