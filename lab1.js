// Task 1
{
    let NumArray = [];
    NumArray.push(10);
    NumArray.push(20);
    NumArray.push(30);
}
//Task2
{
    let stringNum = [];
    stringNum.push("str1");
    stringNum.push(1);
    stringNum.push("str2");
    stringNum.push(2);
    // Printing all items
    stringNum.forEach(item => console.log(item));
    console.log(stringNum);
}
//Task3
{
    let myVar;
    myVar = 10;
    myVar = true;
}
//Task4
{
    function myHandeledFunction(param1, param2) {
        if (param1 === undefined || param2 === undefined) {
            console.log("NO available parameters.");
            return;
        }
        console.log("Parameter 1:", param1);
        console.log("Parameter 2:", param2);
    }
    myHandeledFunction();
}
//Task5
{
    class Employee {
        constructor(emp) {
            this._username = emp.username;
            this.id = emp.id;
            this.email = emp.email;
            this.name = emp.name;
            this.address = emp.address;
        }
        get username() {
            return this._username;
        }
        set username(username) {
            this._username = username;
        }
    }
    let testObj = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: -37.3159,
                lng: 81.1496
            }
        }
    };
    let myEmp = new Employee(testObj);
    console.log(myEmp);
    //Task6
    class Manager extends Employee {
        constructor(emp) {
            super(emp);
        }
        getAddress() {
            console.log(this.address);
        }
    }
    let managerObj = new Manager(testObj);
    managerObj.getAddress();
}
//Task7
{
    class Account {
        constructor(accNo, balance, dateOfOpening) {
            this.accNo = accNo;
            this.balance = balance;
            this.dateOfOpening = dateOfOpening;
        }
        addCustomer() {
            console.log("Hello from addCustomer() ");
        }
        removeCustomer() {
            console.log(" Hello from removeCustomer() ");
        }
        getDebitAmount() {
            console.log("Hello from getDebitAmount() ");
        }
        getCreditAmount() {
            console.log("Hello from getDebitAmount() ");
        }
        getBalance() {
            console.log("Hello from getDebitAmount() ");
        }
    }
    class SavingAccount extends Account {
        constructor(accNo, balance, dateOfOpening, minBalance) {
            super(accNo, balance, dateOfOpening);
            this.minBalance = minBalance;
        }
        getMinBalance() {
            console.log(this.minBalance);
        }
    }
    class CurrentAccount extends Account {
        constructor(accNo, balance, dateOfOpening, interestRate) {
            super(accNo, balance, dateOfOpening);
            this.interestRate = interestRate;
        }
        getInterestRate() {
            console.log(this.interestRate);
        }
    }
}
