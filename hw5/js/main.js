// Всі функції повинні бути описані стрілочним типом!!!!

//  - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangle = (a, b) => a * b;

// console.log(rectangle(10,20))


// - створити функцію яка обчислює та повертає площу кола

// let round = (a, b) => {
//     let s = a * b;
//     Math.pow(b, 2);
//     return s;
// }
// console.log(round(3.14, 5));


// - створити функцію яка обчислює та повертає площу циліндру

// let cylinder = (a, b, c) => 2 * a * b * c + 2 * a * b * 2;
//
// console.log(cylinder(3.14, 5, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [22, 33, 44, 55, 66, 77, 88, 99];
// let nums = () => {
//     for (const num of arr) {
//         console.log(num);
//     }
// }
// nums();


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let createP = (arg) => document.write(`<p>${arg}</p>`);
//
// createP('text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let createLi = (li_text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${li_text}</li>`);
//     document.write(`<li>${li_text}</li>`);
//     document.write(`<li>${li_text}</li>`);
//     document.write(`</ul>`);
// }
// createLi('li text');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let createUl = (text, size) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
//
// }
//
// createUl('li text', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [false, 33, 'ibrahimovich', true, 9, 11, 'milan', 21, 'zlatan'];
// let elements = ()=>{
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// elements();


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31,},
//     {id: 2, name: 'petya', age: 30,},
//     {id: 3, name: 'kolya', age: 29,},
//     {id: 4, name: 'olya', age: 28,}
// ];
//
// let userCount = () => {
//     for (const user of users) {
//         document.write(`<div>`);
//         document.write(`${user.id} - ${user.name} - ${user.age}`);
//         document.write(`</div>`);
//     }
// };
//
// userCount();


//CLASSWORK -------------------------------- CLASSWORK -----------------------------------------------------------------


// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let lowestNum = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// };
// lowestNum(100, 200, 300);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let highestNum = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// };
// highestNum(100, 200, 300);


// - створити функцію яка повертає найбільше число з масиву

// let arr = [1000, 2000, 3000];
// let arrNum = () => {
//     if (arr[0] > arr[1] && arr[0] > arr[2]) {
//         console.log(arr[0]);
//     } else if (arr[1] > arr[0] && arr[1] > arr[2]) {
//         console.log(arr[1]);
//     } else {
//         console.log(arr[2]);
//     }
// };
// arrNum();


// - створити функцію яка повертає найменьше число з масиву

// let arr = [100, 200, 300];
// let arrNum = () => {
//     if (arr[0] < arr[1] && arr[0] < arr[2]) {
//         console.log(arr[0]);
//     } else if (arr[1] < arr[0] && arr[1] < arr[2]) {
//         console.log(arr[1]);
//     } else {
//         console.log(arr[2]);
//     }
// };
// arrNum();



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [100, 200, 300];
// let sumNum = () => {
//     let result = 0;
//     for (const number of arr) {
//         result += number;
//     }
//     console.log(result);
//     return result;
// };
// sumNum();



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrMid = [10, 20, 30, 40, 50];
// let middle = () => {
//     let result = 0;
//     for (const number of arrMid) {
//         result += number / arrMid.length;
//     }
//     console.log(result);
//     return result;
// };
// middle();



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let anyNum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//
// let number = () => {
//     let min = 0;
//     let max = 0;
//     for (const item of anyNum) {
//         if (item < min) {
//             min = item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//     console.log(max);
//     return min;
// };
//
// number();

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arrEmpty = [];
//
// let arrFill = () => {
//     for (let i = 0; i < 20; i++) {
//         let filler = Math.round(Math.random() * 100);
//         arrEmpty += filler;
//         console.log(arrEmpty);
//     }
// };
//
//arrFill();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arrForNum = [];
//
// let fillerFunc = (size, limit) => {
//     for (let i = 0; i < size; i++) {
//         let filler = Math.round(Math.random() * limit);
//         arrForNum += filler;
//     }
// };
//
// fillerFunc(20, 100);
// console.log(arrForNum);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arrRev = [1, 2, 3];
//
// let reverse = () => {
//     let newArr = [];
//     for (let i = 0, ri = arrRev.length - 1; i < arrRev.length; i++, ri--) {
//         newArr[ri] = arrRev[i];
//     }
//     console.log(newArr);
//
// };
//
// reverse();

