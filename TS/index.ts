  
  interface ICustomer {
    CustName:string;
    CustPhNo:string;
    CustEmail:string;
    CustID:number;
    CustAddress:string;
   
  
}

interface ICustomerMethods extends ICustomer {
    SaveCustomer(customer:Program):boolean;
    HelloMethod():void;
}

class CustomerCollection{
    public items:Program[]=[];
    public count():number{
        return this.items.length
        }
        public Add(item:Program)
        {
            this.items.push(item);
        }
}

class Program implements ICustomerMethods
{
    CustName:string;
    CustPhNo:string;
    CustEmail:string;
    CustID:number;
    CustAddress:string;
    collection:CustomerCollection=new CustomerCollection();
    constructor(options:ICustomer){
        this.CustName=options.CustName;
        this.CustPhNo=options.CustPhNo;
        this.CustAddress=options.CustAddress;
        this.CustEmail=options.CustEmail; 
        
       }
    
    public GetDetail(customer:Program):string
    {
     console.log(this.collection.count());
       if(this.collection.count()>0)
        {
        console.log(this.collection.count());
        for (var cust in this.collection) // for acts as a foreach
        { 
           return "<div class='container'><b>Customer Name is : </b>"+cust.CustName+"</br><b>PhoneNo is : </b>"+cust.CustPhNo+"</br/><b>EmailID is : </b>"+cust.CustEmail+"</br/><b>CustAddress is : </b>"+cust.CustAddress+"</div>";
        }
        }
        return "<div class='container'><b>Customer Name is : </b>"+customer.CustName+"</br><b>PhoneNo is : </b>"+customer.CustPhNo+"</br/><b>EmailID is : </b>"+customer.CustEmail+"</br/><b>CustAddress is : </b>"+customer.CustAddress+"</div>";
    }
    
    public SaveCustomer(objcustomer:Program):boolean
    {
       // document.getElementById("grCustomer").innerHTML=objcustomer.GetDetail(objcustomer);
     
     
      console.log(this.collection.count());
       this.collection.Add(objcustomer);
       console.log(this.collection.count());
        return true;
    }
    public HelloMethod():void
    {
        alert("Hello Method Called");
        
    }
}




