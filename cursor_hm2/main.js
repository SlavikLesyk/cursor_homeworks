let sumOfNumber = 0;
let currentNumber = null;

const firstNumber = parseFloat(prompt('Введіть перше ціле число N'));

while(firstNumber.isNaN || firstNumber%1 !== 0){
    firstNumber =  parseFloat(prompt('Ви ввели невірне число, повторіть спробу'));

}

const secondNumber = parseFloat(prompt('Введіть друге ціле число M'));

while(secondNumber.isNaN || secondNumber%1 !== 0){
        secondNumber =  parseFloat(prompt('Ви ввели невірне число, повторіть спробу'));
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
<p>Сума чисел : ${sumOfNumber}</p>`)


