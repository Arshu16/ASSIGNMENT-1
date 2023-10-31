let counter=0;
const countervalue=document.getElementById('counter-value')
const decreement=document.getElementById('decreement')
const reset=document.getElementById('reset')
const increement=document.getElementById('increement')
function valuedecreement(){
    counter--;
    countervalue.innerHTML=counter;
}

function valueincreement(){
    counter ++;
    countervalue.innerHTML=counter;
}

function valuereset(){
    counter=0;
    countervalue.innerHTML=counter;
}