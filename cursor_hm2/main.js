let sumOfNumber = 0;
let currentNumber = null;

let firstNumber = +prompt('Введіть перше ціле число N');

while(true){
    if (isNaN(firstNumber)){
        firstNumber = +prompt('Ви ввели стрічку, введіть число N');
    } else if (!Number.isInteger(firstNumber)){
        firstNumber = +prompt('Число має бути цілим, введіть число N ще раз')
    } else 
        break;       
}

let secondNumber = +prompt('Введіть друге ціле число M');

while(true){
    if (isNaN(secondNumber)){
        secondNumber = +prompt('Ви ввели стрічку, введіть число M');
    } else if (!Number.isInteger(secondNumber)){
        secondNumber = +prompt('Число має бути цілим, введіть число M ще раз')
    } else if (firstNumber > secondNumber){
        secondNumber = +prompt('Число M має бути більшим за N, введіть число M ще раз')
    }else
        break;      
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


