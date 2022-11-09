"use strict";


const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
};


for (let name in persons){
    const person = persons[name];
    const age = person.died - person.born;
    console.log(`${name} age: ${age}`);
}
console.log(11);