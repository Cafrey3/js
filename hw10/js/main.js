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

let comments = [
    {name: 'Kurtis', body: '493-170-9623 x156'},
    {name: 'Nicholas', body: '(254)954-1289'},
    {name: 'Chelsey', body: '1-477-935-8478 x6430'},
    {name: 'Patricia', body: '210.067.6132'},
];

let wrap = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    div.style.border = 'solid 1px blue';
    div.style.marginTop = '10px';
    div.style.padding = '20px';
    div.style.width = '500px';
    div.style.height = '150px';
    wrap.appendChild(div);

    let h2 = document.createElement('h2');
    h2.innerText = item.name;
    div.appendChild(h2)

    let p = document.createElement('p');
    p.innerText = item.body;
    div.appendChild(p);

    let btn = document.createElement('button');
    btn.innerText = 'Hide or Open';
    div.appendChild(btn);

    btn.onclick = function () {
        p.classList.toggle("hide");
    };


}
document.body.appendChild(wrap);

//CLASSWORK ------------------------------------------- CLASSWORK ------------------------------------------------------
