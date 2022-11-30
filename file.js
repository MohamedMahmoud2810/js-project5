class Person{
    #salary 
    constructor(id, name ,email,workMood,salary,isManager){
        this.id = id;
        this.name = name;
        this.email = email;
        this.workMood = workMood;
        this.#salary = salary ;
        this.isManager=isManager;
    }
}


class Employee extends Person{
    #salary 
    #healthRate
    constructor(id , email , workMood , isManager){
        super(id , email , workMood , isManager)
        
    }
    
    Sleep(hours){
        if(hours==7){
            this.workMood = 'Happy';
        }
        else if(hours<7){
            this.workMood = "Tired";
        }
        else{
            this.workMood = "Lazy" ;
        }
        return this.workMood;
        }

    Eat(meals){
        if(meals == 3){
            this.healthRate = 100;
                        
        }
        else if(meals == 2){
        this.healthRate = 75
                        
        }
        else if(meals == 1){
        this.healthRate = 50
                        
        }
        else{
        console.log("wrong meals number");
        }
        return this.healthRate;
    }
    Buy(items){
        
        for(items == 1;items>1;items++){
            this.salary= ("Decrease money by " + items*10 + " LE for buying " + items + " items");
            return this.salary;
        }
    }
    
    work(hours){
        if(hours==8){
            this.workMood = 'Happy';
        }
        else if(hours<8){
            this.workMood = "Tired";
        }
        else{
            this.workMood = "Lazy" ;
        }
        return this.workMood;
        }
    get salary(){
        return this.#salary;
    }
    set salary(value){
        this.#salary = value;
        if(value>=1000){
            return this.#salary;
        }
        else {
            console.log("salary must bo 1000 or more.");
        }
    }

    get healthRate(){
        return this.#healthRate;
    }
    set healthRate (value){
        this.#healthRate = value;
        if(value>=0 && value <= 100 ){
            healthRate;
        }
        
    }
    newemp = []
    setEmployee(person){
        this.newemp.push(person);
    }
    
}




/////////////////////////////////////////////////////////////////////////
class Office extends Employee {
    
    constructor(id , email , workMood , salary, isManager ){
        super(id , email , workMood , salary , isManager);
        this.newemp.push(this);

    }
    getAllEmployees(){
        return this.newemp;
    }


    get (id){
        let found = this.newemp.find((element) => element.id = id );
        if(found.isManager){
            found = {...found , salary : null}; 
        }
        return found;
    }
    // getEmployee(email){
    //     var getid = prompt("enter your email : ");
    //     for(var i=0 ;i<newemp.length; i++){
    //         if(getid == this.email){
    //             alert(`Name :  ${this.name} Age: ${this.age}  Email ${this.email} IsManager ${this.isManager} `);
    //             return this.email;
    //         }
    //         else{
    //             alert("wrong id");
    //         }
    //     }
    // }

    hire(Employee){
        
        let emp_or_mgr = prompt("if manager press mngr ");
        if(emp_or_mgr == "mngr" || emp_or_mgr == "nrml"){
            alert("You are manager , enter your data : ");
            var name = prompt ("enter your name :");
            var age = Number(prompt("enter your age : "));
            var email = prompt("enter your email");
        }
        else if(emp_or_mgr == null || emp_or_mgr == "q"){
            return;
        }
        
    }

    fire(email){
        var getid = prompt("enter your email : ");
        for(var i=0 ;i<newemp.length; i++){
            if(getid == this.email){
                delete newemp[i];
            }
            
        }
    }
}

const mohamed = new Employee();


// console.log(mohamed.Sleep(6)); 
// console.log(mohamed.Eat(2));
// console.log(mohamed.Buy(30));
// console.log(mohamed.work(6));
// console.log(mohamed.salary = 800);


const off1 = new Office(); 
off1.hire(mohamed);
off1.getAllEmployees();