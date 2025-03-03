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
    Nationality: ${this.nationality}
    Gender: ${this.gender}
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
    bestStudent(){
        let bestStudent; 
        let bestMean = 0;
        for (const student of this.students) {
            const currentStudMean = student.calculateMean();

            if(currentStudMean > bestMean){
                bestStudent = student;
                bestMean = currentStudMean;
                
            }
            
        }
        return bestStudent
    }

    studentMean(){
        let sumOfMeans = 0;
        for (const student of this.students) {
            sumOfMeans += student.calculateMean()
            
            
        }
        const meanOfSumOfMeans = sumOfMeans/this.students.length
        return meanOfSumOfMeans
    }



    toString(){
        const teacherStr = `${super.toString()}
        Materia: ${this.subject}
        Numero di studenti: ${this.students.length}`
        return teacherStr;
    }
}

class Principal extends Human {
    constructor(name, surname, yob, nationality, gender, schoolName, teachers = []) {
        super(name, surname, yob, nationality, gender);
        this.schoolName = schoolName;
        this.teachers = teachers

}
bestTeacher(){

}
bestStudent(){
    let bestStudent; 
        let bestMean = 0;
        for (const teacher of this.teachers) {
            for (const student of this.students) {
                
            }
            const currentStudMean = student.calculateMean();

            if(currentStudMean > bestMean){
                bestStudent = student;
                bestMean = currentStudMean;
                
            }
            
        }
        return bestStudent
}
}


const student1 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);

const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'm', [6, 6]);
const students = [student1, student2];
const teacher = new Teacher('andrea', 'asioli', 1978, 'it', 'm', 'CS', students)
const bestStudent = teacher.bestStudent(); 
const studentMean = teacher.studentMean();
console.log('the best student is :', bestStudent.toString())
console.log('StudentsMean is :', studentMean)

console.log(student1.toString())

//1) aggiungere al toString di tutte le classi gender e nationality


//2)aggiungere a teacher le funzioni : bestStudent e StudentsMean
//3) aggiungere la classe Principal che erediterà da human e come caratteristiche avrà:
// - un array di teacher
// -il nome della scuola
//4)aggiungere al principal due funzioni: bestTeacher e bestStudent

