// ROCKET OBJECT
"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocket_code, rocket_thrusters, rocket_power) {
        /* to hide and show html elements */
        this.isShown = false;
        /* info rockets */
        this.code = rocket_code;
        this.thrusters = rocket_thrusters;
        this.power = rocket_power;
        /* initial power starts at 0 */
        this.currentPower = 0;
        /* maximum power is the result of the values of every thruster */
        this.maxPower = this.power.reduce(function (a, b) { return a + b; });
        /* actual speed is stored in an array to match the maximum power of each thruster */
        this.thrustersPower = Array(this.power.length).fill(0); // fill array with 0
    }
    Rocket.prototype.accelerateRocket = function () {
        /* fill the power of the thrusters from 10 to 10 until reaching the limit of each thruster */
        for (var i = 0; i < this.power.length; i++) {
            if (this.thrustersPower[i] < this.power[i] && this.currentPower < this.maxPower) {
                this.currentPower = this.currentPower + 10;
                this.thrustersPower[i] = this.thrustersPower[i] + 10;
            }
            /* call function to print the accelerate value */
            printSpeed();
        }
    };
    Rocket.prototype.brakeRocket = function () {
        /* empty the power of the rocket from 10 to 10 until reaching the initial power at 0 */
        for (var i = 0; i < this.power.length; i++) {
            if (this.thrustersPower[i] > 0 && this.thrustersPower[i] <= this.power[i] && this.currentPower <= this.maxPower) {
                this.currentPower = this.currentPower - 10;
                this.thrustersPower[i] = this.thrustersPower[i] - 10;
            }
            /* call function to print the brake value */
            printSpeed();
        }
    };
    return Rocket;
}());
