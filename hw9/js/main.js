// Все робити за допомоги js.

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let tagDiv = document.createElement('div');
tagDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.appendChild(tagDiv);
let tagP = document.createElement('p');
tagP.innerText = 'loremloremloremloremloremloremlorem';
let wraps = document.getElementsByClassName('wrap');
wraps[0].appendChild(tagP);

let cloneDiv = tagDiv.cloneNode(true);
document.body.appendChild(cloneDiv);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до списку .menu
// Завдання робити через цикли.

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu');
for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = 'li item';
    menu[0].appendChild(li);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = `${course.title} - ${course.monthDuration}`;
//     document.body.appendChild(div);
// }
//


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  вмістом елементу title, та <p class='description'> з елементом monthDuration.
//     Завдання робити через цикли.

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray2) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${course.title}`;
    let p = document.createElement('p');
    p.innerText = `${course.monthDuration}`;
    divElement.appendChild(p);
    divElement.appendChild(h1);
    document.body.appendChild(divElement);
}

//CLASSWORK ----------------------------------- CLASSWORK --------------------------------------------------------------

// - є масив:
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створивши для кожного елементу масиву <div class='member'>.

for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.innerText = `${simpson.name} ${simpson.surname}`
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    h2.innerText = simpson.age;
    div.appendChild(h2);

    let p = document.createElement('p');
    p.innerText = simpson.info;
    div.appendChild(p);

    let img = document.createElement('img');
    img.src = simpson.photo;
    div.appendChild(img);
}




// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створивши для кожного елементу масиву <div class='member2'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member2


for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member2');

    let divName = document.createElement('div');
    divName.innerText = simpson.name;
    div.appendChild(divName);

    let divSurname = document.createElement('div');
    divSurname.innerText = simpson.surname;
    div.appendChild(divSurname);

    let divAge = document.createElement('div');
    divAge.innerText = simpson.age;
    div.appendChild(divAge);

    let divInfo = document.createElement('div');
    divInfo.innerText = simpson.info;
    div.appendChild(divInfo);

    let divPhoto = document.createElement('img');
    divPhoto.src = simpson.photo;
    div.appendChild(divPhoto);

    document.body.appendChild(div);
}




// - Є масив:
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: '5 months',
        hourDuration: '909 hours',
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: '6 months',
        hourDuration: '909 hours',
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: '6 months',
        hourDuration: '909 hours',
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: '4 months',
        hourDuration: '909 hours',
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: '7 months',
        hourDuration: '909 hours',
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration:'4 months',
        hourDuration: '909 hours',
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png

for (const course of coursesArray) {
    let divElement = document.createElement('div')
    divElement.classList.add('wrapper');

    let tittle = document.createElement('div');
    tittle.classList.add('title');
    tittle.innerText=course.title
    divElement.appendChild(tittle);

    let duration = document.createElement('div');
    duration.classList.add('duration');
    divElement.appendChild(duration);

    let monthDuration = document.createElement('div');
    monthDuration.innerText = course.monthDuration;
    duration.appendChild(monthDuration);

    let hourDuration = document.createElement('div');
    hourDuration.innerText = course.hourDuration;
    duration.appendChild(hourDuration);

    let list = document.createElement('div');
    divElement.appendChild(list);

    let ul = document.createElement('ul');
    ul.classList.add('coursename');
    list.appendChild(ul);

    for (const item of course.modules) {
        let li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    }

    document.body.appendChild(divElement);
}