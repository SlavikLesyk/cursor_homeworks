class Student{
    constructor(university, course, fullName, studentMarks = []){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = studentMarks;
        this._archiveMarks = null;
    };

    getInfo(){
        return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`
    };

    get marks(){
        return this.studentMarks;
    }

    set marks(mark){
        if(this.studentMarks)
        this.studentMarks.push(mark);
    }

    getAverageMark(){
        if(this.studentMarks){
            return this.studentMarks.reduce((total, mark) =>{
                return total = total + mark;
            },0)/this.studentMarks.length;
        } 

        return null;
    }
    
    dismis(){
        this._archiveMarks = this.studentMarks;
        this.studentMarks = null;
        
        return this;
    }

    recover(){
        this.studentMarks = this._archiveMarks;
        this._archiveMarks = null;

        return this;   
    }
}

class BudgetStudent extends Student{    
    constructor(university, course, fullName, studentMarks = []) {
        super(university, course, fullName, studentMarks);
        
        this.studentMarks = studentMarks;
        this.getScholarship();
    }

    getScholarship () {     
        if(super.getAverageMark() >=  4 && this.studentMarks){
        console.log('Ви отримали 1400 грн. стипендії');
    }
                    
        return setTimeout(() =>{ this.getScholarship()            
        }, 30000);   
    }

}

/////////////// Результати

const ostap = new Student('НУ"ЛП"', 1, 'Остап Бендер',[5, 4, 4, 5]);

console.log("Інформація про студента:", ostap.getInfo());
console.log("Оцінки студента", ostap.marks);
console.log("Студент получив оцінку: 5");
ostap.marks = 5;
console.log("Оцінки студента", ostap.marks);
console.log("Середній бал:", ostap.getAverageMark());
console.log("Студента виключено");
ostap.dismis();
console.log("Оцінки студента", ostap.marks);
console.log("Студента відновлено")
ostap.recover();
console.log("Оцінки студента", ostap.marks);

console.log('\n');

const ihor = new BudgetStudent('НУ"ЛП"', 1, 'Ігор Відмінник',[5, 5, 4, 5]);

console.log("Бюджетний студент:", ihor.getInfo());

