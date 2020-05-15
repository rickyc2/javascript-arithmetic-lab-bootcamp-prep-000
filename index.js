var a = 30
var b = 5
var n = parseInt('40',10)
function add(a,b) {
return (parseInt(a) + parseInt(b));
}
function subtract(a,b) {
return (parseInt(a) - parseInt(b));
}
function multiply(a,b){
return (parseInt(a) * parseInt(b));  
}

function divide(a,b){
return (parseInt(a) / parseInt(b));   
}

function  increment(n) {
   return(n += 1)
}

function  decrement(n) {
  return(n -= 1)
}

function  makeInt(n) {
  return(n)
}

function  preserveDecimal(n) {
  parseFloat(n)
  parseFloat('2.222', 10)
  parseFloat('nonsense!', 10)
}
