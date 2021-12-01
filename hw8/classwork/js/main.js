// 1) Напишіть код, який :
// a) змінює клас елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.classList.add('sept_2021');

// b) робить ширину елементу ul 400px

let ulList = document.getElementsByTagName('ul');
for (const item of ulList) {
    item.style.width='400px'
    item.style.backgroundColor = 'yellow';
}

// c) робить ширину всіх елементів з класом linkList шириною 50%

let liWidth = document.getElementsByClassName('linkList');
for (const item of liWidth) {
    item.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

// let middleLi = document.getElementsByTagName('ul');
// let l2 = middleLi[1];
// console.log(middleLi[1].innerText);
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)