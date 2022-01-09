// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user details.html, которая имеет детальную информацию про объект на который кликнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        document.body.appendChild(wrap);
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('user');
            div.innerText = `${user.id}. ${user.name}`;
            wrap.appendChild(div);

            let a = document.createElement('a');
            a.innerText = 'Info';
            a.setAttribute('href', '#');
            div.appendChild(a);

            a.onclick = function () {
                a.setAttribute('href', 'user details.html');
                let userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
                userDetails.push(user);
                localStorage.setItem('userDetails', JSON.stringify(userDetails));
            };
        }
    });

// Стилизация проекта -
// post details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, которые характеризируют user,post,comment визуализировать, так, что бы было видно
// их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//
