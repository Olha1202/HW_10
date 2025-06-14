/*Завдання для Date.getYear:

Створіть функцію, яка повертає рік народження користувача коли користувач
 вводить свій вік

Виведіть результат у консоль.*/

function BirthdayYear(){
let Age = prompt('Введіть свій вік');
let Year = new Date().getFullYear();
return Year - Age;}
console.log(BirthdayYear());


