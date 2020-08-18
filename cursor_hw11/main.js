const result = document.getElementsByClassName('result');
const time = document.getElementsByClassName('time');

const STEP = 50;

////////////////    Version 1
const getRandomChinese1 = (length) =>{

    return new Promise((resolve) => {
        let sign = +String(Date.now()).slice(-5);
        let str = '';
        
        for (let i = 0; i < length; i++){
            sign +=STEP; 
            str += String.fromCharCode(sign);
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


////////////////    Version 3  Найбільш наближений до опису дз
// const getRandomChar = () => String.fromCharCode(+String(Date.now()).slice(-5));     //така сама функція як в другому прикладі

const getRandomChinese3 = (length) =>{
        promise = getRandomChar(str = "");
        for(let i = 0; i < length - 1; i++){
            promise = promise.then(res => {

                return getRandomString(res)})
        }
        
        return promise.then(res => res);    
}

const getRandomString = (str) =>{
    
    return new Promise((resolve) => { 
        str += generateRandomChar(); 
        setTimeout(() =>{
            resolve(str)}
            , STEP)          
    })
}

////////////////   Result 3
const dataStart3 = Date.now();
const chineseString3 = getRandomChinese2(5);

chineseString3.then(res => result[2].innerText =`Result: ${res}`);
chineseString3.then(() => time[2].innerText = `Function Duration: ${(Date.now() - dataStart3)}`);
