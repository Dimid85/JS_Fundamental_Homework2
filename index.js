// Завдання 1
/*function greater (a,b,c) {
   return a < b < c;
   }*/

//Завдання 2
/*let x = 1;
let y = 2;

let res1 = x + String(y);
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x+y);
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = Math.sqrt(x-y);
console.log(res4); // NaN
console.log(typeof res4); // ""number""*/

//Завдання 3
const isAdult = +prompt("How old are you?");
if(isAdult<=0||isAdult>110||)
isAdult >= 18 ? console.log("You are adult") : console.log("You are not adult"); 

Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”