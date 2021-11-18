// 1. Створити пустий масив та :


//     a. заповнити його 50 парними числами за допомоги циклу.
// let arrEmpty = [];
// for (let i = 1; i < 50; i+=2) {
//         arrEmpty[i] = i + 1;
// }
// console.log(arrEmpty);

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arrEmpty = [];
// for (let i = 0; i < 50; i += 2) {
//     arrEmpty[i] = i + 1;
// }
// console.log(arrEmpty)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arrEmpty = [];
// for (let i = 0; i < 20; i++) {
//     arrEmpty.push(Math.round(Math.random()*10));
//     document.write(arrEmpty[i])
// }

// d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arrEmpty = [];
// for (let i = 0; i < 20; i++) {
//     arrEmpty.push(Math.floor(Math.random() * (732 - 8) + 8));
//     console.log(arrEmpty[i]);
// }

// 2. Вивести за допомогою console.log кожен третій елемент
// let arrEmpty = [];
// for (let i = 0; i < 20; i+=3) {
//     arrEmpty[i] = i + 1;
//     console.log(arrEmpty[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
// let arrEmpty = [];
// for (let i = 0; i < 20; i+=3) {
//     arrEmpty[i] = i + 1;
//     if (arrEmpty[i] % 2 === 0) {
//         console.log(arrEmpty[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
// let arrEmpty = [];
// let arrEmpty2 = [];
// for (let i = 0; i < 20; i+=3) {
//     arrEmpty[i] = i + 1;
//     // console.log(arrEmpty[i]);
//     if (arrEmpty[i] % 2 === 0) {
//         arrEmpty = arrEmpty2;
//         console.log(arrEmpty2[i]);
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67, 20, 47, 91, 40, 57, 81, 64, 99, 30];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let num = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// let result = 0;
// for (let i = 0; i < num.length; i++) {
//     sum += num[i]
// }
// console.log(`${sum / num.length}`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let arr = [];
// let total = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random()*100));
//     console.log(arr[i]);
//     for (const number of arr) {
//         total.push(number * 5);
//     }
// }
// console.log(total);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let anyType = ['string', true, 100, [], {}, 300, 'text', false, 500, 2];
// let nums = [];
// for (let i = 0; i < anyType.length; i++) {
//     if (typeof (anyType[i]) === 'number') {
//     // anyType.push(anyType[i])
//         // console.log(nums)
//     }
// }

// if (anyType[i] === 'number') {
//     nums.push(anyType[i]);
// }

// console.log(anyType);
// console.log(nums);



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [1, 22, 3, 44, 5, 66, 7, 84, 9, 100];
// for (const number of arr) {
//     if (arr[number] % 2 === 0) {
//         console.log(arr[number]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let nums = [100, 250, 50, 168, 120, 345, 188];
// let second = [];
// for (let i = 0; i < nums.length; i++) {
//     second.push(nums[i]);
//     console.log(second);
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let letter = ['a', 'b', 'c'];
// let word = 0;
// for (let i = 0; i < 1; i++) {
//     word += 'a' + 'b' + 'c';
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// i = 0;
// while (i < 1) {
//     word += 'a' + 'b' + 'c';
//     i++
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word = ''+'';
for (const string of letter) {
    letter += word
}
console.log(word);