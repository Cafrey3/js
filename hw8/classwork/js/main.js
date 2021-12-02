// 1) Напишіть код, який :
// a) змінює клас елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.classList.add('sept_2021');

// b) робить ширину елементу ul 400px

let ulList = document.getElementsByTagName('ul');
for (const item of ulList) {
    item.style.width = '400px'
}

// c) робить ширину всіх елементів з класом linkList шириною 50%

let liWidth = document.getElementsByClassName('linkList');
for (const item of liWidth) {
    item.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let textlink = document.getElementsByClassName('listElement2')[0].innerText;
console.log(textlink);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let backgroundLi = document.getElementsByTagName('ul');
for (const item of backgroundLi) {
    item.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aElements = document.getElementsByTagName('a');
// for (const item of aElements) {
//     item.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aFontSize = document.getElementsByTagName('a');
for (const item of aFontSize) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aAddClass = document.getElementsByTagName('a');
for (const item of aAddClass) {
    item.classList.add(`element_${item.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let h3Title = document.getElementsByClassName('sub-header');
// for (const title of h3Title) {
//     title.style.backgroundColor = prompt('Enter your color for first and second title:');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()

// let subHeaderElements = document.getElementsByClassName('sub-header');
// for (const title of subHeaderElements) {
//     if (title.innerText === 'content 2 segment') {
//         title.style.color = prompt('Enter color for title:');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let elemText = document.getElementsByClassName('content_1');
// for (const item of elemText) {
//     item.innerText = prompt('Type text here:');
// }

// l) отримати елементи p та змінити їм padding на 20px

let pList = document.getElementsByTagName('p');
for (const p of pList) {
    p.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Приклад sep-2021)

let changedText = document.getElementsByClassName('text2')[0];
changedText.innerText = 'September - 2021';