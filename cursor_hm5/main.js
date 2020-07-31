'use strict'

///////////  #1
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArray = (length, min, max) => {
    const randomArray= [];

    for(let i = 0; i < length; i++){
        randomArray.push(getRandomNumber(min, max));
    }

    return randomArray;
}

///////////  #2
const filterIsInteger = (arr) => arr.filter(elem => Number.isInteger(elem));

const getModa = (...numbers) => {
    const sortedNum = filterIsInteger(numbers.sort((a, b) => a - b));
    let moda = [];
    let counter = 1;
    let maxCount = 1;

    for(let i = 0; i < sortedNum.length; i++){

        if(counter === maxCount){
            moda.push(numbers[i]);
        }

        if(counter > maxCount){
            maxCount = counter;
            moda = [numbers[i]];
        }
                
        numbers[i] !== numbers[i + 1] ? counter = 1 : counter++;
    }   

    return moda;
}

///////////  #3
const sumArray = (arr) => arr.reduce((sum, elem) => sum + elem);

const getAverage = (...numbers) => sumArray(filterIsInteger(numbers)) / filterIsInteger(numbers).length;

///////////  #4
const getMedian = (...numbers) => {
    const sortedNum = filterIsInteger(numbers.sort((a, b) => a - b));

    if(Number.isInteger(numbers.length / 2)){

        return (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
    } else {

        return numbers[Math.floor(numbers.length / 2)]
    }
}

///////////  #5
const filterEvenNumbers = (...numbers) => numbers.filter(elem => !Number.isInteger(elem / 2));

///////////  #6
const filterPositiveNumbers = (arr) => arr.filter(elem => elem > 0);

const countPositiveNumbers = (...numbers) => filterPositiveNumbers(numbers).length;

///////////  #7
const getDividedByFive = (...numbers) => numbers.filter(elem => Number.isInteger(elem / 5));

///////////  #8
const badWordsCheck = (word) => {
    const badWords = ['shit', 'fuck'];

    return badWords.find((elem) => word.toLowerCase().indexOf(elem) !== -1);
};

const replaceBadWords = (string) =>{
    const stringArr = string.split(' ');
    
    return stringArr.map(elem => {
        if(badWordsCheck(elem)){
            return elem.toLowerCase().replace(badWordsCheck(elem), '****');
        }

        return elem;

    }).join(' ');    
};

///////////  #9
const divideByThree = (string) =>{
    const dividedArr = [];
    let stringOfThree = '';

    for (let i = 0; i < string.length; i++){

        if (string[i] === ' ' && i !== string.length - 1){
            continue;
        } else if(string[i] === ' ' && i === string.length - 1){
            dividedArr.push(stringOfThree);
            break; 
        }

        stringOfThree = stringOfThree + string[i].toLowerCase();

        if(stringOfThree.length === 3){
            dividedArr.push(stringOfThree);
            stringOfThree = '';
        } else if(i === string.length - 1){
            dividedArr.push(stringOfThree);            
        }
    }

    return dividedArr;
}

///////////  #10
const generateCombinations = (str) => {
    let result = [];
    const strArr = str.split('')
    
    const generator = (arr, combinationArr = []) => {
        if (arr.length === 0) {
        result.push(combinationArr.join(''));
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
   
          generator(curr.slice(), combinationArr.concat(next));
       }
     }
   }

   generator(strArr);
   return result;
  }

///////////  RESULT
console.log('getRandomArray(15, 1, 100):\n', getRandomArray(15, 1, 100));
console.log('getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2):\n', getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): \n', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): \n', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6): \n', filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6): \n', countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.log('getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): \n', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('replaceBadWords("Are you fucking kidding? Shit!"): \n', replaceBadWords("Are you fucking kidding? Shit!"));
console.log('divideByThree("Comma nders"): \n', divideByThree("Comma nders"));
console.log('generateCombinations("from"): \n', generateCombinations('from'))