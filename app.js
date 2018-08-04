//The person contstructor, our base pseudo-class 
function Person (name, age ) {
    this.name = name;
    this.age = age;

}

Person.prototype.greet = function () {
    alert(`Greeting, I am ${this.name}`);
}

Person.prototype.sleep = function () {
    alert(`I am going to slepp now. My name is ${this.name}`);
}

//The Teacher constructor, a child Pseudo-class 
function Teacher (name,age, dept){
    // step 1 is to call th eparent constructor function 
    //if you choose to pass arguments up to parent, do so now
    Person.call(this, name, age);

    //after calling the parent constructor, set your own properties
    this.dept = dept;
}

//Make the Teacher prototype be a copy of the Person prototype 
// this means you have all the same methods as a person 
    Teacher.prototype = Object.create(Person.prototype);

//Now you have to reset the constructor back to Teacher
// this is because it would be set to Perosn becasue of the previous line
    Teacher.prototype.constructor = Teacher;

//This will effectively overwrite the greet function you inherited from Person
    Teacher.prototype.greet = function () {
        alert(`Hello, I am ${this.name}. I work in the ${this.dept} department.`);
    }

    function Student (name, age, major) {
        Person.call(this, name, age);
        this.major = major;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    Student.prototype.greet = function () {
        alert(`Hi I'm ${this.name}. I'm majoring in ${this.major}`)
    }

    let p1 = new Person(`John Jacobs`,29);
    let t1 = new Teacher (`Jasmine Jones`, 26, 'Math');
    let s1 = new Student ('Jerico Jameson', 20, 'Computer Sicence');
    console.log(p1)
    console.log(t1)
    console.log(s1)


    p1.greet()
    t1.greet()
    s1.greet()