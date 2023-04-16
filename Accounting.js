"use strict";

let tableData = document.getElementById("table");
let employees = [];


let AdministrationCount = 0;
let MarketingCount = 0;
let DevelopmentCount = 0;
let FinanceCount = 0;
let netEmployeesCount = 0;

let AdministrationSalary = 0;
let MarketingSalary = 0;
let DevelopmentSalary = 0;
let FinanceSalary = 0;
let netSalary = 0;

let AdministrationAvgSalary = 0;
let MarketingAvgSalary = 0;
let DevelopmentAvgSalary = 0;
let FinanceAvgSalary = 0;
let netAvgSalary = 0;


function renderData(){


for (let i=0; i<employees.length ; i++){
  if (employees[i].Department == "Administration"){
    AdministrationCount ++;
    AdministrationSalary += employees[i].salaryCalculating();
    AdministrationAvgSalary = AdministrationSalary/AdministrationCount;
  }
  if (employees[i].Department == "Marketing"){
    MarketingCount ++;
    MarketingSalary += employees[i].salaryCalculating();
    MarketingAvgSalary = MarketingSalary/MarketingCount;

  }
  if (employees[i].Department == "Development"){
    DevelopmentCount ++;
    DevelopmentSalary += employees[i].salaryCalculating();
    DevelopmentAvgSalary = DevelopmentSalary/DevelopmentCount;

  }
  if (employees[i].Department == "Finance"){
    FinanceCount ++;
    FinanceSalary += employees[i].salaryCalculating();
    FinanceAvgSalary = FinanceSalary/FinanceCount;

  }
}
netEmployeesCount = AdministrationCount+MarketingCount+DevelopmentCount+FinanceCount;
netSalary = AdministrationSalary+MarketingSalary+DevelopmentSalary+FinanceSalary;
netAvgSalary = netSalary/netEmployeesCount;
}


let tr1 = document.createElement('tr');
tableData.appendChild(tr1);
let thEl = document.createElement('th');
thEl.textContent = "Department";
tableData.appendChild(thEl);
let thEmp = document.createElement('th');
thEmp.textContent = "# of Employees";
tableData.appendChild(thEmp);
let thSalary = document.createElement('th');
thSalary.textContent = "Total Salary";
tableData.appendChild(thSalary);
let thAvg = document.createElement('th');
thAvg.textContent = "Average salary";
tableData.appendChild(thAvg);

// -----------------------------------------| Administration |------------------------------

let tr2 = document.createElement('tr');
tableData.appendChild(tr2);
let tdAdmin = document.createElement('td');
tdAdmin.textContent = "Administration";
tableData.appendChild(thtdAdmin);
let tdAdminEmp = document.createElement('td');
tdAdminEmp.textContent = `${AdministrationCount}`;
tableData.appendChild(tdAdminEmp);
let tdAdminSalary = document.createElement('td');
tdAdminSalary.textContent = `${AdministrationSalary}`;
tableData.appendChild(tdAdminSalary);
let tdAdminAvg = document.createElement('td');
tdAdminAvg.textContent = `${AdministrationAvgSalary}`;
tableData.appendChild(tdAdminAvg);

// -----------------------------------------| Marketing |------------------------------

let tr3 = document.createElement('tr');
tableData.appendChild(tr3);
let tdMarket = document.createElement('td');
tdMarket.textContent = "Marketing";
tableData.appendChild(tdMarket);
let tdMarketEmp = document.createElement('td');
tdMarketEmp.textContent = `${MarketingCount}`;
tableData.appendChild(tdMarketEmp);
let tdMarketSalary = document.createElement('td');
tdMarketSalary.textContent = `${MarketingSalary}`;
tableData.appendChild(tdMarketSalary);
let tdMarketAvg = document.createElement('td');
tdMarketAvg.textContent = `${MarketingAvgSalary}`;
tableData.appendChild(tdMarketAvg);

// -----------------------------------------| Development |------------------------------

let tr4 = document.createElement('tr');
tableData.appendChild(tr4);
let tdDevelop = document.createElement('td');
tdDevelop.textContent = "Development";
tableData.appendChild(tdDevelop);
let tdDevelopEmp = document.createElement('td');
tdDevelopEmp.textContent = `${DevelopmentCount}`;
tableData.appendChild(tdDevelopEmp);
let tdDevelopSalary = document.createElement('td');
tdDevelopSalary.textContent = `${DevelopmentSalary}`;
tableData.appendChild(tdDevelopSalary);
let tdDevelopAvg = document.createElement('td');
tdDevelopAvg.textContent = `${DevelopmentAvgSalary}`;
tableData.appendChild(tdDevelopAvg);

// -----------------------------------------| Finance |------------------------------

let tr5 = document.createElement('tr');
tableData.appendChild(tr5);
let tdFinance = document.createElement('td');
tdFinance.textContent = "Finance";
tableData.appendChild(tdFinance);
let tdFinanceEmp = document.createElement('td');
tdFinanceEmp.textContent = `${FinanceCount}`;
tableData.appendChild(tdFinanceEmp);
let tdFinanceSalary = document.createElement('td');
tdFinanceSalary.textContent = `${FinanceSalary}`;
tableData.appendChild(tdFinanceSalary);
let tdFinanceAvg = document.createElement('td');
tdFinanceAvg.textContent = `${FinanceAvgSalary}`;
tableData.appendChild(tdFinanceAvg);

// -----------------------------------------| Total |------------------------------

let tr6 = document.createElement('tr');
tableData.appendChild(tr6);
let tdTotal = document.createElement('td');
tdTotal.textContent = "Total:";
tableData.appendChild(tdTotal);
let tdTotalEmp = document.createElement('td');
tdTotalEmp.textContent = `${netEmployeesCount}`;
tableData.appendChild(tdTotalEmp);
let tdTotalSalary = document.createElement('td');
tdTotalSalary.textContent = `${netSalary}`;
tableData.appendChild(tdTotalSalary);
let tdTotalAvg = document.createElement('td');
tdTotalAvg.textContent = `${netAvgSalary}}`;
tableData.appendChild(tdTotalAvg);




function getData() {
  let retreivedData = localStorage.getItem("employee");
  let arrayData = JSON.parse(retreivedData);

  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
      employees = arrayData;
    }
  }
}

getData();
renderData();
