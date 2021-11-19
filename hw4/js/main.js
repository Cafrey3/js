// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle(a, b) {
//     let summ = a * b;
//     return summ;
// }
// console.log(rectangle(5, 5));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function round(a,b) {
//     let r = a * b
//     Math.pow(b, 2);
//     return r;
// }
//
// console.log(round(3.14, 5));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// function cylinder(a, b, c) {
//     let sCylinder = 2 * a * b * c + 2 * a * b * 2;
//     return sCylinder;
// }
// console.log(cylinder(3.14,5,10));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [22, 33, 44, 55, 66, 77, 88, 99];
// function elements() {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// elements()



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(arg1) {
//     document.write(`<p>${arg1}</p>`);
// }
// paragraph('some text');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// list('text for li')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list2(text, size) {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//     document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list2('list text', 10)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [false, 33, 'ibrahimovich', true, 66, 77, 'book', 99, 'zlatan'];
// function bigList() {
//     document.write(`<ul>`);
// for (const item of arr) {
//     document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// bigList();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31,},
//     {id: 2, name: 'petya', age: 30,},
//     {id: 3, name: 'kolya', age: 29,},
//     {id: 4, name: 'olya', age: 28,}
// ];
//
// function blocks() {
//     for (const item of users) {
//          document.write(`<div>`);
//         document.write(`${item.id} - ${item.name} - ${item.age} `);
//         document.write(`</div>`);
//     }
// }
//
// blocks();

//CLASSWORK -------------------------------- CLASSWORK -----------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function lowNum(a,b,c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < c && b < a) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// lowNum(10,20,30);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function highNum(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// highNum(100, 200, 300);



// - створити функцію яка повертає найбільше число з масиву
// let arr = [1000, 2000, 3000];
// function arrHighNum() {
//     for (const number of arr) {
//         if (arr[0] > arr[1] && arr[0] > arr[2]) {
//             console.log(arr[0]);
//         } else if (arr[1] > arr[0] && arr[1] > arr[2]) {
//             console.log(arr[1]);
//         } else {
//             console.log(arr[2])
//         }
//         }
// }
// arrHighNum()



// - створити функцію яка повертає найменьше число з масиву
// let arr2 = [1000, 2000, 3000];
// function arr2lowNum() {
//     for (const number of arr2) {
//         if (arr2[0] < arr2[1] && arr2[0] < arr2[2]) {
//             console.log(arr[0]);
//         } else if (arr2[1] < arr2[0] && arr2[1] < arr2[2]) {
//             console.log(arr2[1]);
//         } else {
//             console.log(arr2[2]);
//         }
//     }
// }
// arr2lowNum()


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr3 = [1000, 2000, 3000, 4000]; // 10 000
// function summNum() {
//     let result = 0;
//     for (const number of arr3) {
//         result += number;
//     }
//     console.log(result);
//     return result;
// }
// summNum();



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr3 = [100, 200, 300, 400, 500];
// function middleNum() {
//     let result = 0;
//     for (const number of arr3) {
//         result += number / arr3.length;
//     }
//     console.log(result)
//     return result
// }
//
// middleNum();



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arr3 = [100, 200, 300, 400, 500];
// function numbers() {
//     min = 0;
//     max = 0;
//     for (const number of arr3) {
//         if (number < min) {
//             min = number;
//         }
//         if (number > max) {
//             max = number;
//         }
//     }
//     console.log(max);
//     return min;
// }
// numbers();
//


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//






