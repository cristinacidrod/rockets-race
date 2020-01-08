// ROCKET OBJECT

"use strict";
class Rocket {
    /* rocket data */
    code: string;
    thrusters: number;
    power: number[];
    currentPower: number;
    maxPower: number;
    thrustersPower: number[];
    /* to hide and show html elements */
    isShown: boolean = false;

    constructor(rocket_code: string, rocket_thrusters: number, rocket_power: number[]) {
        /* info rockets */
        this.code = rocket_code;
        this.thrusters = rocket_thrusters;
        this.power = rocket_power;
        /* initial power starts at 0 */
        this.currentPower = 0;
        /* maximum power is the result of the values of every thruster */
        this.maxPower = this.power.reduce(function (a, b) { return a + b });
        /* actual speed is stored in an array to match the maximum power of each thruster */
        this.thrustersPower = Array<number>(this.power.length).fill(0); // fill array with 0
    }

    accelerateRocket() {
        /* fill the power of the thrusters from 10 to 10 until reaching the limit of each thruster */
        for (let i = 0; i < this.power.length; i++) {
            if (this.thrustersPower[i] < this.power[i] && this.currentPower < this.maxPower) {
                this.currentPower = this.currentPower + 10;
                this.thrustersPower[i] = this.thrustersPower[i] + 10;
            }
            /* call function to print the accelerate value */
            printSpeed();
        }
    }

    brakeRocket() {
        /* empty the power of the rocket from 10 to 10 until reaching the initial power at 0 */
        for (let i = 0; i < this.power.length; i++) {
            if (this.thrustersPower[i] > 0 && this.thrustersPower[i] <= this.power[i] && this.currentPower <= this.maxPower) {
                this.currentPower = this.currentPower - 10;
                this.thrustersPower[i] = this.thrustersPower[i] - 10;
            }
            /* call function to print the brake value */
            printSpeed();
        }
    }
}