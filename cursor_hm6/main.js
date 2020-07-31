const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];

////////// #1
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const addSpace = (str) => {
      const newStr = str.replace('_', ' ');
      
      if (newStr === str){
          
        return newStr;
      } else{
          
        return addSpace(newStr)
      }
}

const getSubjects = (obj) => Object.keys(obj.subjects).map((elem) => addSpace(capitalize(elem)));

////////// #2
const allSubjectsMarks = (obj) => Object.values(obj.subjects).join(',').split(',');

const sumArray = (arr) => arr.reduce((sum, elem) => +sum + +elem);

const getAverage = (arr) => (sumArray(arr) / arr.length).toFixed(2);

const getAverageMark = (obj) =>  getAverage(allSubjectsMarks(obj));

////////// #3
const getStudentInfo = (obj) => {
    return {
        course: obj.course,
        name: obj.name,
        averageMark: getAverageMark(obj)
    }
}

////////// #4
const getStudentsNames = (arr) => arr.map((elem) => elem.name);

////////// #5
const getStudentsMarks = (arr) => arr.map((elem) => +getAverageMark(elem));

const getBestStudent = (arr) => students[getStudentsMarks(arr).indexOf(Math.max(...(getStudentsMarks(arr))))].name;

////////// #6
const calculateWordLetters = (str) => {
    const lettersObj = {};
    
    for(elem of str){
        let key = elem.toLowerCase();

        if(lettersObj[key]){
            lettersObj[key]++;
        } else {
            lettersObj[key] = 1;
        }
    }

    return lettersObj;
}

console.log('getSubjects(students[0]): \n', getSubjects(students[0]));
console.log('getSubjects(students[1]): \n', getSubjects(students[1]));
console.log('getSubjects(students[2]): \n', getSubjects(students[2]));

console.log('getAverageMark(students[0]): \n', getAverageMark(students[0]));
console.log('getAverageMark(students[1]): \n', getAverageMark(students[1]));
console.log('getAverageMark(students[2]): \n', getAverageMark(students[2]));
  
console.log('getStudentInfo(students[0]): \n', getStudentInfo(students[0]));
console.log('getStudentInfo(students[1]): \n', getStudentInfo(students[1]));
console.log('getStudentInfo(students[2]): \n', getStudentInfo(students[2]));
  
console.log('getStudentsNames(students): \n', getStudentsNames(students));
console.log('getBestStudent(students): \n', getBestStudent(students));
console.log('calculateWordLetters("test"): \n', calculateWordLetters('Prist'));
