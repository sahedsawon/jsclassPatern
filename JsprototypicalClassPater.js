/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*
 * protypical inheritance class patern
 */
function SupperAdmin(name,birthDate) {
    this.name = name;
    this.birthDate = birthDate;
}

SupperAdmin.prototype._calculateAge = function() {
    return new Date().getFullYear() - this.birthDate.getFullYear();
};

SupperAdmin.prototype.welcomeSupperAdmin = function() {
    return `Helllo Supper admin ${this.name} welcome to our new App. You are ${this._calculateAge()} years old`;
};

let supperAdmin = new SupperAdmin('Sahabuddin yamin chowdory',new Date(1983,1,1));
alert(supperAdmin.welcomeSupperAdmin());

