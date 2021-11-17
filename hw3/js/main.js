// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [100, 200, 300, 400, 500];
// let string = ['string1', 'string2', 'string3', 'string4', 'string5'];
// let type = [600, 'string6', true, false, 700];
// console.log(number);
// console.log(string);
// console.log(type);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [123123];
// array[0] = 'Roma';
// array[1] = '23';
// array[2] = 'Alive';
// array[3] = true;
// array[4] = false;
// console.log(array);



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>sample</div>`);
// }
//
// for (let a = 0; a < 10; a++) {
//     document.write(`<div>sample${a}</div>`)
// }
//
// let b = 0;
// while (b < 20) {
//     document.write(`<h1>title</h1>`)
//     b++
// }

// let c = 0;
// while (c < 20) {
//     document.write(`<h1>title${c}</h1>`)
//     c++
// }




// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
// for (let i = 0; i < num.length; i++) {
//     document.write(num[i])
// }



// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string = ['some string1', 'some string2', 'some string3', 'some string4', 'some string5', 'some string6', 'some string7', 'some string8', 'some string9', 'some string10',];
// for (let i = 0; i < string.length; i++) {
//     document.write(string[i])
// }



// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let anytype = [100, 'string', true, 500, 'text', false, {}, 'sample', true, 333];
// for (let i = 0; i < anytype.length; i++) {
//     console.log(anytype[i])
// }



// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = ['text', true, 33, {}, 'html/css', false, true, 333, 'javascript', 735];
// for (let i = 0; i < array.length; i++) {
//     if (typeof (array[i]) === "boolean") {
//         console.log(array[i])
//     }
// }



// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayNum = ['text', true, 33, {}, 'html/css', 11, true, 333, 'javascript', 735];
// for (let i = 0; i < arrayNum.length; i++) {
//     if (typeof (arrayNum[i]) === 'number') {
//         console.log(arrayNum[i])
//     }
// }



// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayString = ['text', true, 33, {}, 'html/css', 'fullstack', true, 333, 'javascript', 735];
// for (let i = 0; i < arrayString.length; i++) {
//     if (typeof (arrayString[i]) === 'string') {
//         console.log(arrayString[i])
//     }
// }




// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrayEmpty = [];
// arrayEmpty [0] = 'chay';
// arrayEmpty [1] = 655;
// arrayEmpty [2] = true;
// arrayEmpty [3] = 'indiyskiy';
// arrayEmpty [4] = false;
// arrayEmpty [5] = 228;
// arrayEmpty [6] = 5051;
// arrayEmpty [7] = 'text';
// arrayEmpty [8] = false;
// arrayEmpty [9] = 'chay';
//
// for (let i = 0; i < arrayEmpty.length; i++) {
//     console.log(arrayEmpty[i])
// }
//




// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let a = 0; a <= 100; a++) {
//     console.log(a);
//     document.write(a);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let b = 0; b <= 100; b += 2) {
//     console.log(b);
//     document.write(b);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let c = 1; c <= 100; c++) {
//     if ((c % 2) === 0) {
//         console.log(c);
//         document.write(c);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let k = 1; k <= 100; k+=2) {
//     console.log(k);
//     document.write(k, '</br>');
// // }







//CLASSWORK ------------------------------------ CLASSWORK ---------------------------------------------

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let arrNum = [2,17,13,6,22,31,45,66,100,-18]

// i = 0;
// while (i < arrNum.length) {
//     console.log(arrNum[i]);
//     i++
// }


//     2. перебрати його циклом for

// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i = 1;
// while (i < arrNum.length) {
//         console.log(arrNum[i]);
//     i+=2
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 1; i < arrNum.length; i += 2) {
//     console.log(arrNum[i]);
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

// i = 0;
// while (i < arrNum.length) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i]);
//     }
//     i++
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i])
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

let arrNum = [2,17,13,6,22,31,45,66,100,-18]

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 3 === 0) {
        arrNum[i] = 'okten';
        console.log(arrNum[i]);
    }
}

// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)









