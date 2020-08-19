const result = document.getElementById('result');
const time = document.getElementById('time');

const STEP = 50;

const getRandomChar = () => String.fromCharCode(+String(Date.now()).slice(-5));

const getRandomChinese = (length) =>{
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
            str += getRandomChar()
            resolve(str)}
            , STEP)          
    })
};

////////////////   Result
const dataStart = Date.now();
const chineseString = getRandomChinese(5);

chineseString.then(res => result.innerText =`Result: ${res}`);
chineseString.then(() => time.innerText = `Function Duration: ${(Date.now() - dataStart)}`);