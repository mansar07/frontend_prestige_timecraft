/*
Name: Muhammad Ansari
Student#: 251221279
CS2033 Assignment 2
December 8, 2023
*/

function checkName() {
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;
    
    if (nameValue.length >= 4 && !/\d/.test(nameValue)) {
        nameInput.style.borderColor = "green";
        nameInput.style.borderWidth = '3px';
    }
    
    else {
        nameInput.style.borderColor = "red";
        nameInput.style.borderWidth = '3px';
    }
}

function checkPhoneNumber() {
    var phonenumberInput = document.getElementById("phonenumber");
    var phonenumberValue = phonenumberInput.value;
    
    var parts = phonenumberValue.split(' ');   
    
    if (parts.length === 3 && parts[0].length === 3 && parts[1].length === 3 && parts[2].length === 4 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
        phonenumberInput.style.borderColor = "green";
        phonenumberInput.style.borderWidth = '3px';
    }
    
    else {
        phonenumberInput.style.borderColor = "red";
        phonenumberInput.style.borderWidth = '3px';
    }
}

function checkProductID() {
    var productInput = document.getElementById("productID");
    var productValue = productInput.value;
    
    var validProduct = ["K2L9A6", "D5N3X1", "Z7M9A8", "P1M3Q8", "F4G9E7", "A1B9D8"];
    
    if (validProduct.includes(productValue)) {
        productInput.style.borderColor = "green";
        productInput.style.borderWidth = '3px';
    }
    
    else {
        productInput.style.borderColor = "red";
        productInput.style.borderWidth = '3px';
    }
}

function checkMessageLength() {
    var messageInput = document.getElementById("message");
    var messageLenght = messageInput.value.length;
    
    if (messageLenght > 10 && messageLenght < 30) {
        messageInput.style.borderColor = "green";
        messageInput.style.borderWidth = '3px';
    }
    
    else {
        messageInput.style.borderColor = "red";
        messageInput.style.borderWidth = '3px';
    }
}

function toggleProductID() {
    var reasonforSelect = document.getElementById("reason");
    var productInput = document.getElementById("productID");
    var productLabel = document.getElementById("productIDLabel");
    
    if (reasonforSelect.value === "productinfo") {
        productInput.style.display = "block";
        productLabel.style.display = "block";
    }
    
    else {
        productInput.style.display = "none";
        productLabel.style.display = "none";
    }
}