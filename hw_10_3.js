/*Завдання для Date.toLocaleString:

Створіть об'єкт Date для поточної дати та часу.

Використайте метод toLocaleString(), щоб отримати поточну дату та час у 
зручному для читання форматі.

Виведіть результат у консоль.*/
let Now = new Date();
console.log('Сьогодні:', Now.toLocaleString('uk-UA')); 

/*Завдання для String.split та toUpperCase:

Створіть рядок, який містить слова, розділені пробілами.

Використайте метод split, щоб розбити рядок на масив слів.

Виведіть отриманий масив у консоль у верхньому регістрі.*/

let Words = 'слова, розділені пробілами';
let WordsArr = Words.split(' ');
let UpperText = WordsArr.map(word=>word.toUpperCase());
console.log(UpperText);