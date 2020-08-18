const result = document.getElementsByClassName('result');
const time = document.getElementsByClassName('time');

const STEP = 50;

////////////////    Version 1
const getRandomChinese1 = (length) =>{

    return new Promise((resolve) => {
        let sign = +String(Date.now()).slice(-5);
        let str = '';
        
        for (let i = 0; i < length; i++){
            str += String.fromCharCode(sign);
            sign +=STEP;           
        }  
          
        setTimeout(() =>{
            resolve(str)}
            , length * STEP)
    })
}

////////////////   Result 1
const dataStart1 = Date.now();
const chineseString1 = getRandomChinese1(5);

chineseString1.then(res => result[0].innerText =`Result: ${res}`);
chineseString1.then(() => time[0].innerText = `Function Duration: ${(Date.now() - dataStart1)}`);


////////////////    Version 2
const getRandomChar = () => String.fromCharCode(+String(Date.now()).slice(-5));

const getPromises = (length) =>{
    const promiseArray = new Array(length)
    .fill(null)
    .map((elem ,index) => elem = new Promise((resolve, reject) => setTimeout(() => resolve(getRandomChar()), (index + 1) * STEP)));

    return promiseArray
}

const getRandomChinese2 = (length) =>{ 
    return Promise.all(getPromises(length)).then(res => res.join(''));
}

////////////////   Result 2
const dataStart2 = Date.now();
const chineseString2 = getRandomChinese2(5);

chineseString2.then(res => result[1].innerText =`Result: ${res}`);
chineseString2.then(() => time[1].innerText = `Function Duration: ${(Date.now() - dataStart2)}`);



