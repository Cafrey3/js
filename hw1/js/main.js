// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write


// let hello = "hello";
// console.log(hello);
// document.write(hello);
// alert(hello);
//
// hello = "bye";
// console.log(hello);
// document.write(hello);
// alert(hello)
//
// let owu = "owu";
// console.log(owu);
// document.write(owu);
// alert(owu);
//
// owu = "not owu";
// console.log(owu);
// document.write(owu);
// alert(owu);
//
// let com = "com";
// console.log(com);
// document.write(com);
// alert(com);
//
// com = "org";
// console.log(com);
// document.write(com);
// alert(com);
//
// let ua = "ua";
// console.log(ua);
// document.write(ua);
// alert(ua);
//
// ua = "gr";
// console.log(ua);
// document.write(ua);
// alert(ua);
//
// let one = "1";
// console.log(one);
// document.write(one);
// alert(one);
//
// one = "-1";
// console.log(one);
// document.write(one);
// alert(one);
//
// let ten = "10";
// console.log(ten);
// document.write(ten);
// alert(ten);
//
// ten = "20";
// console.log(ten);
// document.write(ten);
// alert(ten);
//
// let minusnine = "-999";
// console.log(minusnine);
// document.write(minusnine);
// alert(minusnine);
//
// minusnine = "-666";
// console.log(minusnine);
// document.write(minusnine);
// alert(minusnine);
//
// let onetwothree = "123";
// console.log(onetwothree);
// document.write(onetwothree);
// alert(onetwothree);
//
// onetwothree = "321";
// console.log(onetwothree);
// document.write(onetwothree);
// alert(onetwothree);
//
// let pi = "3.14";
// console.log(pi);
// document.write(pi);
// alert(pi);
//
// pi = "6.18";
// console.log(pi);
// document.write(pi);
// alert(pi);
//
// let twodotseven = "2.7";
// console.log(twodotseven);
// document.write(twodotseven);
// alert(twodotseven);
//
// twodotseven = "88";
// console.log(twodotseven);
// document.write(twodotseven);
// alert(twodotseven);
//
// let sixteen = "16";
// console.log(sixteen);
// document.write(sixteen);
// alert(sixteen);
//
// sixteen = "69";
// console.log(sixteen);
// document.write(sixteen);
// alert(sixteen);
//
// let tru = "true";
// console.log(tru);
// document.write(tru);
// alert(tru);
//
// tru = "good";
// console.log(tru);
// document.write(tru);
// alert(tru);
//
// let lie = "false";
// console.log(lie);
// document.write(lie);
// alert(lie);
//
// lie = "bad";
// console.log(lie);
// document.write(lie);
// alert(lie);





// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Roman';
// let lastName = 'Tokarchuk';
// let middleName = 'Mykolayovych';
// let person = firstName+ lastName+ middleName
// console.log(person)
// document.write(person)





// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Ім'ям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = prompt("Roman");
// let middleName = prompt("Mykolayovych");
// let age = prompt("23");
// alert("Вітаю Роман Миколайович. Тобі 23 роки");





// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// console.log(typeof (100))
//
// // let b = '100';
// console.log(typeof ('100'))
//
// // let c = true;
// console.log(typeof (true))






// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// console.log(5<6)
// console.log(5>6)
// console.log(5==6)
// console.log(5>=6)
// console.log(10==10)
// console.log(10===10)
// console.log(10>10)
// console.log(10<10)
// console.log(10!==10)
// console.log(123==='123')
// console.log(123=='123')




// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// document.write(str + a + "<br/>"); // тут ми просто добавили біля двадця'тки 5 і буде 205
// document.write(str - a + "<br/>"); // тут просто мінус 5 і буде 15
// document.write(str * "2" + "<br/>"); // а тут 40, тому що помножили 20 на 2
// document.write(str / 2 + "<br/>"); // тут ми поділили на два 20 і буде 10




//CLASSWORK

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

// let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let result = mass[0]+mass[1]+mass[2]+mass[3]+mass[4]+mass[5]+mass[6]+mass[7]+mass[8]+mass[9]
// console.log(result)



// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book = {
//     name: 'The Lord of the Rings. The Fellowship of the Ring',
//     pages: 456,
//     genre: 'Fantasy'
// }



// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

// let book2 = {
//     name: 'The Lord of the Rings. Part Two: The Two Towers',
//     pages: 352,
//     genre:'Fantasy',
//     author: 'J.R.R.Tolkien'
// }



// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

// let bookmass = [book, book2]
// console.log(bookmass[0], bookmass[1])



// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
//
// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s);
//
//

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

// const PI = 3.14
// let heightC = 10;
// let dC = 4;
// let dmtr = dC / 2;
// Math.pow(dmtr,2)
//
// let v = PI * Math.pow(dmtr,2) * heightC;
// console.log(v)



// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
// console.log(k)











