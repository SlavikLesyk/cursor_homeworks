const priceFruits = 15.678, priceMeat = 123.965, priceFish = 90.2345;
let sumPrices = null, sumTruncPrices = null;
let randomDiscount =Math.floor(Math.random()*101);
sumPrices = priceFruits + priceMeat + priceFish;
sumTruncPrices =  Math.trunc(priceFruits) + Math.trunc(priceMeat) + Math.trunc(priceFish);

//////////////BASE

console.log(Math.max(priceFruits, priceMeat, priceFish));
console.log(Math.min(priceFruits, priceMeat, priceFish));
console.log(sumPrices);
console.log(sumTruncPrices);
console.log(Math.round(sumPrices/100) * 100);
console.log(sumTruncPrices%2 === 0);
console.log((500 - sumPrices.toFixed(2)));
console.log((sumPrices/3).toFixed(2));
console.log(randomDiscount);
console.log((sumPrices - sumPrices*randomDiscount/100).toFixed(2));
console.log((sumPrices/2 - sumPrices*randomDiscount/100).toFixed(2));

//////////////ADVANCED
document.writeln(`
    <p>Максимальна ціна: ${Math.max(priceFruits, priceMeat, priceFish)}</p>
    <p>Мінімальна ціна: ${Math.min(priceFruits, priceMeat, priceFish)}</p>
    <p>Вартість всіх товарів: ${sumPrices}</p>
    <p>Ціна округлена до меншого: ${sumTruncPrices}</p>
    <p>Ціна округлена до сотень: ${Math.round(sumPrices/100) * 100}</p>
    <p>Чи вартість всіх товарів округлена до меншого парна?: ${sumTruncPrices%2 === 0}</li>
    <p>Решта з 500: ${(500 - sumPrices.toFixed(2))}</p>
    <p>Середнє значення цін: ${(sumPrices/3).toFixed(2)}</p>
    <p>Знижка: ${randomDiscount}%</p>
    <p>Сума до оплати зі знижкою: ${(sumPrices - sumPrices*randomDiscount/100).toFixed(2)}</p>
    <p>Прибуток: ${(sumPrices/2 - sumPrices*randomDiscount/100).toFixed(2)}</p>`);