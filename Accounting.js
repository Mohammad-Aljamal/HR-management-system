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
    AdministrationSalary += Math.floor(employees[i].Salary);
    AdministrationAvgSalary = Math.floor(AdministrationSalary/AdministrationCount);
  }
  if (employees[i].Department == "Marketing"){
    MarketingCount ++;
    MarketingSalary += Math.floor(employees[i].Salary);
    MarketingAvgSalary = Math.floor(MarketingSalary/MarketingCount);

  }
  if (employees[i].Department == "Development"){
    DevelopmentCount ++;
    DevelopmentSalary += Math.floor(employees[i].Salary);
    DevelopmentAvgSalary = Math.floor(DevelopmentSalary/DevelopmentCount);

  }
  if (employees[i].Department == "Finance"){
    FinanceCount ++;
    FinanceSalary += Math.floor(employees[i].Salary);
    FinanceAvgSalary = Math.floor(FinanceSalary/FinanceCount);

  }
}
netEmployeesCount = AdministrationCount+MarketingCount+DevelopmentCount+FinanceCount;
netSalary = Math.floor(AdministrationSalary+MarketingSalary+DevelopmentSalary+FinanceSalary);
netAvgSalary = Math.floor(netSalary/netEmployeesCount);
}

getData();
renderData();

console.log(AdministrationCount);
console.log(DevelopmentCount);
console.log(MarketingCount);
console.log(FinanceCount);



let tr1 = document.createElement('tr');
tableData.appendChild(tr1);
let thEl = document.createElement('th');
thEl.textContent = "Department";
tr1.appendChild(thEl);
let thEmp = document.createElement('th');
thEmp.textContent = "# of Employees";
tr1.appendChild(thEmp);
let thSalary = document.createElement('th');
thSalary.textContent = "Total Salary";
tr1.appendChild(thSalary);
let thAvg = document.createElement('th');
thAvg.textContent = "Average salary";
tr1.appendChild(thAvg);

// -----------------------------------------| Administration |------------------------------

let tr2 = document.createElement('tr');
tableData.appendChild(tr2);
let tdAdmin = document.createElement('td');
tdAdmin.textContent = "Administration";
tr2.appendChild(tdAdmin);
let tdAdminEmp = document.createElement('td');
tdAdminEmp.textContent = `${AdministrationCount}`;
tr2.appendChild(tdAdminEmp);
let tdAdminSalary = document.createElement('td');
tdAdminSalary.textContent = `${AdministrationSalary}`;
tr2.appendChild(tdAdminSalary);
let tdAdminAvg = document.createElement('td');
tdAdminAvg.textContent = `${AdministrationAvgSalary}`;
tr2.appendChild(tdAdminAvg);

// -----------------------------------------| Marketing |------------------------------

let tr3 = document.createElement('tr');
tableData.appendChild(tr3);
let tdMarket = document.createElement('td');
tdMarket.textContent = "Marketing";
tr3.appendChild(tdMarket);
let tdMarketEmp = document.createElement('td');
tdMarketEmp.textContent = `${MarketingCount}`;
tr3.appendChild(tdMarketEmp);
let tdMarketSalary = document.createElement('td');
tdMarketSalary.textContent = `${MarketingSalary}`;
tr3.appendChild(tdMarketSalary);
let tdMarketAvg = document.createElement('td');
tdMarketAvg.textContent = `${MarketingAvgSalary}`;
tr3.appendChild(tdMarketAvg);

// -----------------------------------------| Development |------------------------------

let tr4 = document.createElement('tr');
tableData.appendChild(tr4);
let tdDevelop = document.createElement('td');
tdDevelop.textContent = "Development";
tr4.appendChild(tdDevelop);
let tdDevelopEmp = document.createElement('td');
tdDevelopEmp.textContent = `${DevelopmentCount}`;
tr4.appendChild(tdDevelopEmp);
let tdDevelopSalary = document.createElement('td');
tdDevelopSalary.textContent = `${DevelopmentSalary}`;
tr4.appendChild(tdDevelopSalary);
let tdDevelopAvg = document.createElement('td');
tdDevelopAvg.textContent = `${DevelopmentAvgSalary}`;
tr4.appendChild(tdDevelopAvg);

// -----------------------------------------| Finance |------------------------------

let tr5 = document.createElement('tr');
tableData.appendChild(tr5);
let tdFinance = document.createElement('td');
tdFinance.textContent = "Finance";
tr5.appendChild(tdFinance);
let tdFinanceEmp = document.createElement('td');
tdFinanceEmp.textContent = `${FinanceCount}`;
tr5.appendChild(tdFinanceEmp);
let tdFinanceSalary = document.createElement('td');
tdFinanceSalary.textContent = `${FinanceSalary}`;
tr5.appendChild(tdFinanceSalary);
let tdFinanceAvg = document.createElement('td');
tdFinanceAvg.textContent = `${FinanceAvgSalary}`;
tr5.appendChild(tdFinanceAvg);

// -----------------------------------------| Total |------------------------------

let tr6 = document.createElement('tr');
tableData.appendChild(tr6);
let tdTotal = document.createElement('td');
tdTotal.textContent = "Total:";
tr6.appendChild(tdTotal);
let tdTotalEmp = document.createElement('td');
tdTotalEmp.textContent = `${netEmployeesCount}`;
tr6.appendChild(tdTotalEmp);
let tdTotalSalary = document.createElement('td');
tdTotalSalary.textContent = `${netSalary}`;
tr6.appendChild(tdTotalSalary);
let tdTotalAvg = document.createElement('td');
tdTotalAvg.textContent = `${netAvgSalary}`;
tr6.appendChild(tdTotalAvg);




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
