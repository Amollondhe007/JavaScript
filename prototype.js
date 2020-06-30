
let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;
};

EmpDetails.prototype.getName = function(){
    return this.name;
};

EmpDetails.prototype.getAge = function(){
    return this.age;
};


let emp1 = new EmpDetails('Rugveda',29);
let emp2 = new EmpDetails('Supriya',35);

console.log(emp1.getName());
console.log(emp2.getAge());