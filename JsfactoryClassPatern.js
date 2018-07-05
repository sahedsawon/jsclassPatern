/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/*
 * factory class pater
 */
function AdminUser(name,birthDate) {
    function calculateAge() {
        return new Date().getFullYear() - birthDate.getFullYear();
    }
    
    return {
        welcomeAdmin() {
            return `Hello admin ${name} welcome to you our new app. you are ${calculateAge()} years old`;
        }
    };
    
}

let adminUser = AdminUser('Jahirul Islam',new Date(1974,2,22));
alert(adminUser.welcomeAdmin());

