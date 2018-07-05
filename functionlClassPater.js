/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * Functional class patern
*/
function User(name, birthDate) {
    function calculateAge() {
        return new Date().getFullYear() - birthDate.getFullYear();
    }
    
    this.sayeHello = function() {
        return `Hello ${name} you are ${calculateAge()} age`;
    }
}

let user = new User('Sahed sawon',new Date(1990,11,15));
alert(user.sayeHello());
