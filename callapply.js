var fullName= function(firstName, Lastname) {

    return firstName + " " + lastName ;

 }

const person1 = {

  firstName:"John",

  lastName: "Doe"

}

console.log(fullName.call(person1, "Antony", "Jay"));

console.log(fullName.apply(person1, ["antony","Jay"]));

const Student={ age:20, 
display: function(){

console.log(this.age);

}

}

let display = Student.display.bind(Student)
Student.display();