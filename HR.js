"use strict";

let myForm = document.getElementById("employeeForm");
let employeeSection = document.getElementById("employeeSection");
// let ourData = document.getElementById("ourData");
let AdministrationDiv =document.getElementById("Administration");
let MarketingDiv =document.getElementById("Marketing");
let DevelopmentDiv =document.getElementById("Development");
let FinanceDiv =document.getElementById("Finance");

let Administrationh2 = document.getElementById("Administrationh2");
let Marketingh2 = document.getElementById("Marketingh2");
let Developmenth2 = document.getElementById("Developmenth2");
let Financeh2 = document.getElementById("Financeh2");




let employee = [];
let IDArr = [];

function Employee(eName, Department, Level, eImage) {
  this.eID = 0;
  this.eName = eName;
  this.Department = Department;
  this.Level = Level;
  this.eImage = eImage;
  this.Salary = 0;

  employee.push(this);
}

myForm.addEventListener("submit", handdleClick);

function handdleClick(event) {
  event.preventDefault();
  let eName = event.target.eName.value;
  let Department = event.target.Department.value;
  let Level = event.target.Level.value;
  let eImage = event.target.eImage.value;

  let newEmployee = new Employee(eName, Department, Level, eImage);
  newEmployee.render();
  saveData(employee);
}

Employee.prototype.salaryCalculating = function () {
  this.Level = this.Level.toLowerCase();
  let randSal = [];

  if (this.Level == "junior") {
    this.Salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    this.Salary = Math.floor(this.Salary * (1 - 0.075));
  } else if (this.Level == "mid-senior") {
    this.Salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    this.Salary = Math.floor(this.Salary * (1 - 0.075));
  } else if (this.Level == "senior") {
    this.Salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    this.Salary = Math.floor(this.Salary * (1 - 0.075));
  }

  // let netSal = randSal - randSal*0.075;
};

Employee.prototype.employeeID = function () {
  this.eID = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  //   IDArr.push(this.eID);

  //   for (let i=0; i<IDArr.length-1 ; i++){

  //   }
};

Employee.prototype.render = function () {
  this.employeeID();
  this.salaryCalculating();

  // console.log(`Employee name ${this.eName} with Salary ${this.Salary} JD`);
  // document.write(`<br/>Employee name ${this.eName} with Salary ${this.Salary} JD<br/>`);

let card = document.createElement('div');
card.classList.add("cardStyle")

  const Image = document.createElement("img");
  Image.src = this.eImage;
  Image.id = "mainImg";

  const Name = document.createElement("h5");
  Name.textContent = `Name: ${this.eName}`;

  const ID = document.createElement("h5");
  ID.textContent = `ID: ${this.eID}`;

  const Department = document.createElement("h5");
  Department.textContent = `Department: ${this.Department}`;

  const Level = document.createElement("h5");
  Level.textContent = `Level: ${this.Level}`;

  const Salary = document.createElement("h5");
  Salary.textContent = `Salary: ${this.Salary}`;

  if (this.Department == "Administration"){

    Administrationh2.style.display = 'block';
    card.appendChild(Image);
    card.appendChild(Name);
    card.appendChild(ID);
    card.appendChild(Department);
    card.appendChild(Level);
    card.appendChild(Salary);

    AdministrationDiv.appendChild(card);
  }
  else  if (this.Department == "Marketing"){

    Marketingh2.style.display = 'block';
    card.appendChild(Image);
    card.appendChild(Name);
    card.appendChild(ID);
    card.appendChild(Department);
    card.appendChild(Level);
    card.appendChild(Salary);

    MarketingDiv.appendChild(card);
  }
  else if (this.Department == "Development"){

    Developmenth2.style.display = 'block';

    card.appendChild(Image);
    card.appendChild(Name);
    card.appendChild(ID);
    card.appendChild(Department);
    card.appendChild(Level);
    card.appendChild(Salary);

    DevelopmentDiv.appendChild(card);
  }
  else if (this.Department == "Finance"){
    Financeh2.style.display = 'block';

    card.appendChild(Image);
    card.appendChild(Name);
    card.appendChild(ID);
    card.appendChild(Department);
    card.appendChild(Level);
    card.appendChild(Salary);

    FinanceDiv.appendChild(card);
  }

};

function saveData(data) {
  let stringify = JSON.stringify(data);
  localStorage.setItem("employee", stringify);
}

function getData() {
  let retreivedData = localStorage.getItem("employee");
  let arrayData = JSON.parse(retreivedData);

  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
      new Employee(
        arrayData[i].eName,
        arrayData[i].Department,
        arrayData[i].Level,
        arrayData[i].eImage
      );
      employee[i].employeeID();
      employee[i].salaryCalculating();
      employee[i].render();
    }
  }
}

getData();

// let ghaziSamer	= new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assest/employee1.png');
// let lanaAli	= new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './assest/employee1.png');
// let tamaraAyoub = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assest/employee1.png');
// let safiWalid = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './assest/employee1.png');
// let omarZaid	= new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './assest/employee1.png');
// let ranaSaleh	= new Employee(1005, 'Rana Saleh', 'Development', 'Junior', './assest/employee1.png');
// let hadiAhmad	= new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './assest/employee1.png');

// for (let i = 0; i < employee.length; i++) {
//   employee[i].render();
//   // console.log(employee[i]);
// }
