// - Знайти та вивести довжину наступних стрінгових значень:
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello = 'hello world';
// console.log(hello.length);
//
// let lorem = 'lorem ipsum';
// console.log(lorem.length);
//
// let js = 'javascript is cool';
// console.log(js.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello = 'hello world';
// console.log(hello.toUpperCase());
//
// let lorem = 'lorem ipsum';
// console.log(lorem.toUpperCase());
//
// let js = 'javascript is cool';
// console.log(js.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hello = 'HELLO WORLD';
// console.log(hello.toLowerCase());
//
// let lorem = 'LOREM IPSUM';
// console.log(lorem.toLowerCase());
//
// let js = 'JAVASCRIPT IS COOL';
// console.log(js.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// //let arr = stringToarray(str);
// // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let str = 'Каждый охотник желает знать';
// let stringToarray = () => {
//     return str.split(' ');
// }
// let arr = stringToarray(str);
// console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
//
// console.log(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = () => {
//     let a = str.split(' ').join('-').toUpperCase();
//     return a;
// };
// console.log(insert_dash());


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstUp = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// };
// console.log(firstUp('hello okten'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (string) => {
//     return string.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// console.log(capitalize('js html css java php python'));


//CLASSWORK ----------------------------------- CLASSWORK --------------------------------------------------------------


// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1Replace = n1.replaceAll('.', ' ');
// console.log(n1Replace);
//
// let n2Replace = n2.replaceAll('-', ' ');
// console.log(n2Replace);
//
// let n3Replace = n3.replaceAll('_', ' ');
// console.log(n3Replace);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = [];
// let arrNum = (size, limit) => {
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * limit));
//     }
//     console.log(arr)
// };
// arrNum(10, 100)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let sort = arr.sort((a, b) => a - b);
// console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let filter = arr.filter(a => a % 2 === 0);
// console.log(filter);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let map = arr.map(e => e.toString());
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (arr, direction) => {
//     if (direction === 'asc') {
//         return arr.sort((a, b) => a - b);
//     } else if (direction === 'desc') {
//         return arr.sort((a, b) => b - a);
//     }
//     return {};
// };
// console.log(sortNums([1, 2, 3], 'asc'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let newFilter = coursesAndDurationArray.filter((value) => {
//         return value.monthDuration > 5;
//     });
// console.log(newFilter)