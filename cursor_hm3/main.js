const getMaxDigit = (number) => {
    let currentNumber = null;
    let maxNumber = 0;
    const divider = 10;

    while (number > 1){
        currentNumber = number % divider;
        number = Math.floor(number / divider);
        if(maxNumber < currentNumber){ 
        maxNumber = currentNumber
        }   
    }

    return maxNumber;
}

const toExponent = (num, exp) => {
    let result = 1;
    let positiveExp = null;

    exp < 0 ? positiveExp = exp * -1 : positiveExp = exp;

    for (let i = 0; i < positiveExp; i++){
        result = result * num;
    }

    if (exp < 0){
        return 1/result;
     } else{
         return result;
     }
}

const toUpperCaseFirstLetters = (string) => {
    changedString = string.toLowerCase().split('');
    changedString[0]= changedString[0].toUpperCase();

    for (let i = 1; i < changedString.length - 1; i++){
        if (changedString[i] === ' '){
            changedString[i + 1] = changedString[i + 1].toUpperCase();
        }
    }

    changedString = changedString.join('');
    return changedString;
}

const getSelary = (salary, ...tax) => {
    let sumOfTax = 0;

    for (let i = 0; i < tax.length; i++){
        sumOfTax = sumOfTax + salary * tax[i] / 100;
    }

    return salary - sumOfTax;
}

const getRandomNumber = (minNumber, maxNumber) => Math.floor( Math.random() * (maxNumber - minNumber + 1) + minNumber);

const countLetter = (letter, string) => {
    let stringArray = string.toLowerCase().split('');
    let letterCount = 0;
    
    for (let i = 0; i < stringArray.length; i++){
        if( stringArray[i] === letter.toLowerCase())
            letterCount++;
    }

    return letterCount;
}

const convertCurrency = (money) =>{
    let moneyString = money.toLowerCase();
    let dollarRate = 25;

    if(moneyString.indexOf('$') === -1 && moneyString.indexOf('uah') === -1){
        return 'not UAH and not $';
    } else if(moneyString.indexOf('$') !== -1){
        return +moneyString.replace('$','')*dollarRate + 'UAH';
    } else {
        return +moneyString.replace('uah','')/dollarRate + '$';
    }
}

const getRandomPassword = (length = 8) => {
    let password = '';
    for (let i = 0; i < length; i++){
        password = password + Math.floor(Math.random()*10);
    }

    return password;
}

const deleteLetters = (letter, string) => {
    let newString = string.replace(letter.toLowerCase(),'');
    newString = newString.replace(letter.toUpperCase(),'');
    if (newString === string)
        return newString;
    else 
        return deleteLetters(letter, newString);
}

const isPalyndrom = (string) => {    
    let newString = deleteLetters(' ', string);
    for(let i = 0; i < newString.length/2; i++){
        if (newString[i].toLowerCase() !== newString[(newString.length - i - 1)].toLowerCase()){
            return false;
        }
    }
    return true;
}

const deleteDuplicateLetter = (string) => {
    let newString = string;

    for(let n = 0; n < newString.length - 1; n++ ){
        for(let i = n + 1 ; i < newString.length; i++){            
            if(newString[n].toLowerCase() === newString[i].toLowerCase()){
                newString = deleteLetters (newString[i], newString);
                return deleteDuplicateLetter(newString);
            }
        }
    }
    return newString;
}

let getMaxDigitNum = 3256342;
let toExponentNum = 2;
let toExponentExp = 5;
let toUpperCaseFirstLettersStr = 'тіЛЬки пеРШі ліТЕрИ '
let getSelarySel =  1000;
let getSelaryTax1 = 30;
let getSelaryTax2 = 1.5;
let getRandomNumberMin = 1;
let getRandomNumberMax = 10;
let countLetterLet = 'B';
let countLetterStr = 'Wubba Lubba dub-dub';
let convertCurrencyMon = '100$';
let deleteLettersLet = 'u';
let deleteLettersStr = 'Wubba Lubba dub-dub';
let isPalyndromStr = 'Я несу гусеня';
let deleteDuplicateLetterStr = 'Бісквіт був дуже ніжним';

document.writeln(`
<h3>Функція №1: getMaxDigit(${getMaxDigitNum})</h3>
<p>Результат: ${getMaxDigit(getMaxDigitNum)}</p>

<h3>Функція №2: toExponent(${toExponentNum}, ${toExponentExp})</h3>
<p>Результат: ${toExponent(toExponentNum, toExponentExp)}</p>

<h3>Функція №3: toUpperCaseFirstLetters(${toUpperCaseFirstLettersStr})</h3>
<p>Результат: ${toUpperCaseFirstLetters(toUpperCaseFirstLettersStr)}</p>

<h3>Функція №4: getSelary(${getSelarySel}, ${getSelaryTax1}, ${getSelaryTax2})</h3>
<p>Результат: ${getSelary(getSelarySel, getSelaryTax1, getSelaryTax2)}</p>

<h3>Функція №5: getRandomNumber(${getRandomNumberMin}, ${getRandomNumberMax})</h3>
<p>Результат: ${getRandomNumber(getRandomNumberMin, getRandomNumberMax)}</p>

<h3>Функція №6: countLetter(${countLetterLet}, ${countLetterStr})</h3>
<p>Результат: ${countLetter(countLetterLet, countLetterStr)}</p>

<h3>Функція №7: convertCurrency(${convertCurrencyMon})</h3>
<p>Результат: ${convertCurrency(convertCurrencyMon)}</p>

<h3>Функція №8: getRandomPassword()</h3>
<p>Результат: ${getRandomPassword()}</p>

<h3>Функція №9: deleteLetters(${deleteLettersLet}, ${deleteLettersStr})</h3>
<p>Результат: ${deleteLetters(deleteLettersLet, deleteLettersStr)}</p>

<h3>Функція №10: isPalyndrom(${isPalyndromStr})</h3>
<p>Результат: ${isPalyndrom(isPalyndromStr)}</p>

<h3>Функція №11: deleteDuplicateLetter(${deleteDuplicateLetterStr})</h3>
<p>Результат: ${deleteDuplicateLetter(deleteDuplicateLetterStr)}</p>
`);





console.log(getMaxDigit(3256342));
console.log(toExponent(2,3));
console.log(toUpperCaseFirstLetters('fhGGfdsh asfhj09 1sGDS a'));
console.log(getSelary(1000, 20, 1.5));
console.log(getRandomNumber(1, 100));
console.log(countLetter("А", "Асталавіста"));
console.log(convertCurrency('100$'));
console.log(deleteLetters('a', "blablabla"))
console.log(getRandomPassword());
console.log(isPalyndrom("Я несу гусеня"));
console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"))