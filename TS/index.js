var Employeeodel = (function () {
    function Employeeodel() {
    }
    Object.defineProperty(Employeeodel.prototype, "BirthYear", {
        get: function () {
            return this._birthYear;
        },
        set: function (BY) {
            this._birthYear = BY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employeeodel.prototype, "Mobile", {
        get: function () {
            return this._mobile;
        },
        set: function (mobile) {
            this._mobile = mobile;
        },
        enumerable: true,
        configurable: true
    });
    return Employeeodel;
})();

//    abstract class SalaryCls
//     {
//        private _amount:number;
//        constructor(amount:number){
//            this._amount=amount;
//        }
//        CalculateBasic(Amount:number):number{return 0;}
//       abstract CalculateSalary(Amount:number):number;
//     }
var Employee = (function () {
    function Employee(firstName, lastName, year, mobile) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.BirthYear = year;
        this.Mobile = mobile;
    }
    Employee.prototype.CalculateAge = function (CY, BY) {
        return (CY - BY);
    };

    Employee.prototype.GetFullName = function () {
        document.writeln("FullName is : " + this._firstName + " " + this._lastName);
        document.writeln("<br\> Age is : " + this.CalculateAge(2016, this.BirthYear));
        document.writeln("<br\> Contact No is : " + this.Mobile);
    };
    return Employee;
})();

var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var objEmployee = new Employee('John', 'Smith', 1970, +91990099000);
        objEmployee.GetFullName();
    };
    return Startup;
})();

Startup.main();
