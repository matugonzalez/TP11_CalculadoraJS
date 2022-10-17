const firstInput = document.getElementById("frstOp")
const secondInput = document.getElementById("scndOp")
const resultImput = document.getElementById("result")

const sumBtn = document.getElementById("sum")
const subBtn = document.getElementById("sub")
const proBtn = document.getElementById("pro")
const divBtn = document.getElementById("div")

let firstOp 
let secondOp


firstInput.addEventListener("input", function(event){

    firstOp = event.target.value

})

secondInput.addEventListener("input", function(event){

    secondOp = event.target.value

})

sumBtn.addEventListener("click", function(event){

    if (Number.isNaN(Number(firstOp)) || Number.isNaN(Number(secondOp)) ) {

        resultImput.value = "No se ingresaron valores numéricos"
        resultImput.classList.add("result-failed")

    }else{
        resultImput.classList.remove("result-failed")
        resultImput.value = Number(firstOp) + Number(secondOp)
    } 
    

})

subBtn.addEventListener("click", function(event){

    if (Number.isNaN(Number(firstOp)) || Number.isNaN(Number(secondOp)) ) {

        resultImput.value = "No se ingresaron valores numéricos"
        resultImput.classList.add("result-failed")

    }else{
        resultImput.classList.remove("result-failed")
        resultImput.value = Number(firstOp) - Number(secondOp)
    } 


})
proBtn.addEventListener("click", function(event){
    if (Number.isNaN(Number(firstOp)) || Number.isNaN(Number(secondOp)) ) {

        resultImput.value = "No se ingresaron valores numéricos"
        resultImput.classList.add("result-failed")

    }else{
        resultImput.classList.remove("result-failed")
        resultImput.value = Number(firstOp) * Number(secondOp)
    } 


})
divBtn.addEventListener("click", function(event){
    if (Number.isNaN(Number(firstOp)) || Number.isNaN(Number(secondOp)) ) {

        resultImput.value = "No se ingresaron valores numéricos"
        resultImput.classList.add("result-failed")

    }else{
        resultImput.classList.remove("result-failed")
        if (Number(secondOp)===0){

            resultImput.value = "No se puede dividir por 0"
            resultImput.classList.add("result-failed")
            
        }else{
            
            resultImput.value = Number(firstOp) / Number(secondOp)
            resultImput.classList.remove("result-failed")
            
        }
    } 


})
