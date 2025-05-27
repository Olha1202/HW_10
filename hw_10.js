/*Написати гру "Камінь, ножниці, папір"  
дані користувач отримує через prompt, а результат гри
 виводити використовуючи alert*/

 let userChoice = prompt('Введіть в поле "камінь", "ножиці" або "папір"');

 let lowerText = userChoice.toLowerCase();

 let kamin = 'камінь';
 let papir = 'папір';
 let nogisi = 'ножиці';

let arrVariant = [kamin, papir, nogisi];

let computerChoice = arrVariant[Math.floor(Math.random()*arrVariant.length)];
console.log(computerChoice);

if(lowerText===computerChoice){
    alert('Нічия');    
}

else if(lowerText===kamin & computerChoice===nogisi||
    lowerText===papir & computerChoice===kamin||
    lowerText===nogisi & computerChoice===papir){
alert('Виграш');}

else{
    alert('Програш');}



