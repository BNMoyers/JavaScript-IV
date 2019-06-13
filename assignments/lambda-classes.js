// CODE here for your Lambda Classes
/* Base Class - Person*/

class Person{
    constructor(info){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}.`);
    };
}

/* Instructors - child of Person*/
class Instructors extends Person{
    constructor(info){
        super(info);
        this.specialty = specialty;
        this.favLanguage = this.favLanguage;
        this.catchPhrase = this.catchPhrase;
    };
    demo(subject){
        console.log(`Today, we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    };
}

/* Project Managers - child of Instructors*/

class ProjectManagers extends Instructors{
    constructor(info){
        super(info);
        this.gradClassName = this.gradClassName;
        this.favInstructor = this.favInstructor;

    };
    standUp(channel){
        console.log(`${this.name} announces to ${this.channel}, "@channel standy times!"`)
    };
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}

// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

/*Students - child of Person*/
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}