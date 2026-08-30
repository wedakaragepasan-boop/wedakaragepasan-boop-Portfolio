/* =========================
   NAVBAR SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){


        e.preventDefault();


        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });


    });


});







/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const sections = document.querySelectorAll("section");



const reveal = () => {


    sections.forEach(section => {


        const position = section.getBoundingClientRect().top;


        const screenPosition =
        window.innerHeight - 120;



        if(position < screenPosition){


            section.classList.add("show");


        }


    });


};



window.addEventListener(
"scroll",
reveal
);



reveal();








/* =========================
   SKILL BAR ANIMATION
========================= */


const skillBars =
document.querySelectorAll(".skill-level");



window.addEventListener("scroll",()=>{


skillBars.forEach(bar=>{


const position =
bar.getBoundingClientRect().top;



if(position < window.innerHeight){


bar.style.animation =
"skillLoad 2s ease forwards";


}



});


});









/* =========================
   HERO TITLE EFFECT
========================= */


const title =
document.querySelector(".hero-content h1");



let text =
title.innerHTML;



title.innerHTML="";



let index=0;



function typingEffect(){


if(index < text.length){


title.innerHTML += text[index];


index++;


setTimeout(
typingEffect,
100
);


}


}



window.onload = typingEffect;








/* =========================
   ACTIVE NAVIGATION
========================= */


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";



document.querySelectorAll("section,header")
.forEach(section=>{


const sectionTop =
section.offsetTop - 100;



if(scrollY >= sectionTop){

current =
section.getAttribute("id");

}


});




navLinks.forEach(link=>{


link.style.color="white";



if(link.getAttribute("href")
==
"#"+current){


link.style.color="#ffcc00";


}



});



});
