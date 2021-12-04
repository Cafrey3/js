// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let text = document.createElement('h1');
text.id = 'text';
text.innerText='THIS IS TITLE!!!!!'
document.body.appendChild(text);

let button = document.createElement('button');
button.innerText = 'Clear';
document.body.appendChild(button);

button.onclick = function () {
    text.style.display = 'none';
};


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
