// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => {
//         return value.json()
//     })
//     .then(posts => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         document.body.appendChild(wrap);
//         for (const post of posts) {
//             let userDiv = document.createElement('div');
//             userDiv.classList.add('post');
//             userDiv.innerHTML = `<h1>id: ${post.id}</h1> <h2>Title: ${post.title}</h2> <p>${post.body}</p>`;
//             wrap.appendChild(userDiv);
//         }
//     });


//2.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => {
//         return value.json();
//     })
//     .then(comments => {
//         let div = document.createElement('div');
//         div.classList.add('container');
//         document.body.appendChild(div);
//         for (const comment of comments) {
//             let userComment = document.createElement('div');
//             userComment.classList.add('comment');
//             div.appendChild(userComment);
//             userComment.innerHTML = `<h1>id: ${comment.id}</h1> <h2>name ${comment.name}</h2> <h3>email: ${comment.email}</h3> <p>${comment.body}</p>`;
//         }
//     });


// CLASSWORK ------------------------------------------ CLASSWORK ------------------------------------------------------

// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => {
//         return value.json();
//     })
//     .then(posts => {
//         let wrapper = document.createElement('div');
//         wrapper.classList.add('wrapper');
//         document.body.appendChild(wrapper);
//         for (const post of posts) {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('cw_post');
//             postDiv.innerHTML = `<h2>ID: ${post.id}</h2> <h1>Title: ${post.title}</h1>`;
//             wrapper.appendChild(postDiv);
//
//             let postText = document.createElement("div");
//             postText.innerHTML = `<p>${post.body}</p>`
//             postText.classList.add('post_txt');
//             postDiv.appendChild(postText);
//
//             let btn = document.createElement('button');
//             btn.innerText = 'Show add info';
//             postDiv.appendChild(btn);
//
//             btn.addEventListener('click', function () {
//                 postText.classList.toggle('post_txt');
//                 (btn.innerText === 'Show add info') ? btn.innerText = 'Hide' : btn.innerText = 'Show add info';
//             });
//         }
//     });





