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
    if(num === 0 && exp !== 0)
        return 0;

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
    const dollarRate = 25;

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

const deleteLetters = (letter, string, isUpper = false) => {
    let newString = string;
    
    isUpper ? newString = newString.replace(letter.toUpperCase(),'') : newString = string.replace(letter.toLowerCase(),'');

    if (newString !== string && !isUpper)
        return deleteLetters(letter, newString);
    else if(newString === string && !isUpper)
        return deleteLetters(letter, newString, true);
    else if(newString !== string && isUpper)
        return deleteLetters(letter, newString, true);
    else (newString === string && isUpper)
        return newString;
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

const getMaxDigitNum = 3256342;
const toExponentNum = 2;
const toExponentExp = 5;
const toUpperCaseFirstLettersStr = 'тіЛЬки пеРШі ліТЕрИ '
const getSelarySel =  1000;
const getSelaryTax1 = 30;
const getSelaryTax2 = 1.5;
const getRandomNumberMin = 1;
const getRandomNumberMax = 10;
const countLetterLet = 'B';
const countLetterStr = 'Wubba Lubba dub-dub';
const convertCurrencyMon = '100$';
const deleteLettersLet = 'u';
const deleteLettersStr = 'Wubba Lubba dub-dub';
const isPalyndromStr = 'Я несу гусеня';
const deleteDuplicateLetterStr = 'Бісквіт був дуже ніжним';

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