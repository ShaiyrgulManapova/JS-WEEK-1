// 1. Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let str = 'ddd@bbb@ccc';
replacedStr = str.replace(/@/g, '!');

document.write((str) + "<br>" + (replacedStr));

console.log(str);
console.log(replacedStr);
