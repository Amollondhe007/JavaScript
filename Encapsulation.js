class Employee{

    setEmpDetails(name, id, phoneNo){
        this.name = name;
        this.id =id;
        this.phoneNo = phoneNo;
    }

    getEmpName(){
        return this.name;
    }

    getEmpId(){
        return this.id;
    }

    getEmpPhoneNo(){
        return this.phoneNo;
    }
}

let emp1 = new Employee();
emp1.setEmpDetails('Amol',1001,1111111111);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());

