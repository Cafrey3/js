// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"

let contentID = document.getElementById('content');
console.log(contentID.innerText);

// -- отримує текст з блоку з id "rules"

let rulesID = document.getElementById('rules');
console.log(rulesID.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

let pText = document.getElementById('content');
pText.innerText = 'any text';

// -- замініть текст параграфа з id 'rules' на будь-який інший

let divTExt = document.getElementById('rules');
divTExt.innerText = 'type here any text you want';

// -- змініть кожному елементу колір фону на червоний

let bgColor = document.getElementsByTagName('p');
for (const p of bgColor) {
    p.style.backgroundColor = 'red';
}

let bgColor2 = document.getElementsByTagName('div');
for (const div of bgColor2) {
    div.style.backgroundColor = 'red';
}

let bgColor3 = document.getElementsByTagName('ul');
for (const ul of bgColor3) {
    ul.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let textColor = document.getElementsByTagName('p');
for (const p of textColor) {
    p.style.color = 'blue';
}

let textColor2 = document.getElementsByTagName('div');
for (const div of textColor2) {
    div.style.color = 'blue';
}

let textColor3 = document.getElementsByTagName('ul');
for (const ul of textColor3) {
    ul.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let cList = document.getElementById('rules');
console.log(cList.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let getColor = document.getElementsByTagName('li');
for (const li of getColor) {
    li.style.color = 'gold';
}