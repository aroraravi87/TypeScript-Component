var CustomerCollection = (function () {
    function CustomerCollection() {
        this.items = [];
    }
    CustomerCollection.prototype.count = function () {
        return this.items.length;
    };
    CustomerCollection.prototype.Add = function (item) {
        this.items.push(item);
    };
    return CustomerCollection;
})();

var Program = (function () {
    function Program(options) {
        this.collection = new CustomerCollection();
        this.CustName = options.CustName;
        this.CustPhNo = options.CustPhNo;
        this.CustAddress = options.CustAddress;
        this.CustEmail = options.CustEmail;
    }
    Program.prototype.GetDetail = function (customer) {
        console.log(this.collection.count());
        if (this.collection.count() > 0) {
            console.log(this.collection.count());
            for (var cust in this.collection) {
                return "<div class='container'><b>Customer Name is : </b>" + cust.CustName + "</br><b>PhoneNo is : </b>" + cust.CustPhNo + "</br/><b>EmailID is : </b>" + cust.CustEmail + "</br/><b>CustAddress is : </b>" + cust.CustAddress + "</div>";
            }
        }
        return "<div class='container'><b>Customer Name is : </b>" + customer.CustName + "</br><b>PhoneNo is : </b>" + customer.CustPhNo + "</br/><b>EmailID is : </b>" + customer.CustEmail + "</br/><b>CustAddress is : </b>" + customer.CustAddress + "</div>";
    };

    Program.prototype.SaveCustomer = function (objcustomer) {
        // document.getElementById("grCustomer").innerHTML=objcustomer.GetDetail(objcustomer);
        console.log(this.collection.count());
        this.collection.Add(objcustomer);
        console.log(this.collection.count());
        return true;
    };
    Program.prototype.HelloMethod = function () {
        alert("Hello Method Called");
    };
    return Program;
})();
