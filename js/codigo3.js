"use strict"

/*----------CALCULATOR CODE JS-------------*/

const previousDisplay = document.getElementById('previous-value');
const presentDisplay = document.getElementById('present-value');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');

class Calculator {
    add(num1, num2){
        return num1 + num2;
    }

    subtract(num1, num2){
        return num1 - num2;
    }

    multiply(num1, num2){
        return num1 * num2;
    }

    divide(num1, num2){
        if (num2 === 0){
            return "#DIV/0.error"
        } else{
            return num1 / num2;
        }
    }
}

class Display{
    constructor(previousDisplay, presentDisplay){
        this.presentDisplay = presentDisplay;
        this.previousDisplay = previousDisplay;
        this.calculator = new Calculator(".");
        this.operationType = undefined;
        this.presentValue = '';
        this.previousValue = '';
        this.signos = {
            add: '+',
            subtract: '-',
            multiply: '*',
            divide: '/'
        }
    }

    delete(){
        this.presentValue = this.presentValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteall(){
        this.presentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.printValues();
    }

    compute(type){
        this.operationType !== "igual" && this.calculate();
        this.operationType = type;
        this.previousValue = this.presentValue || this.previousValue;
        this.presentValue = '';
        this.printValues();
    }

    addNumber(number){ /*Para agregar valores a la pantalla*/
        if(number === '.' && this.presentValue.includes(".")) return /*Para salir sin agregar numero si hay un punto*/
        this.presentValue = this.presentValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){ /*Imprime los valores en la pantalla*/
        this.presentDisplay.textContent = this.presentValue;
        this.previousDisplay.textContent = `${this.previousValue} ${this.signos[this.operationType] || ''}`;
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue); /*para que deje de ser un string y vuelva a ser un numero*/
        const presentValue = parseFloat(this.presentValue);

        if(isNaN(presentValue) || isNaN(previousValue)) return;
        this.presentValue = this.calculator[this.operationType](previousValue, presentValue);    
    }
}

const display = new Display(previousDisplay, presentDisplay);

numberButton.forEach(button =>{
    button.addEventListener("click", ()=>{
        display.addNumber(button.innerHTML);
    })
})

operatorButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        display.compute(button.value)
    })
})