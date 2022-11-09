"use strict";
function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
      return function(b) {
        return function(c){
            return f(a, b, c);
        }
      };
    };
  }

function uotput(a, b, c){
    console.log(a + b + c);
}

const oc = curry(uotput);

let name = "Vova";
let space = " ";
let lastname = "Golovach";

uotput(name, space, lastname);
oc(name)(space)(lastname);


