/*
let a = Number (prompt('Ваша зарплата?'));
let b = a * 0.2;
alert ('Премия ' + (a*0.2));
let c = (a + b) * 0.13;
alert ('Налог ' + c );
let d = (a + b - c) / 30;
alert ('Бюджет на один день ' + d);
*/

/*
let a = 10;
a = 20;
alert (a);
*/


/*
const year = 2007;
alert ('Год выпуска первого Iphone - ' + year);
*/

/*
const firstName = 'Брендан Эйх';
alert (`Имя создателя Java Script - ${firstName}`);
*/

/*
let a = 10;
let b = 2;
alert (a + b);
alert (a - b);
alert (a * b);
alert (a / b);
*/

/*
let a = Number (prompt ('Сколько тебе лет?'));
let b = 22;
alert ('Через 22 года тебе будет ' + (a + b) + ' лет!');
*/


/*
let a = 2;
let result = a**5;
alert (result);
*/

/*
let a = 9;
let b = 2;
let c = a % b;
alert (c);
*/

/*
let a = 2;
let b = 3;
alert (a + b);
*/

/*
let a = '1';
let b = '2';
alert (a + b);
*/

/*
let a = 5;
let b = 6;
alert (a + b + 'px');
*/

/*
let age = Number (prompt ('Сколько Вам лет?'))
let up = ++age;
alert(`Через год Вам будет ${up}`);
*/


/*
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /=3 ;
num = ++num;
num = --num;
alert(num);
*/


/*
let newName = prompt ('Как тебя зовут?');
alert('Привет, ' + newName + '!')
*/


/*
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

if (a > b) {
    console.log('Первое число больше');
} else if (a === b){
    console.log('Числа равны');
} else if (a < b) {
    console.log('Второе число больше');
} else {
    console.log('Чушь ввел');
}
*/


/*
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let max = a;

if (max < b) {
    max = b;
}

console.log(`Максимальное число ${max}`);
*/


/*
let age = String(prompt('Сколько лет?'));
(age <= 12 || age >= 80) ? console.log(alert('нет доступа')) : console.log(alert('добро!'));
*/


/*
let answer = String(prompt('Зимой и летом одним цветом?'));

answer = answer.toLocaleLowerCase();

if (answer === 'елка' || answer === 'ёлка' || answer === 'ель') {
    console.log('верно');
} else {
    console.log('не верно');
}
*/


/*
function calc(a, b) {
    let sum = a + b;
    let mult = a * b;
    console.log(`Сумма равна ${sum}
    Произведение равно ${mult}`);
}       

calc(6, 11);
calc (14, 8);
calc (43, 17);
*/


/*
function sum (prep, salary) {
    return prep + salary;
}

function mult(day, moneyDay) {
    return day * moneyDay;
}

let m1 = sum(50, 77);
let m2 = sum(40, 133);

let result = m1 + m2;

let result2 = mult (51, 2.9);

console.log(`Всего ${result}`);
console.log(`По дням ${result2}`);
*/



/* Домашка_2 */

/* 
let password = 'qwerty';
let userPassword = String(prompt('Введите пароль'));
if (userPassword === password) {
    alert ('Верно');
} else {
    alert ('Не верно');
}
*/


/*
let c = 2;
(c > 0 && c < 10) ? console.log ('Верно') : console.log ('Не верно');
*/


/*
let d = 13;
let e = 177;
(d > 100 || e > 100) ? console.log ('Верно') : console.log ('Не верно');
*/



/*
function square(a) {
    return a**2
}
let numUser = 126;
let result = square(numUser);
console.log (`Квадрат числа ${numUser} равен ${result}`);


Второй вариант//

let numUser = (prompt('Введите число'));
function square(a) {
    return a**2
}
console.log (alert(`Квадрат числа ${numUser} равен ${square(numUser)}`));
*/



/*
let UserQues = Number(prompt ('Сколько Вам лет?'));

switch (true) {
    case UserQues < 0:
        console.log ('Вы ввели неправильное значение');
        break;
    case UserQues >= 0 && UserQues <= 12:
        console.log ('Привет, друг!');
        break;
    case UserQues <= 13:
        console.log ('Добро пожаловать!');
        break;
    default:
        console.log ('Вы ввели неправильное значение');
        break;
}
*/



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


function seasons() {
    let UserNum = Number(prompt ('Введите месяц в формате числа (от 1 до 12)'));

    switch (true) {
        case UserNum  >= 3 && UserNum <= 5:
            alert ('Весна!');
            break;
        case UserNum >= 6 && UserNum <= 8:
            alert ('Лето!');
            break;
        case UserNum >= 9 && UserNum <= 11:
            alert ('Осень!');
            break;
        case UserNum === 12 && UserNum >= 2:
            alert ('Зима!');
            break;
        default:
            alert ('Вы ввели неправильное значение');
            break;
    }
} 



function words() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);

    let oneUser = prompt('Первый элемент массива');
    let twoUser = prompt('Последний элемент массива');

    if (oneUser === arr[0] && twoUser === arr[arr.length - 1]) {
       alert('Отлично! Молодец!');
    } else if (oneUser === arr[0] || twoUser === arr[arr.length - 1]) {
        alert ('Вы были близки');
    } else {
        alert('не угадал');
    }
}



function puzzle() {
    let question = prompt('Зимой и летом одним цветом?').toLocaleLowerCase();
    const answer = ["елка", "ель", "ёлка"]; 

    if (answer.find(a => a === question)) {
        alert('Верно!');
        return;
    } else if (answer !== 'елка' || answer !== 'ёлка' || answer !== 'ель') {
        question = prompt('Это дерево').toLocaleLowerCase();
        if (answer.find(a => a === question)) {
            alert('Верно!');
            return;
        } else if (answer !== 'елка' || answer !== 'ёлка' || answer !== 'ель') {
            question = prompt('Зеленое').toLocaleLowerCase();
            if (answer.find(a => a === question)) {
                alert('Верно!');
                return;
            }
        }
    }
    alert('Не верно!');
}

