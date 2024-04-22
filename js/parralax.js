/*
Name: Muhammad Ansari
Student#: 251221279
CS2033 Assignment 2
December 8, 2023
*/

function scroll() {
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = -0.25;
    var b = 0;
                
    var newY = m * t + b;
    para.style.backgroundPositionY = newY + "px";
}