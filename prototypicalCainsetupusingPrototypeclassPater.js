/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * setup prototype chain in prototpincal inheritnce
 * in other words set proto type of one object to another customm object
 */
function Animal() {
    this.eats = true;
}

function Rabit(name) {
    this.name = name;
    this.wlak = true;
}

Rabit.prototype.bouunce = true;

Rabit.prototype.__proto__ = Animal.prototype;
console.log(new Rabit('Black Rabit'));


