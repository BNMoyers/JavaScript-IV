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

/*Students - child of Person*/
class Students extends Person{
    constructor(info){
        super(info);
        this.previousBackground = this.previousBackground;
        this.className = this.className;
        this.favSubjects = this.favSubjects;
    };
    listSubjects(){
        console.log(this.favSubjects);
    };
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    };
    sprintChallenge(subject){
        console.log(`${student.name} has begun a sprint challenge on ${subject}.`)
    }
}

