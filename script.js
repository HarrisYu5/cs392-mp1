
function add(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    checkInput(a, b);
    a= Number(a)
    b= Number(b)
    let result = a + b;
    displayResult(result);
}
function subtract(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    checkInput(a, b);
    a= Number(a)
    b= Number(b)
    
    let result = a - b;
    displayResult(result);
}
function times(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    checkInput(a, b);
    a= Number(a)
    b= Number(b)
    let result = a * b;
    displayResult(result);
    
}
function divide(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    checkInput(a, b);
    a= Number(a)
    b= Number(b)
    if (b == 0 ){
        document.getElementById("display").innerHTML="You can't divide by 0";
        return;
    }
    let result = a / b;
    displayResult(result);
}
function power(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    checkInput(a, b);
    a= Number(a)
    b= Number(b)
    if (b == 0) {
        displayResult(1);
        return;
    }
    for (let i = 1; i < b; i++) {
        a *= a;
    }
    displayResult(a);
}

function checkInput(a, b) {
    if (a === "" || b === "") {
        document.getElementById("display").innerHTML="Please input 2 numbers";
    } else if (isNaN(a) || isNaN(b)) {
        document.getElementById("display").innerHTML="Please input numbers only";
    } else if (!Number.isInteger(Number(a)) || !Number.isInteger(Number(b))) {
        document.getElementById("display").innerHTML="Please input integers only";
    }
    else return true;
}
function displayResult(result) {
    document.getElementById("display").innerHTML = result;
}