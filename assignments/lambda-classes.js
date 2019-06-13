// CODE here for your Lambda Classes
/* Base Class - Person*/

class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }
    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}.`;
    };
}

/* Instructors - child of Person*/
class Instructor extends Person{
    constructor(info){
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    };
    demo(subject){
        return`Today, we are learning about ${subject}.`;
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}!`;
    };
    realGrade(Student){
        
            return `${this.name} has tallied ${Student.name}'s scores. Their final grade is ${Student.grade + Math.floor(Math.random() * 21) - 10}`
             
        };
        
    };
        
    // return `${this.name} has tallied ${this.Student.name}'s scores. Their final grade is 
    // ${function(Student){return Student.grade - getRandomIntInclusive(); }}`};

/* Project Managers - child of Instructors*/

class ProjectManager extends Instructor{
    constructor(info){
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;

    };
    standUp(channel){
        return `${this.name} announces to ${channel}, "@channel standy times!"`
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }

}

/*Students - child of Person*/
class Student extends Person{
    constructor(info){
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
        this.grade = 90;
    };
    listSubjects(){
        return this.favSubjects.join(`\n`);
        }
         
    
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${this.subject}.`;
    };
    sprintChallenge(subject){
        return `${student.name} has begun a sprint challenge on ${this.subject}.`
    }
}

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

  const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

    const joscelyn = new Student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
});

  const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

  const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

    const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

    const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
});

    const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});

    const darren = new ProjectManager({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});

    const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});
const brittany = new Student ({
    name:'Brittany',
    age: '32',
    location: "Tennessee",
    previousBackground: "Preschool Teacher",
    className: 'Web21',
    favSubjects: ["JavaScript", "Literature", "Google"],
    

});
console.log(brittany.listSubjects());
console.log(brittany.speak());
console.log(austin.standUp("Web21_Austin"));
console.log(darren.debugsCode(joscelyn, "English"))
console.log(dan.demo("JavaScript"))
console.log(dan.realGrade(brittany));
console.log(dan.realGrade(brittany));
console.log(dan.realGrade(brittany));

