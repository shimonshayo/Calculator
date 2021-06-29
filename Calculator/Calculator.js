function view(val){
    document.getElementById('screen').value+=val
}
function clr( ){
    document.getElementById('screen') .value='';
}
function solve (){
    let expression = document.getElementById("screen").value
    let expressionResult = eval(expression)
document.getElementById("screen").value = expressionResult
}