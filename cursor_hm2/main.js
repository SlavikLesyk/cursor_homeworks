let sumOfNumber = 0;
let currentNumber = null;

let firstNumber = +prompt('Введіть перше ціле число N');

while(isNaN(firstNumber) || !Number.isInteger(firstNumber)){
    firstNumber =  +prompt('Ви ввели невірне число N, повторіть спробу');

}

let secondNumber = +prompt('Введіть друге ціле число M');

while(isNaN(secondNumber) || !Number.isInteger(secondNumber) || firstNumber > secondNumber){
    firstNumber < secondNumber ?
        secondNumber =  +prompt('Ви ввели невірне число M, повторіть спробу'):
        secondNumber =  +prompt('Ви ввели M < N, повторіть спробу');

}

const onlyOdd = confirm('Пропускати парні числа?');

if (onlyOdd){

    (firstNumber%2 === 0) ? currentNumber = firstNumber + 1 : currentNumber = firstNumber; 
    while(currentNumber <= secondNumber){
        sumOfNumber = sumOfNumber + currentNumber;
        currentNumber +=2;
    }
} else {
    currentNumber = firstNumber;
    while(currentNumber <= secondNumber){
        sumOfNumber = sumOfNumber + currentNumber;
        currentNumber++;
    }
}

document.writeln(`<p>Перше число N: ${firstNumber}</p>
<p>Друге число M: ${secondNumber}</p>
<p>Пропускати парні : ${onlyOdd ? 'Так' : 'Ні'}</p>
<p>Сума чисел : ${sumOfNumber}</p>`);


