const PRICE_FRUITS = 15.678, PRICE_MEAT = 123.965, PRICE_FISH = 90.2345, COSTUMERS_MONEY = 500;
let sumPrices = null, sumTruncPrices = null;
let randomDiscount =Math.floor(Math.random()*101);
sumPrices = PRICE_FRUITS + PRICE_MEAT + PRICE_FISH;
sumTruncPrices =  Math.trunc(PRICE_FRUITS) + Math.trunc(PRICE_MEAT) + Math.trunc(PRICE_FISH);

//////////////BASE

console.log(Math.max(PRICE_FRUITS, PRICE_MEAT, PRICE_FISH));
console.log(Math.min(PRICE_FRUITS, PRICE_MEAT, PRICE_FISH));
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
    <p>Максимальна ціна: ${Math.max(PRICE_FRUITS, PRICE_MEAT, PRICE_FISH)}</p>
    <p>Мінімальна ціна: ${Math.min(PRICE_FRUITS, PRICE_MEAT, PRICE_FISH)}</p>
    <p>Вартість всіх товарів: ${sumPrices}</p>
    <p>Ціна округлена до меншого: ${sumTruncPrices}</p>
    <p>Ціна округлена до сотень: ${Math.ceil(sumPrices/100) * 100}</p>
    <p>Чи вартість всіх товарів округлена до меншого парна?: ${sumTruncPrices%2 === 0}</li>
    <p>Решта з 500: ${(COSTUMERS_MONEY - sumPrices.toFixed(2))}</p>
    <p>Середнє значення цін: ${(sumPrices/3).toFixed(2)}</p>
    <p>Знижка: ${randomDiscount}%</p>
    <p>Сума до оплати зі знижкою: ${(sumPrices - sumPrices*randomDiscount/100).toFixed(2)}</p>
    <p>Прибуток: ${(sumPrices/2 - sumPrices*randomDiscount/100).toFixed(2)}</p>`);