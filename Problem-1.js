/**
 * Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
    Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
 */

class Calculator {
    constructor(a, b, typeOfOperation){
        this.a = a;
        this.b = b;
        this.typeOfOperation = typeOfOperation;
    }

    calculate(){
        switch(this.typeOfOperation.toLowerCase()){
            case "addition":
                return this.a + this.b;
            case "subtraction":
                return this.a - this.b;
            case "multiplication":
                return this.a * this.b;
            case "division":
                if(this.b === 0) return "Error, Cannot divide by Zero";
                return this.a / this.b;
            default:
                return "Invalid Selected Operation. Choose Addition, Subtraction, Multiplication or Division"
        }
    }
}

//Testing
const add = new Calculator(10, 5, "addition");
const sub = new Calculator(50, 30, "subtraction");
const mul = new Calculator(10, 50, "multiplication");
const div = new Calculator(30, 5, "division");
const divZero = new Calculator(10, 0, "division");
const defaultCase = new Calculator(10, 20, "modulo");

console.log("Addition:-", add.calculate());
console.log("Subtraction:-", sub.calculate());
console.log("Multiplication:-", mul.calculate());
console.log("Division:-", div.calculate());
console.log("Division With Zero:-", divZero.calculate());
console.log("Default Case:-", defaultCase.calculate());