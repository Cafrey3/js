// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let text = document.createElement('h1');
// text.id = 'text';
// text.innerText = 'THIS IS TITLE!!!!!'
// document.body.appendChild(text);
//
// let button = document.createElement('button');
// button.innerText = 'Clear';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     text.style.display = 'none';
// };
//
//
// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let button2 = document.createElement('button');
// button2.innerText = 'Vanish';
// document.body.appendChild(button2);
//
// button2.onclick = function () {
//     button2.style.display = 'none';
// };
//
// //
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньший він ніж 18, та повідомити про це користувача
//
// let input = document.createElement('input');
// document.body.appendChild(input);
//
//
// let sendButton = document.createElement('button');
// sendButton.classList.add('btn');
// sendButton.innerText = 'Send';
// document.body.appendChild(sendButton);
//
// sendButton.onclick = function () {
//     if (input.value <= 18) {
//         alert('Your age under 18. Please, grow up)');
//     } else {
//         alert("Access allowed! Enjoy!")
//     }
// };
//
// // - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.createElement('div');
// menu.classList.add('show');
// menu.style.backgroundColor = 'green';
// menu.style.width = '300px';
// menu.style.height = '300px';
// menu.style.marginTop = '20px';
//
// document.body.appendChild(menu);
//
// let menuButton = document.createElement('button');
// menuButton.innerText = 'Hide/Open';
// document.body.appendChild(menuButton);
//
// menuButton.onclick = function myFunction() {
//     menu.classList.toggle("show");
// };

// - Создать список комментариев, пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {name: 'Kurtis', body: '493-170-9623 x156'},
//     {name: 'Nicholas', body: '(254)954-1289'},
//     {name: 'Chelsey', body: '1-477-935-8478 x6430'},
//     {name: 'Patricia', body: '210.067.6132'},
// ];
//
// let wrap = document.createElement('div');
// for (const item of comments) {
//     let div = document.createElement('div');
//     div.style.border = 'solid 1px blue';
//     div.style.marginTop = '10px';
//     div.style.padding = '20px';
//     div.style.width = '500px';
//     div.style.height = '150px';
//     wrap.appendChild(div);
//
//     let h2 = document.createElement('h2');
//     h2.innerText = item.name;
//     div.appendChild(h2)
//
//     let p = document.createElement('p');
//     p.innerText = item.body;
//     div.appendChild(p);
//
//     let btn = document.createElement('button');
//     btn.innerText = 'Hide or Open';
//     div.appendChild(btn);
//
//     btn.onclick = function () {
//         p.classList.toggle("hide");
//     };
//
//
// }
// document.body.appendChild(wrap);

//CLASSWORK ------------------------------------------- CLASSWORK ------------------------------------------------------

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let divOne = document.createElement('div');
// divOne.innerText = 'FORM ONE';
// divOne.style.margin = '20px';
// document.body.appendChild(divOne);
//
// let divTwo = document.createElement('div');
// divTwo.innerText = 'FORM TWO';
// divTwo.style.margin = '20px';
// document.body.appendChild(divTwo);
//
// let formOne = document.createElement('form');
// divOne.appendChild(formOne);
//
// let formTwo = document.createElement('form');
// divTwo.appendChild(formTwo);
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('placeholder', 'Name');
// formOne.appendChild(inputOne);
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('placeholder', 'Surname');
// formOne.appendChild(inputTwo);
//
// let inputThree = document.createElement('input');
// inputThree.setAttribute('placeholder', 'Age');
// inputThree.setAttribute('type', 'number');
// formTwo.appendChild(inputThree);
//
// let inputFourth = document.createElement('input');
// inputFourth.setAttribute('placeholder', 'City');
// formTwo.appendChild(inputFourth);
//
//
// let button = document.createElement('button');
// button.innerText = 'send';
// document.body.appendChild(button);
//
// button.addEventListener('click', function () {
//     console.log(inputOne.value);
//     console.log(inputTwo.value);
//     console.log(inputThree.value);
//     console.log(inputFourth.value);
// });


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form = document.createElement("form");
// document.body.appendChild(form);
//
// let input1 = document.createElement('input');
// input1.setAttribute('name', 'rows');
// input1.setAttribute('type', 'number');
// form.appendChild(input1);
//
// let input2 = document.createElement('input');
// input2.setAttribute('name', 'columns');
// input2.setAttribute('type', 'number');
// form.appendChild(input2);
//
// let input3 = document.createElement('input');
// input3.setAttribute('name', 'content');
// form.appendChild(input3);
//
// let button = document.createElement('button');
// button.innerText = 'create';
// document.body.appendChild(button);
//
// let table = document.createElement('table');
// document.body.appendChild(table);
//
// button.onclick = function (e) {
//     e.preventDefault();
//     let rows = form.rows.value;
//     let columns = form.columns.value;
//     let content = form.content.value;
//     console.log(rows, columns, content);
//
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerText = content;
//         }
//     }
// };


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let words = ['kaka', 'dupa', "typuy", 'dyrnuy', 'yolop', 'prudyrok', 'tvaruna', 'idiot',];
//
// let div = document.createElement('div');
// div.innerText = 'Container';
// document.body.appendChild(div);
//
// let form = document.createElement('form');
// div.appendChild(form);
//
// let input = document.createElement('input');
// form.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = 'Check';
// document.body.appendChild(button);
//
// button.addEventListener('click', function () {
//     let inputValue = input.value;
//
//     for (const word of words) {
//         if (word === inputValue) {
//             alert('Are you OK?!');
//         } else
//             alert('ok');
//     }
// });


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let words = ['kaka', 'dupa', "typuy", 'dyrnuy', 'yolop', 'prudyrok', 'tvaruna', 'idiot',];
//
// let div = document.createElement('div');
// div.innerText = 'Container';
// document.body.appendChild(div);
//
// let form = document.createElement('form');
// div.appendChild(form);
//
// let input = document.createElement('input');
// form.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = 'Check';
// document.body.appendChild(button);
//
// button.addEventListener('click', function () {
//     let inputValue = input.value;
//
//     for (const word of words) {
//         if (inputValue.includes(word)) {
//             alert('Are you OK?!');
//         }
//     }
// });