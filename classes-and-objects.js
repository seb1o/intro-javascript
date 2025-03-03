class Human{
    constructor(name, surname, yob, nationality, gender){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender; 
    }
    getAge(){
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }
    toString(){ 
        const humanStr = `Nome: ${this.name}
    Cognome: ${this.surname}
    Età: ${this.getAge()}
    `
    return humanStr;

    }

}



class Student extends Human {
    constructor(name, surname, yob, nationality, gender, marks =[]){
      super(name, surname, yob, nationality, gender)
        this.marks = marks;
    }

    addMark(mark){
        this.marks.push(mark)
    }

    getBestMark(){
        let best = 0;
        for (const mark of this.marks) {
            if(mark > best){
                best = mark;
            }
            
        }
        return best
    }

    calculateMean(){
        if(this.marks.length === 0){
            return -1;
        }
        let sumOfMarks = 0;

        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];

            sumOfMarks += mark;
            
        }
        const mean = sumOfMarks/ this.marks.length;
        return mean;

    }
    

    toString(){
        const studentStr = `${super.toString()}
        Media: ${this.calculateMean()}`
        return studentStr;
    }

    compareTo(otherStudent){
        const name1 = this.name;
        const name2 = otherStudent.name;

        if(name1 === name2){
            const yob1 = this.yob;
            const yob2 = otherStudent.yob;
            return yob1 - yob2;
        }
        return name1.localeCompare(name2)
    }
}


class Teacher extends Human {
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        super(name, surname, yob, nationality, gender)
        this.subject = subject;
        this.students = students;
        
    }



    toString(){
        const teacherStr = `${super.toString()}
        Materia: ${this.subject}
        Numero di studenti: ${this.students.length}`
        return teacherStr;
    }
}

const student1 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
student1.addMark(2)
const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'm', [6, 6]);
console.log(student1 + '');
console.log(student2.toString());

const students = [student1, student2];

const teacher = new Teacher('andrea', 'asioli', 1978, 'it', 'm', 'CS', students)
console.log(teacher)
console.log(teacher.toString())
students.sort((s1,s2) => s1.compareTo(s2));
console.log(students)
console.log(student1.getBestMark())