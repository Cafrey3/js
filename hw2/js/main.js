// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
//  попадає число(в першу, другу, третю чи четверту частину години).

// let time = +prompt('Введіть число від 0 до 59:');
// if (time <= 15) {
//     console.log('1 четверть');
// } else if (time <= 30) {
//     console.log('2 четверть');
// } else if (time <= 45) {
//     console.log('3 четверть');
// } else if (time <= 59) {
//     console.log('4 четверть');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

// let day = +prompt('Введіть число місяця:');
// if (day <= 10) {
//     console.log('Зараз перша декада місяця');
// } else if (day <= 20) {
//     console.log('Зараз друга декада місяця');
// } else if (day <= 30) {
//     console.log('Зараз третя декада місяця');
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = 100;
// if (!!test) {
//     console.log('Virno');
// } else {
//     console.log('Ne virno');
// }
//
// let test = !!100 ? 'Virno' : 'Ne virno';
// console.log(test);


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Напишіть число 1, 0 або -3');
// if (a !== 0) {
//     console.log('Virno');
// } else {
//     console.log('Ne virno');
// }

// let a  = !0 ? 'Virno' : 'Ne virno';
// console.log(a)


// - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let number = +prompt('Введіть день тижня:')
// switch (number) {
//     case 1:
//         document.write('План на сьогодні: Не забути похавати');
//         break;
//     case 2:
//         document.write('План на сьогодні: Поспи, відпочинь');
//         break;
//     case 3:
//         document.write('План на сьогодні: Зробити дз');
//         break;
//     case 4:
//         document.write('План на сьогодні: Погуляти');
//         break;
//     case 5:
//         document.write('План на сьогодні: Покодити');
//         break;
//     case 6:
//         document.write('План на сьогодні: Прибрати кімнату');
//         break;
//     case 7:
//         document.write('План на сьогодні: Допомогти другу');
//         break;
//     default :
//         document.write('На цей день нічого не заплановано')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt('Введіть ')


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: "Не знаєте? ECMAScript!"

// let name = prompt('Яка «офіційна» назва JavaScript?')
// if (name === 'ECMAScript') {
//     document.write('Правильно!');
// } else {
//     document.write('Не знаєте? ECMAScript!')
}


