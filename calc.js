const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let  calculation = []
let accumulationCalculation

function calculate(button){
    const value = button.textContent
    if (value == "CLEAR"){
      calculation = []
      screenDisplay.textContent = '.'
    }else if (value == "="){
      screenDisplay.textContent = eval(accumulationCalculation)
    }else{
      calculation.push(value)
      accumulationCalculation = calculation.join('')
      screenDisplay.textContent = accumulationCalculation
      console.log(calculation)
    }


    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))