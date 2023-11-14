//getting elements
let result = document.getElementById('result');
let del = document.getElementById('del');
let power = document.getElementById('^');
let x = document.getElementById('x');
let y = document.getElementById('/');
let plus = document.getElementById('+');
let minus = document.getElementById('-');
let equal = document.getElementById('=');
let Root = document.getElementById('^/');
// let n1 = document.getElementById('1');
// let n2 = document.getElementById('2');
// let n3 = document.getElementById('3');
// let n4 = document.getElementById('4');
// let n5 = document.getElementById('5');
// let n6 = document.getElementById('6');
// let n7 = document.getElementById('7');
// let n8 = document.getElementById('8');
// let n9 = document.getElementById('9');
let number = [];
let measureType = '';
let index = 0;
let numValue = '';
let resultNumber = 0;
let resultNumberX = 1;
let measuring = true;
let index1 = false;
//show elements
function showValue(value){
    if(measureType == 'equal'){
        Clear()
        measureType = '';
        measuring = false;
    }
    else if(measuring == true){
        delElements()
        measuring = false;
    }
    result.innerHTML += `${value}`;
    numValue = value;
    colorReset();
}


//delete elements 
function delElements(){
    result.innerHTML=''; 
}

function Clear(){
    number = [];
    resultNumber = 0;
    index = 0;
    delElements();
    numValue = '';
    measuring = true;
}

//math
function countTypeIn(id){
    if(id == '+'){measureType = 'plus'}
    else if(id == '-'){measureType = 'minus'}
    else if(id == 'x'){measureType = 'multiply'}
    else if(id == '/'){measureType = 'division'}
    else if(id == '^'){measureType = 'power'}
    else if(id == '^/'){measureType = 'root'}
    else if(id == '='){measureType = 'equal'}
    }

function countType(id){

    if(index == 0){
        countTypeIn(id)
    }

}


function count(id){
    if(measuring != true){
    number.push(numValue);
    colorReset();
    if(measureType == 'plus'){
        resultNumber = eval(resultNumber + parseFloat(number[index]))
    }
    else if(measureType == 'minus'){
        if(index == 0){
            resultNumber = parseFloat(number[index])
        }else{
            resultNumber = eval(resultNumber - parseFloat(number[index]))
        }
    }
    else if(measureType == 'multiply'){
        if(index == 0){
            resultNumber =1;
        }
        resultNumber = eval(resultNumber * parseFloat(number[index]) )
    }
    else if(measureType == 'division'){
        if(index == 0){
            resultNumber = parseFloat(number[index])
        }
        else{
            resultNumber = eval(resultNumber / parseFloat(number[index]) )
        }
    }
    else if(measureType == 'power'){
        if(index == 0){
            resultNumber = parseFloat(number[index])
        }
        else{
            resultNumber = eval(resultNumber ** parseFloat(number[index]) )
        }
    }
    else if(measureType == 'root' || id == '^/'){
            resultNumber = Math.sqrt(parseFloat(number[index]) )    
    }
    
    countTypeIn(id);  
    color();
    measuring = true;
    color();
    result.innerHTML = resultNumber;  
    index++;
    countTypeIn(id);
}
    
    
}

function color(){
    if (measureType == 'plus'){
        plus.classList.add('using');
    }
    else if(measureType == 'minus'){
        minus.classList.add('using');
    }
    else if(measureType == 'multiply'){
        x.classList.add('using');
    }
    else if(measureType == 'division'){
        y.classList.add('using');
    }
    else if(measureType == 'power'){
        power.classList.add('using');
    }
}

function colorReset(){
    plus.classList.remove('using');
    minus.classList.remove('using');
    x.classList.remove('using');
    y.classList.remove('using');
    power.classList.remove('using');
    Root.classList.remove('using');
}

// color rgb(160, 104, 0) for functions 
// NaN problem
// del NaN problem