
class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText=previousOperandText
        this.currentOperandText=currentOperandText
        this.operation=''
    }

    insertNumber(number){
        console.log('hi')
        if(number==='.' && this.currentOperandText.innerText==='')
            return
        
        else if(this.currentOperandText.innerText.includes('.') && number.includes('.'))
            return 

        else{

    
            this.currentOperandText.innerText+=number
           

        }
    }
    chooseOperation(operation){
        this.operation=operation
        let lastIndex=this.currentOperandText.innerText.length-1
        
        if(this.currentOperandText.innerText.charAt(lastIndex)==='.') return
        if(this.currentOperandText.innerText==='') return
        if(operation==='+')
            this.operation='+'
        else if(operation==='x')
            this.operation='x'
        else if(operation==='÷')
            this.operation='/'
        else if(operation==='-')
            this.operation='-'
     
        this.previousOperandText.innerText=this.currentOperandText.innerText
        this.currentOperandText.innerText=''
        this.previousOperandText.innerText+=operation
    }
    clearAll(){
        this.currentOperandText.innerText=''
        this.previousOperandText.innerText=''
        this.operation=''
    }
    delete(){
        if(this.currentOperandText!=='')
            this.currentOperandText.innerText= this.currentOperandText.innerText.toString().slice(0, -1)

    }
    calculate(){

        let currentOperand=parseFloat(this.currentOperandText.innerText)
        let previousOperand=parseFloat(this.previousOperandText.innerText.slice(0, -1))
        
        if(this.operation==='+'){
            currentOperand+=previousOperand
            this.currentOperandText.innerText=currentOperand.toString()
        }
        else if(this.operation==='x'){
            currentOperand*=previousOperand
            this.currentOperandText.innerText=currentOperand.toString()
        }
        else if(this.operation==='-'){
            previousOperand-=currentOperand
            this.currentOperandText.innerText=previousOperand.toString()
        }
        else if(this.operation==='/'){
            previousOperand/=currentOperand
            this.currentOperandText.innerText=previousOperand.toString()
        }

        this.previousOperandText.innerText=''
        this.operation=''
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const newCalculator=new Calculator(previousOperandTextElement, currentOperandTextElement)

for(let i of numberButtons){
   
    i.addEventListener('click', () => {
        
        newCalculator.insertNumber(i.innerText)
    })
}

for(let i of operationButtons){

    i.addEventListener('click', ()=>{
        if(newCalculator.operation!==''){
            calculate()
        } 
        else newCalculator.chooseOperation(i.innerHTML)
    })
}

allClearButton.addEventListener('click', ()=>{
    newCalculator.clearAll()

})

deleteButton.addEventListener('click', ()=>{
    newCalculator.delete()

})
equalsButton.addEventListener('click', ()=>{
    newCalculator.calculate()

})