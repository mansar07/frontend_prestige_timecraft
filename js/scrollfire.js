/*
Name: Muhammad Ansari
Student#: 251221279
CS2033 Assignment 2
December 8, 2023
*/

function scrollfire() {
    var t = window.scrollY;        
    var msg = document.getElementById("msg");
                
    if (t > 3000) {
        msg.style.marginLeft = "0px";
    }
}