'use strict';


let myForm = document.getElementById('employeeForm');

let employee= [];

function Employee (eName, Department, Level, eImage){
    this.eID = 0;
    this.eName = eName;
    this.Department = Department;
    this.Level = Level;
    this.eImage = eImage;
    this.Salary = 0;


    employee.push(this);
}

Employee.prototype.salaryCalculating = function (){
    this.Level= (this.Level).toLowerCase();
    
        if (this.Level == 'junior'){
            this.Salary = Math.floor(Math.random() * (1000 - 500 +1)) + 500;
            this.Salary = this.Salary * (1-0.075);
        }

        else if (this.Level == 'mid-senior'){
        
            this.Salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
            this.Salary = this.Salary * (1-0.075);

        }
        else if (this.Level == 'senior'){
            
            this.Salary = Math.floor(Math.random() * (2000 - 1500 +1)) + 1500;
            this.Salary = this.Salary * (1-0.075);

        
    }

    Employee.prototype.employeeID = function (){     // lab 08
       
        this.eID = Math.floor(Math.random() * (9999 - 1000 +1)) + 1000;

    }

    let netSal = randSal - randSal*0.075;
}

Employee.prototype.render = function (){

    this.employeeID();
    this.salaryCalculating();
    console.log(`Employee name ${this.eName} with Salary ${this.Salary} JD`);
    document.write(`<br/>Employee name ${this.eName} with Salary ${this.Salary} JD<br/>`);

}


myForm.addEventListener('submit', handdleClick);

function handdleClick (event){
    event.preventDefault();

    let eName = event.target.eName.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let eImage = event.target.eImage.value;

    let newEmployee = new Employee (eName, Department, Level, eImage);
    newEmployee.render();




}


// let ghaziSamer	= new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assest/employee1.png');
// let lanaAli	= new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './assest/employee1.png');
// let tamaraAyoub = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assest/employee1.png');
// let safiWalid = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './assest/employee1.png');
// let omarZaid	= new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './assest/employee1.png');
// let ranaSaleh	= new Employee(1005, 'Rana Saleh', 'Development', 'Junior', './assest/employee1.png');
// let hadiAhmad	= new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './assest/employee1.png');

for (let i=0; i<employee.length; i++){

    employee[i].render();
    // console.log(employee[i]);
}
