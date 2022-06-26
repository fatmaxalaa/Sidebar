function dropdown() {
        document.getElementById("sub-menu").classList.toggle("reveal")
}
document.getElementById("arrow").addEventListener("click", dropdown);

function dropdown2() {
        document.getElementById("sub-menu2").classList.toggle("reveal2")
}
document.getElementById("arrow2").addEventListener("click", dropdown2);

function dropdown3() {
        document.getElementById("sub-menu3").classList.toggle("reveal3");
}
document.getElementById("arrow3").addEventListener("click", dropdown3);

function arrowdown() {
        document.getElementById("arrow").classList.toggle("arrowdrop");
}
document.getElementById("arrow").addEventListener("click", arrowdown);

function arrowdown2() {
        document.getElementById("arrow2").classList.toggle("arrowdrop2");
}
document.getElementById("arrow2").addEventListener("click", arrowdown2);

function arrowdown3() {
        document.getElementById("arrow3").classList.toggle("arrowdrop3");
}
document.getElementById("arrow3").addEventListener("click", arrowdown3);

// function menu_close() {
//         document.getElementById("sidebar").classList.toggle("close");
// }
// document.getElementById("menu").addEventListener("click", menu_close);

function menu_close2() {
        document.getElementById("home").classList.toggle("close2");
}
document.getElementById("menu").addEventListener("click", menu_close2);

function menu_close3() {
        document.getElementById("img").classList.toggle("close3");
}
document.getElementById("menu").addEventListener("click", menu_close3);

// let arrow = document.querySelectorAll(".arrow");
// let sub = document.querySelectorAll(".sub-menu");
// function dropdown() {
//         document.getElementById("sub-menu").classList.toggle("reveal");
//         document.getElementById("sub-menu2").classList.toggle("reveal2");

// }
// for (i = 0; i < arrow.length; i++){
//         arrow[i].addEventListener("click", dropdown);
        
// }