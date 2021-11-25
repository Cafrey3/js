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
let capitalize = (string) => {
    return string.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
console.log(capitalize('js html css java php python'));
