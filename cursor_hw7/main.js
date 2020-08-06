const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//////////////// #1
function getMyTaxes(salary){
    return Number((this.tax * salary).toFixed(2));
} 
//////////////// #2
function getMiddleTaxes(){
    return Number((this.tax * this.middleSalary).toFixed(2));
} 
//////////////// #3
function getTotalTaxes(){
    return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
} 

//////////////// #4
const getRandomNumber = (min, max) => Math.floor(Math.random()* (max - min + 1) + min); 

const getSalaryObj = (country) => {
    const obj = {};

    obj.salary =  getRandomNumber(1500, 2000),
    obj.taxes = +(getMyTaxes.call(country, obj.salary)).toFixed(2),
    obj.profit = +(obj.salary - obj.taxes).toFixed(2);
    
    return obj;    
} 

const getMySalary = (country) => {
    setInterval(() => {
        console.log("My salary:", getSalaryObj(country))
    }, 10000);
}

//////////////// Results
console.log("getMyTaxes.call(ukraine, 1000): ", getMyTaxes.call(ukraine, 1000));
console.log("getMyTaxes.call(latvia, 1000): ", getMyTaxes.call(latvia, 1000));
console.log("getMyTaxes.call(litva, 1000): ", getMyTaxes.call(litva, 1000));

console.log("getMiddleTaxes.call(ukraine): ", getMiddleTaxes.call(ukraine));
console.log("getMiddleTaxes.call(latvia): ", getMiddleTaxes.call(latvia));
console.log("getMiddleTaxes.call(litva): ", getMiddleTaxes.call(litva));

console.log("getTotalTaxes.call(ukraine): ", getTotalTaxes.call(ukraine));
console.log("getTotalTaxes.call(latvia): ", getTotalTaxes.call(latvia));
console.log("getTotalTaxes.call(litva): ",getTotalTaxes.call(litva));

console.log('\nWait 10 sec')
getMySalary(ukraine);
