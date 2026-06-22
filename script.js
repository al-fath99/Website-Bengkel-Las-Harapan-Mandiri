/* ========================= */
/* FILE 3 : script.js */
/* ========================= */

/* LOADER */
window.onload=function(){
document.getElementById("loader").style.display="none";
}

/* MENU */
function toggleMenu(){
document.getElementById("menu")
.classList.toggle("active");
}

/* WA MODAL */
function openModal(){
document.getElementById("waModal")
.style.display="block";
}

window.onclick=function(e){

const modal=document.getElementById("waModal");

if(e.target==modal){
modal.style.display="none";
}

}

function closeModal(){

document.getElementById("waModal")
.style.display="none";

}

/* POPUP IMG */
function openImg(src){

document.getElementById("imgPopup")
.style.display="flex";

document.getElementById("popupImg")
.src=src;

}

function closeImg(){

document.getElementById("imgPopup")
.style.display="none";

}

/* FILTER */
function filterKategori(kategori){

const items=document.querySelectorAll(".gallery img");

items.forEach(img=>{

if(kategori=="all"){

img.style.display="inline-block";

}else{

if(img.classList.contains(kategori)){

img.style.display="inline-block";

}else{

img.style.display="none";

}

}

});

}

/* TESTI */
const testi=document.querySelectorAll(".testi");

if(testi.length > 0){

let index=0;

setInterval(()=>{

testi[index].classList.remove("active");

index=(index+1)%testi.length;

testi[index].classList.add("active");

},3000);

}

/* SCROLL ANIM */
const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

fades.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){

el.classList.add("show");

}

});

});

/* TOP */
function scrollTopPage(){

window.scrollTo({
top:0,
behavior:'smooth'
});

}

const topBtn = document.querySelector(".top-btn");

function showFade(){

fades.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("show");
}

});

}

window.addEventListener("scroll", showFade);

showFade();