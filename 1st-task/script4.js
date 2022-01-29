// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

const souvenirWeight = 75;
const baubleWeight = 112;

let souvenirAmount = prompt("How many souvenirs did you buy?"),
    baubleAmount = prompt("How many baubles did you buy?");

let sum = (souvenirWeight * souvenirAmount + baubleWeight * baubleAmount);

alert(`The total weight of your package: ${sum} grams`);
document.write(`The total weight of your package: ${sum} grams`);
console.log(`The total weight of your package: ${sum} grams`);

