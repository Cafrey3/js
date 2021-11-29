// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArr = [
    new User(1, 'stive', 'jobs', 'stive22@gmail.com', 380934555514),
    new User(2, 'big', 'smoke', 'bigsmoke24@gmail.com', 380934546114),
    new User(3, 'C', 'J', 'groovestreet65@gmail.com', 380934583414),
    new User(4, 'eric', 'cartman', 'cartman90@gmail.com', 380934586659),
    new User(5, 'petter', 'griffin', 'griffin25@gmail.com', 380934553214),
    new User(6, 'dre', 'dr', 'dr.dre@gmail.com', 380934957314),
    new User(7, 'snoop', 'dogg', 'dogg98@gmail.com', 380975484321),
    new User(8, 'ice', 'cube', 'icecube88@gmail.com', 380733246324),
    new User(9, 'eazy', '-e', 'eazy90@gmail.com', 38099123314),
    new User(10, 'bil', 'gates', 'gates44@gmail.com', 38097987314)
];

console.log(userArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filtered = userArr.filter(item => item.id % 2 === 0);
console.log(filtered)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sorted = userArr.sort((a, b) => b.id - a.id);// зробив за спадом id бо воно по замовчуванням іде по зростанню)
console.log(sorted);


// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client

let clientArr = [
    new Client(1, 'Zlatan', 'Ibrahimovich', 'zlatanGod41@gmail.com', 380610295847, 2),
    new Client(2, 'Javier', 'Zanetti', 'javier223@gmail.com', 380663696737, 5),
    new Client(3, 'Erling', 'Holland', 'holland67@gmail.com', 380663693337, 10),
    new Client(4, 'Diego', 'Maradonna', 'maradonna86@gmail.com', 380662225847, 44),
    new Client(5, 'Franchesco', 'Totti', 'totti98@gmail.com', 380669005847, 1),
    new Client(6, 'Van der', 'Sar', 'sar900@gmail.com', 380663698727, 100),
    new Client(7, 'David', 'Backham', 'backham78@gmail.com', 380663699017, 34),
    new Client(8, 'Andriy', 'Shevchenko', 'shevchenko88@gmail.com', 380624195847, 65),
    new Client(9, 'Paolo', 'Maldini', 'maldini56@gmail.com', 380663694567, 22),
    new Client(10, 'Fabio', 'cannavaro', 'cannacero005@gmail.com', 380666785847, 80)
];
console.log(clientArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientSorted = clientArr.sort((a, b) => a.order - b.order);
console.log(clientSorted);


// CLASSWORK ---------------------------------------------- CLASSWORK --------------------------------------------------

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpd, capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpd = maxSpd;
    this.capacity = capacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpd} на годину`);
    };
    this.info = function () {
        console.log(`Модель - ${this.model} Виробник - ${this.manufacturer} Рік - ${this.year} Об'єм двигуна - ${this.capacity} `);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpd = +newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let car = new Car('M3', 'BMW', 1986, '237 км/г', '2302 см3');
car.drive();
car.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car2 {
//     constructor(model, manufacturer, year, maxSpd, capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpd = maxSpd;
//         this.capacity = capacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpd} на годину`)
//         };
//         this.info = function () {
//             console.log(`Модель - ${this.model} Виробник - ${this.manufacturer} Рік - ${this.year} Об'єм двигуна - ${this.capacity} `);
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpd = +newSpeed;
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         };
//     };
// }


// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


class popelyshka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

let popArr = [
    new popelyshka('vasilisa', 19, 37),
    new popelyshka('tanya', 20, 38),
    new popelyshka('christina', 21, 39),
    new popelyshka('galia', 22, 40),
    new popelyshka('anna', 23, 41),
    new popelyshka('ira', 24, 42),
    new popelyshka('maria', 25, 43),
    new popelyshka('olya', 26, 44),
    new popelyshka('nastya', 27, 45),
    new popelyshka('katya', 28, 46)
];

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let princ = new Prince('Roman', 23, 42);

let result = (popArr, princ) => {
    for (const item of popArr) {
        if (item.footSize === princ.shoe) {
            return `your popelyshka is ${item.name}`;
        }
    }
};
console.log(result(popArr, princ));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let emptyPrincess = popArr.find((item) => item.footSize === princ.shoe);
console.log(emptyPrincess);





