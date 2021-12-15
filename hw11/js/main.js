// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let forma = document.forms.f1;

forma.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    localStorage.setItem('user', JSON.stringify({name, age}));
    };

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let forma2 = document.forms.f2;

forma2.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model, type, volume};
    let cars = JSON.parse(localStorage.getItem('cars'));
    if (!cars) {
        cars = [];
        cars.push(car);
    } else {
        cars.push(car);
    }
    localStorage.setItem('cars', JSON.stringify(cars));
};

// CLASSWORK ----------------------------------------------------- CLASSWORK -------------------------------------------

// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.

for (const user of users) {
    let profile = document.createElement('div');
    profile.innerText = `${user.name}, ${user.age}, ${user.status}`;
    profile.style.display = 'flex';
    profile.style.alignItems = 'center';
    profile.style.justifyContent = 'center';
    profile.style.flexDirection = 'column';
    profile.style.marginTop = '20px';
    profile.style.fontFamily = 'sans-serif';
    document.body.appendChild(profile);


    let button = document.createElement("button");
    button.innerText = 'додати до улюблених';
    profile.appendChild(button);

    button.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };
}











