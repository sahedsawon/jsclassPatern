class User{
    constructor(name,rule,birthDate){
        this.name = name;
        this.rule = rule;
        this.birthDate = birthDate;
    }
    set name(value){
        if(value.length < 5){
            console.warn('Name is too short');
            return ;
        }
        this._name = value;
    }
    get name() {
        if(this.rule !== 'admin'){
            console.warn('you are not able to do this');
            return;
        }
        return this._name;
    }
    
    calculateAge() {
        return new Date().getFullYear() - this.birthDate.getFullYear();
    }
    
    static sortUser(userA,UserB){
        return  userA.birthDate - UserB.birthDate;
    }
}

let userCol = [
    new User('sahed sawon','admin',new Date(1990,11,15)),
    new User('Sahadat Hossain','admin',new Date(1989,11,15)),
    new User('Iman','regualrUser',new Date(1998,11,15))
];
userCol.sort(User.sortUser);
userCol.forEach(function(user) {
  console.log(user.name);
});