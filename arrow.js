class Student {
    constructor(name,age,phone,marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
    }
    eligibleforjob= ()=> {return this.age>=18?this.name:'not eligibleforjob'};

    iseligible(){ if (this.marks>40){
        return this.eligibleforjob();
    }else{
      return "low marks";
    }
    }

    
    
    static hello() {  // static method
        return "Hello!!";
    }
    
  }

  A = new Student("ak", 17, 8907666, 70);
  C= new Student('tu', 18, 8907666, 50);
  D = new Student('gr', 19, 8907666, 40);
  E = new Student('po', 20, 8907666, 60);
  F = new Student('rw', 21, 8907666, 90);
  console.log(A.iseligible())
  console.log(C.iseligible())
  console.log(D.iseligible())
  console.log(E.iseligible())
 console.log(F.iseligible())
 
 
 
 
  
  