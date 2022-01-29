// 5. 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
// **Пример: "Номер вашей карты: **********1245"**

// let userCardNumber = prompt("Номер Вашей карты?");

// document.write("Номер вашей карты: " + userCardNumber.replace(/\d(?=\d{4})/g, "*"));
// console.log("Номер вашей карты: " + userCardNumber.replace(/\d(?=\d{4})/g, "*"));

let userCardNumber = prompt('Введите номер Вашей кредитной карты: ');

alert(`Номер Вашей кредитной карты: ${userCardNumber.replace(userCardNumber.slice(0, -4), "************")}`);

console.log(`Номер Вашей кредитной карты: ${userCardNumber.replace(userCardNumber.slice(0, -4), "************")}`);


// 2nd Solution:

// let userCardNumber = prompt("Введите номер карты");
// let numSlice = userCardNumber.slice(0, 12);

// let result = userCardNumber.replace(numSlice, "************");

// console.log(`Номер вашей карты: ${result}`);