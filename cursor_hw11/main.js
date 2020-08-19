const result = document.getElementsByClassName('result');
const time = document.getElementsByClassName('time');

const STEP = 50;

const drawResult = (cb, arg, index) =>{
    const dataStart = Date.now();
    const chineseString = cb(arg);

    chineseString.then(res => result[index].innerText =`Result: ${res}`);
    chineseString.then(() => time[index].innerText = `Function Duration: ${(Date.now() - dataStart)}`);
};

////////////////    Version 1
const getRandomChinese1 = (length) =>{

    return new Promise((resolve) => {
        let sign = +String(Date.now()).slice(-5);
        let str = '';
        
        for (let i = 0; i < length; i++){
            sign += STEP;   
            str += String.fromCharCode(sign);
        }  
          
        setTimeout(() =>{
            resolve(str)}
            , length * STEP)
    })
};

////////////////   Result 1
drawResult(getRandomChinese1, 5, 0);


////////////////    Version 2
const getRandomChar = () => String.fromCharCode(+String(Date.now()).slice(-5));

const getPromises = (length) =>{
    const promiseArray = new Array(length)
    .fill(null)
    .map((elem ,index) => elem = new Promise((resolve, reject) => setTimeout(() => resolve(getRandomChar()), (index + 1) * STEP)));

    return promiseArray
};

const getRandomChinese2 = (length) => Promise.all(getPromises(length)).then(res => res.join(''));

////////////////   Result 2
drawResult(getRandomChinese2, 5, 1);


////////////////    Version 3  Найбільш наближена версія до опису дз, але найбільш повільна
// const getRandomChar = () => String.fromCharCode(+String(Date.now()).slice(-5));     //така сама функція як в другому варіанті 

const getRandomChinese3 = (length) =>{
        let promise = getRandomString(str = "");
        for(let i = 0; i < length - 1; i++){
            promise = promise.then(res => {
                return getRandomString(res)})
        }
        
        return promise;    
};

const getRandomString = (str) =>{
    return new Promise((resolve) => { 
        setTimeout(() =>{
            resolve(str += getRandomChar())}
            , STEP)          
    })
};

////////////////   Result 3
drawResult(getRandomChinese3, 5, 2);