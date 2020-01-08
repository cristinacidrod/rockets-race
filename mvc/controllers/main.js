"use strict";
// SHOW AND HIDE HTML ELEMENTS
/* variables and function to display or not the elements */
var isShown = false;
var presentationImage = document.getElementById("image");
var divSpeed1 = document.getElementById("boxSpeed1");
var divSpeed2 = document.getElementById("boxSpeed2");
var boxR1 = document.getElementById("boxRocket1");
var boxR2 = document.getElementById("boxRocket2");
hideThings(divSpeed1, divSpeed2, boxR1, boxR2);
function hideThings(divSpeed1, divSpeed2, boxR1, boxR2) {
    if (!isShown) {
        divSpeed1.style.display = "none";
        divSpeed2.style.display = "none";
        boxR1.style.display = "none";
        boxR2.style.display = "none";
    }
}
// BUTTONS TO CREATE THE ROCKETS
/* variables and function to show the rockets when buttons are clicked */
var btnR1 = document.getElementById("buttonR1");
var btnR2 = document.getElementById("buttonR2");
btnR1.addEventListener("click", function () { createRockets(btnR1); });
btnR2.addEventListener("click", function () { createRockets(btnR2); });
function createRockets(btnR) {
    if (btnR === btnR1) {
        presentationImage.style.display = "none";
        btnR1.style.display = "none";
        boxR1.style.display = "";
        createRocket1();
    }
    if (btnR === btnR2) {
        presentationImage.style.display = "none";
        btnR2.style.display = "none";
        boxR2.style.display = "";
        createRocket2();
    }
}
// ROCKET 1
/* create the first rocket and print info */
var powerRocket1 = [10, 30, 80];
var rocket1 = new Rocket("32WESSDS", 3, powerRocket1);
/* info button for rocket 1 */
var infoButton1 = document.getElementById("info1");
infoButton1.addEventListener("click", function () { printInfo(infoButton1); });
function createRocket1() {
    /* speed buton */
    var speedButton1 = document.getElementById("speed1");
    speedButton1.addEventListener("click", function () { divSpeed1.style.display = ""; });
    /* accelerate button */
    var accelerateR1 = document.getElementById("accelerate1");
    accelerateR1.addEventListener("click", function () { rocket1.accelerateRocket(); });
    /* brake button */
    var brakeR1 = document.getElementById("brake1");
    brakeR1.addEventListener("click", function () { rocket1.brakeRocket(); });
}
// ROCKET 2
/* create the second rocket */
var powerRocket2 = [30, 40, 50, 50, 30, 10];
var rocket2 = new Rocket("LDSFJA32", 6, powerRocket2);
/* info button for rocket 1 */
var infoButton2 = document.getElementById("info2");
infoButton2.addEventListener("click", function () { printInfo(infoButton2); });
function createRocket2() {
    /* speed buton */
    var speedButton2 = document.getElementById("speed2");
    speedButton2.addEventListener("click", function () { divSpeed2.style.display = ""; });
    /* accelerate button */
    var accelerateR2 = document.getElementById("accelerate2");
    accelerateR2.addEventListener("click", function () { rocket2.accelerateRocket(); });
    /* brake button */
    var brakeR2 = document.getElementById("brake2");
    brakeR2.addEventListener("click", function () { rocket2.brakeRocket(); });
}
// FUNCTIONS TO PRINT ROCKETS INFO
/* variables and function to print accelerate and brake results of the rockets */
var getPowerText1 = document.getElementById("powerText1");
var getPowerText2 = document.getElementById("powerText2");
function printSpeed() {
    if (getPowerText1) {
        getPowerText1.innerText = rocket1.currentPower + ", WOW!";
    }
    if (getPowerText2) {
        getPowerText2.innerText = rocket2.currentPower + ", WOW!";
    }
}
/* variables and function to print information of the rockets */
var getRocketText1 = document.getElementById("rocketText1");
var getRocketText2 = document.getElementById("rocketText2");
function printInfo(infoBtn) {
    if (infoBtn === infoButton1) {
        getRocketText1.innerText = "Rocket " + rocket1.code + " only has " + rocket1.thrusters + " thrusters. Maximum power: " + rocket1.power + "!";
    }
    if (infoBtn === infoButton2) {
        getRocketText2.innerText = "Rocket " + rocket2.code + " has " + rocket2.thrusters + " thrusters. Maximum power: " + rocket2.power + "!";
    }
}
/* print all elements if the button to show everything is clicked */
var printRockets = document.getElementById("showAll");
printRockets.addEventListener("click", function () {
    createRockets(btnR1), createRockets(btnR2), printInfo(infoButton1), printInfo(infoButton2),
        presentationImage.style.display = "none", divSpeed1.style.display = "", divSpeed2.style.display = "";
});
