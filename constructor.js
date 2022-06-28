class Student {
    constructor(name,age,phone,marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
    }
    iseligible() {
      return this.marks>40?"eligible":"uneligible";
    }
    static hello() {  // static method
        return "Hello!!";
    }
  }
  A = new Student("ak", 14, 8907666, 70);
  C= new Student('tu', 18, 8907666, 50);
  D = new Student('gr', 19, 8907666, 40);
  E = new Student('po', 15, 8907666, 60);
  F = new Student('rw', 16, 8907666, 90);
  console.log(D.iseligible());
  console.log(Student.hello());