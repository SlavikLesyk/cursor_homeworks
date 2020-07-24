'use strict'

const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const copy2DArray = (arr) => {
    const newArr = [];

    for(const item of arr){
        newArr.push(item.slice());
    }

    return newArr;
}

const create2DArrays = (...arr) => {
    const newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i])
    }

    return newArray;
}

const isGirl = (str) => (str.lastIndexOf('ра') === (str.length - 2) || str.lastIndexOf('на') === (str.length - 2));

const separateStudents = (students) => {
    const boys = [];
    const girls = [];
    let newStudentsArr = null;

    for(let i = 0; i < students.length; i++){
        if(isGirl(students[i])){
            girls.push(students[i]);
        } else {
            boys.push(students [i]);
        }
    }
    
    newStudentsArr = create2DArrays(boys, girls);

    return newStudentsArr;
}

const getRandomElem = (arr) => Math.floor(Math.random()*arr.length);

const takePairFromArrays = (arr, isRandom) => {                            
    let firstElem = null; 
    let secondElem = null;
    
    if (isRandom){
        firstElem = arr[0].splice(arr[0],1);
        secondElem = arr[1].splice(getRandomElem(arr[1]),1);
    } else {        
    firstElem = arr[0].splice(0, 1);
    secondElem = arr[1].splice(0, 1);
    }

    return [firstElem[0], secondElem[0]];

} 

const createPairsArray = (arr, isRandom = true) =>{                                              
    const newArray = copy2DArray(arr);
    const pairedArray = [];
    
    if(arr[0].length !== arr[1].length)
        return console.log('Error: Масиви мають мати однакову довжину');
    
    while (newArray[0].length){
        pairedArray.push(takePairFromArrays(newArray, isRandom));
    }

    return pairedArray;
}

const joinStudentsPair = (arr) => {
    const arrayOfStrings = [];
    
    for(const elem of arr){
        arrayOfStrings.push(elem.join(' і '));
    }

    return arrayOfStrings;
}

const createPairsMarkArray = (maxMark = 5, minMark = 2, length = 3) => {
    const markArray = [];

    for (let i = 0; i < length; i++){
        markArray.push(Math.floor(Math.random()*(maxMark - minMark + 1) + minMark))
    }
    
    return markArray;
}

const addLastElements = (arr, arrOfElem) => {
    const newArray = copy2DArray(arr);
    
    if(arr.length !== arrOfElem.length)
        return console.log('Error: Масиви мають бути однакової довжини')

    for(const i in newArray){
        newArray[i].push(arrOfElem[i]);
    }

    return newArray;
}

const getStudentsTask = (arrOfPairs, arrOfThemes) => {
    const newPairsArray = copy2DArray(arrOfPairs)
    const newThemesArray = [...arrOfThemes];
    
    return createPairsArray(create2DArrays(joinStudentsPair(newPairsArray), newThemesArray));
}

const getPairsStudent = (arrOfStudents) => {
    const newArr = arrOfStudents.slice();    

    return createPairsArray(separateStudents(newArr));
}

const getStudentsMark =(arrOfStudents, arrOfMarks) => {
    const newStudentsArray = [...arrOfStudents];
    const newMarksArray = [...arrOfMarks];
   
    return createPairsArray(create2DArrays(newStudentsArray,newMarksArray), false);
}

const getPairsMark = (arrOfStudentsTask, arrOfPairsMarks) => {
    const newStudentTaskArray = copy2DArray(arrOfStudentsTask);
    const arrPairsMark = [...arrOfPairsMarks];   
   
    return addLastElements(newStudentTaskArray, arrPairsMark);

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

console.log('pairs:', pairs);
console.log('studentsTask:', studentsTask);
console.log('studentsMark:', studentsMark);
console.log('pairsMarks:', pairsMarks);
console.log('Оригінальні масиви:')
console.log(students);
console.log(themes);
console.log(marks);