
/* Завдання 1. 
Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.*/


function Worker(name, age, rate, days) {
    this.name = name;
    this.age = age;
    this.rate = rate;
    this.days = days;
}

Worker.prototype.getSalary = function () {
    return this.rate * this.days;
}

const workerOne = new Worker("Andrew", 27, 2500, 20);
document.write(`Заробітня плата ${workerOne.name} складає ${workerOne.getSalary()} грн <hr> `)

/* Завданн 2.
Реалізуйте клас MyString, який матиме такі методи: 
1. метод reverse(),який параметром приймає рядок, а повертає її в перевернутому вигляді, 
2. метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
3. та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.*/

function MyString(str) {
    this.str = str;
    this.reverse = function () {
        return str.split('').reverse().join('');
    }
    this.uсFirst = function () {
        return (str.slice(0, 1).toUpperCase() + str.slice(1));
    }
    this.uсWords = function () {
        return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }
}

const text = new MyString("lorem lorem 123456")
document.write(`Метод revers: ${text.reverse()} <br>`)
document.write(`Метод uсFirst: ${text.uсFirst()} <br>`)
document.write(`Метод uсWords: ${text.uсWords()}`)

