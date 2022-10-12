"use strict";

const MAX_VALUE = 5;
let counter = 0;
const interval = 3000;
let timer;



function event(){
    console.log(new Date());
    counter++;
    if(counter == MAX_VALUE){
        clearInterval(timer);
        alert("The end");
    }
}

alert("Begin");
timer = setInterval(event, interval);