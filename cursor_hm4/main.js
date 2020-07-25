'use strict'

const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const createPairsArray = (arr1, arr2) =>{                                              
    const pairedArray = [];
    
    if(arr1.length !== arr2.length)
        return console.log('Error: Масиви мають мати однакову довжину');
    
    for(let i = 0; i < arr1.length; i++){
        pairedArray.push([arr1[i], arr2[i]]);
    }

    return pairedArray;
}

const isGirl = (str) => (str.endsWith('ра') || str.endsWith('на'));

const separateStudents = (students) => {
    const boys = [];
    const girls = [];
    const newStudentsArr = [];

    for(let i = 0; i < students.length; i++){
        if(isGirl(students[i])){
            girls.push(students[i]);
        } else {
            boys.push(students [i]);
        }
    }
    
    newStudentsArr.push(boys);
    newStudentsArr.push(girls);

    return newStudentsArr;
}
  
const joinStudentsPairByI = (arr) => {
    const arrayOfStrings = [];
    
    for(const elem of arr){
        arrayOfStrings.push(elem.join(' і '));
    }

    return arrayOfStrings;
}

const createPairsMarkArray = (length = 3, maxMark = 5, minMark = 2) => {
    const markArray = [];

    for (let i = 0; i < length; i++){
        markArray.push(Math.floor(Math.random()*(maxMark - minMark + 1) + minMark))
    }
    
    return markArray;
}

const addLastElements = (arr, arrOfElem) => {
    const newArray = [];
    
    if(arr.length !== arrOfElem.length)
        return console.log('Error: Масиви мають бути однакової довжини')

    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i]);
        newArray[i].push(arrOfElem[i])
    }

    return newArray;
}

const getPairsStudent = (arrOfStudents) => {
    const newArr = arrOfStudents.slice();    

    return createPairsArray(separateStudents(newArr)[0], separateStudents(newArr)[1]);
}

const getStudentsTask = (arrOfPairs, arrOfThemes) => {
    const newThemesArray = [...arrOfThemes];
    const newPairsArr = copy2DArray(arrOfPairs);
    
    return createPairsArray(joinStudentsPairByI(newPairsArr), newThemesArray);
}

const getStudentsMark =(arrOfStudents, arrOfMarks) => {
    const newStudentsArray = [...arrOfStudents];
    const newMarksArray = [...arrOfMarks];
   
    return createPairsArray(newStudentsArray,newMarksArray);
}

const getPairsMark = (arrOfStudentsTask, arrOfPairsMarks) => {
    const arrPairsMark = [...arrOfPairsMarks];   
    const newStudentsTaskArr = copy2DArray(arrOfStudentsTask);
   
    return addLastElements(newStudentsTaskArr, arrPairsMark);
}

const copy2DArray = (arr) => {
    const newArr = [];

    for(const item of arr){
        newArr.push(item.slice());
    }

    return newArr;
}

const printArray = (arr) => {
    for(const i in arr){
        document.writeln(`<p>${+i + 1}: ${arr[i].join(', ')}</p>`);
    }
}

const pairs = getPairsStudent(students);
const studentsTask = getStudentsTask(pairs, themes);
const studentsMark = getStudentsMark(students, marks);
const pairsMarks = getPairsMark(studentsTask,createPairsMarkArray());

console.log('pairs:', pairs);
console.log('studentsTask:', studentsTask);
console.log('studentsMark:', studentsMark);
console.log('pairsMarks:', pairsMarks);
console.log('Оригінальні масиви:')
console.log(students);
console.log(themes);
console.log(marks);

document.writeln('<h4>Пари студентів:</h4>');
printArray(pairs);
document.writeln('<h4>Завдання для студентів: </h4>');
printArray(studentsTask);
document.writeln('<h4>Оцінки студентів:</h4>');
printArray(studentsMark);
document.writeln('<h4>Оцінки пар студентів:</h4>');
printArray(pairsMarks);

document.writeln('<h4>Оригінальні масиви</h4>');
document.writeln(`<p>${students.join(', ')}</p>`);
document.writeln(`<p>${themes.join(', ')}</p>`);
document.writeln(`<p>${marks.join(', ')}</p>`);
