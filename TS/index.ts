        interface IEmployee
        {
           // private _birthYear:number;
            //private _mobile:number;
            
            CalculateAge(CY:number,BY:number):number;
        }

     class Employeeodel
        {
            private _birthYear:number;
            private _mobile:number;
            
            get BirthYear():number{
                return this._birthYear;
            }
            set BirthYear(BY:number){
                this._birthYear=BY;
            }
            get Mobile():number{
                return this._mobile;
            }
            set Mobile(mobile:number){
                this._mobile=mobile;
            }
        }

       abstract class SalaryCls{
           private _amount:number;
           
           constructor(amount:number){
               this._amount=amount;
           }
           CalculateBasic(Amount:number):number{return 0;}    
       
          abstract CalculateSalary(Amount:number):number;    
          
        }


  class Employee implements IEmployee{
    
    private _firstName:string;
    private _lastName:string;
    BirthYear:number;
    Mobile:number;
    Age:number;
    
  constructor(firstName:string,lastName:string,year:number,mobile:number)
    {
        this._firstName=firstName;
        this._lastName= lastName;
        this.BirthYear=year;
        this.Mobile=mobile;
  }
  
  CalculateAge(CY:number,BY:number):number
  {
     return (CY-BY);
  }
    
    GetFullName():void
    {
        document.writeln("FullName is : "+this._firstName +" "+this._lastName );
        document.writeln("<br\> Age is : "+ this.CalculateAge(2016,this.BirthYear) );
        document.writeln("<br\> Contact No is : "+this.Mobile);
    }
}



 class Startup {
    public static main(): any {
         var objEmployee:Employee=new Employee('John','Smith',1970,+91990099000);
         objEmployee.GetFullName();
       
    }
}

Startup.main();
 