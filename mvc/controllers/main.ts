// SHOW AND HIDE HTML ELEMENTS

/* variables and function to display or not the elements */
let isShown: boolean = false;
let presentationImage: any = <HTMLImageElement>document.getElementById("image");
let divSpeed1: any = <HTMLDivElement>document.getElementById("boxSpeed1");
let divSpeed2: any = <HTMLDivElement>document.getElementById("boxSpeed2");
let boxR1: any = <HTMLDivElement>document.getElementById("boxRocket1");
let boxR2: any = <HTMLDivElement>document.getElementById("boxRocket2");
hideThings(divSpeed1, divSpeed2, boxR1, boxR2);

function hideThings(divSpeed1: any, divSpeed2: any, boxR1: any, boxR2: any) {
    if (!isShown) {
        divSpeed1.style.display = "none";
        divSpeed2.style.display = "none";
        boxR1.style.display = "none";
        boxR2.style.display = "none";
    }
}

// BUTTONS TO CREATE THE ROCKETS

/* variables and function to show the rockets when buttons are clicked */
let btnR1: any = <HTMLButtonElement>document.getElementById("buttonR1");
let btnR2: any = <HTMLButtonElement>document.getElementById("buttonR2");

btnR1.addEventListener("click", () => { createRockets(btnR1) });
btnR2.addEventListener("click", () => { createRockets(btnR2) });

function createRockets(btnR: any) {
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
let powerRocket1 = [10, 30, 80];
let rocket1 = new Rocket("32WESSDS", 3, powerRocket1);

/* info button for rocket 1 */
let infoButton1 = <HTMLButtonElement>document.getElementById("info1");
infoButton1.addEventListener("click", () => { printInfo(infoButton1) });

function createRocket1() {
    /* speed buton */
    let speedButton1 = <HTMLButtonElement>document.getElementById("speed1");
    speedButton1.addEventListener("click", () => { divSpeed1.style.display = "" });

    /* accelerate button */
    let accelerateR1 = <HTMLButtonElement>document.getElementById("accelerate1");
    accelerateR1.addEventListener("click", () => { rocket1.accelerateRocket() });

    /* brake button */
    let brakeR1 = <HTMLButtonElement>document.getElementById("brake1");
    brakeR1.addEventListener("click", () => { rocket1.brakeRocket() });
}

// ROCKET 2

/* create the second rocket */
let powerRocket2 = [30, 40, 50, 50, 30, 10];
let rocket2 = new Rocket("LDSFJA32", 6, powerRocket2);

/* info button for rocket 1 */
let infoButton2 = <HTMLButtonElement>document.getElementById("info2");
infoButton2.addEventListener("click", () => { printInfo(infoButton2) });

function createRocket2() {
    /* speed buton */
    let speedButton2 = <HTMLButtonElement>document.getElementById("speed2");
    speedButton2.addEventListener("click", () => { divSpeed2.style.display = "" });

    /* accelerate button */
    let accelerateR2 = <HTMLButtonElement>document.getElementById("accelerate2");
    accelerateR2.addEventListener("click", () => { rocket2.accelerateRocket() });

    /* brake button */
    let brakeR2 = <HTMLButtonElement>document.getElementById("brake2");
    brakeR2.addEventListener("click", () => { rocket2.brakeRocket() });
}

// FUNCTIONS TO PRINT ROCKETS INFO

/* variables and function to print accelerate and brake results of the rockets */
let getPowerText1: any = document.getElementById("powerText1");
let getPowerText2: any = document.getElementById("powerText2");

function printSpeed() {
    if (getPowerText1) {
        getPowerText1.innerText = rocket1.currentPower + ", WOW!";
    }
    if (getPowerText2) {
        getPowerText2.innerText = rocket2.currentPower + ", WOW!";
    }
}

/* variables and function to print information of the rockets */
let getRocketText1: any = document.getElementById("rocketText1");
let getRocketText2: any = document.getElementById("rocketText2");

function printInfo(infoBtn: any) {
    if (infoBtn === infoButton1) {
        getRocketText1.innerText = "Rocket " + rocket1.code + " only has " + rocket1.thrusters + " thrusters. Maximum power: " + rocket1.power + "!";
    }
    if (infoBtn === infoButton2) {
        getRocketText2.innerText = "Rocket " + rocket2.code + " has " + rocket2.thrusters + " thrusters. Maximum power: " + rocket2.power + "!";
    }
}

/* print all elements if the button to show everything is clicked */
let printRockets = <HTMLButtonElement>document.getElementById("showAll");
printRockets.addEventListener("click", () => {
    createRockets(btnR1), createRockets(btnR2), printInfo(infoButton1), printInfo(infoButton2),
        presentationImage.style.display = "none", divSpeed1.style.display = "", divSpeed2.style.display = ""
});