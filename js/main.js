// Функция для подтверждения числа
function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
// Пример
console.log(isNumber(5))

// Генерация числа от min до max
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
// Пример
console.log(randomInteger(1, 5)) /* Генерирует от 1 до 5 */
// ----------------------------------------------------------------------------------------------- 

let str1 = "  СтРока  ";
str1 = str1.toLowerCase().trim();
console.log(str1[0].toUpperCase() + str1.slice(1))
// --------------Объекты---------------- let obj = {}
// {
// n: "sora",
// a: true
// }
// n, a - это ключ (id)
// "sora", true - значение (могут быть любым, даже массивом)
// .n или ['n'] - обращение к id. Покажет "sora"
// -----------------------------------------------
// Object.keys(a) - показвает ключи объекта a. Если массив покажет только индексы.
let obj = [
    {
        'color': 'Tomato',
        'numbers': ["8888", "7777"],
        'checked': true
    },
    {
        'color': 'Green',
        'numbers': ["66", "11"],
        'checked': false
    },
    {
        'color': 'Blue',
        'numbers': ["7751", "3247"],
        'checked': true
    }

]

// Свич

let age = prompt("Сколько вам лет");

switch (true) {
    case age > 18:
        console.log("Вам больше 18 лет");
        break;
    case age < 18:
        console.log("Вам меньше 18 лет");
        break;
    default: console.log("Вам 18 лет");
}

// Циклы
let count = 10;
do {
    // Тело цикла, где выполняется 1 раз перед проверкой
    console.log(count);
    count--
} while (count < 7) //Выполняемое условие

let arr = [5, 7, 9, 1, 0]
// обращение от переменной item к arr. item берет все значения arr
for (let item of arr) {
    /*
        В цикле item работает так:
        let item = [];
        for(let i=0; item<arr.length; item++) {
            item.push(arr[i]*2)
        }
        console.log(item);
    */
    console.log(item * 2);
}
/*
массив.forEach(function(элемент, индекс, весьМассив) {
    // твой код
    });
    элемент — текущее яблоко (на примере arr, 5, потом 7).
    
    индекс — номер по порядку (0, 1, 2...). Этот параметр необязательный.
    
    весьМассив — ссылка на исходный список. Тоже необязательный.    
    */
arr.forEach(function (newArr) {
    console.log(newArr * 2); //такой же принцип как выше for of
    /* 
        Альтернатива
        console.log(arr.forEach(newArr => newArr*2))
    */

});

//циклы для объектов
obj = {
    'name': "Petr",
    'age': 25,
    'number': 897969069686
}
// обращение от переменной key во внутреннюю часть obj. key берет все значения obj
for (let key in obj) {
    console.log(`Ключ ${key}, Значение ${obj[key]}`)
}

let people = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Masha" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Kate" }
];
let a = people.find(item => item.id == 4); //желательно const
console.log(a);

let arr1 = [7, 4, 2, 1, 0, 6, 2, 6, 2, 15, 4, 16, 20]
let result = arr1.filter(item => item % 2 == 0)

console.log(`Всего четных чисел ${result.length}`)

// Функции
let funcObj = {
    name: "Ravshan",
    age: 30,
    hello() {
        return `Меня зовут ${this.name} и мой возраст ${this.age}`/* this - обращение в сам объект */
    }
}
console.log(funcObj.hello())

// Фибоначи
const fibonachi = fib => {
    let f = [];
    for (let i = 0; i < fib; i++) {
        if (i === 0) f.push(i)
        else if (i === 1) f.push(i)
        else f.push(f[i - 1] + f[i - 2])
    }
    return f
}
console.log(fibonachi(10))

// Факториал
function factorial(n) {
    let fact = 1;
    if (n === 0) return fact;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(10));

//

let addAndMul = function (num) {
    num += "";/*преобразование в строку нужно для того чтобы работал цикл с длиной length */
    let add = 0, mul = 1;
    for (let i = 0; i < num.length; i++) {
        add += +num[i];
        mul *= +num[i];
    }
    return {
        "Сумма": add,
        "Произведение": mul
    }
}
console.log(addAndMul(987))

// Реверс чисел
function reverse(numbers) {
    numbers += "";
    let result = "";
    for (let i = numbers.length - 1; i >= 0; i--) {
        result += numbers[i]
    }
    return +result;
}

// Четные не четное
const numbers = number => {
    number = String(number);
    let even = 0, odd = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) even++;
        else odd++;
    }
    return {
        "Количество четных чисел": even,
        "Количество нечетных чисел": odd
    }
}

// Рандомное число от 0 до 100
function randomNumber() {
    let number = Math.floor(Math.random() * 100);
    let count = 1;
    for (let i = 0; i < count; i++) {
        let person = +prompt("Угадайте число");
        if (person == number) {
            console.log("Вы угадали");
            return;
        } else if (person > number) {
            console.log("Число больше загаданного");
        } else if (person < number) {
            console.log("Число меньше загаданного");
        }
    }
    console.log(`Вы не угадали. Было загадано число ${number}`);
}
randomNumber();

// Часы в минуту. Обработка ошибок try catch
/**
 * Функция преобразует строку с временем в минуты
 * @param {string} time время в виде строки, например "02:08". Может быть в диапазоне от "00:00" до "23:59". 
 * @returns {number} целое число в минутах. Например time="02:08" вернет 128.
 */
function timeToMinute(time) {
    try {
        let minute = time.split(":").map(Number);
        if (!(minute[0] >= 0 && minute[0] <= 23) || !(minute[1] >= 0 && minute[1] <= 59)) {
            throw new RangeError("Аргумент должен быть в формате 'hh:mm' - 'hh' должен быть от 0 до 23, а 'mm' должен быть от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ':'");
        }
        return minute[0] * 60 + minute[1];
    } catch (error) {
        console.log(error);
    }
}
console.log(timeToMinute("22:50"));

//Объектно-ориентированное программирование (ООП)
let admin = {
    rules: 777,
    isAdmin() {
        console.log(`Я админ ${this.name}, мои права ${this.rules}`)
    }
}
// Создание конструктора
function User(name, age) {
    this.name = name;
    this.age = age;
    this.myInfo = function () {
        console.log(`Меня зовут ${this.name}, мне ${this.age}`);
    }
    this.__proto__ = admin;
}

let u1 = new User("Petr", 21)
let u2 = new User("Kate", 19)
let u3 = new User("Masha", 20)

// Классы - разновидность функции
class User1 {
    // конструктор
    constructor(name, age, admin = false) {
        // this обращение к данному объекту
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    // метод
    myInfo() {
        console.log(`Меня зовут ${this.name}, мне ${this.age}`);
        if (this.admin == true) {
            console.log(`Я админ`)
        }
    }
}
// подключение к родительскому объекту через extends
class Moderator extends User1 {
    constructor(name, age, admin = false, moder = false) {
        // super обращение к родителю. Берет все значения родителя в данном случае User1
        super(name, age, admin)
        this.moder = moder;
    }
    // static принадлежи к конкретному классу. Можно вызвать в данному случае только через Moderator
    /*
        Пример использования static
        class User {
            static type = "Человек";  // статическое свойство
            name = "Без имени";        // обычное свойство
            
            static getType() {        // статический метод
                return this.type;
            }
            
            sayName() {               // обычный метод
                return this.name;
            }
        }

        const user = new User();

        console.log(user.name);        // ✅ "Без имени"
        console.log(user.type);        // ❌ undefined
        console.log(User.type);        // ✅ "Человек"

        console.log(user.sayName());   // ✅ "Без имени"
        console.log(user.getType());   // ❌ TypeError (не функция)
        console.log(User.getType());   // ✅ "Человек"
    */
    static addPost() {
        console.log(`New Post`)
    }
    myInfo() {
        super.myInfo();
        if (this.moder == true) console.log(`Я модератор`)
    }
}
// new создает новый объект
let u4 = new User1("Petr", 21)
let u5 = new User1("Kate", 19, true)
let u6 = new User1("Masha", 20)
let u7 = new Moderator("Masha", 20, false, true)

// Практика
/**
 * Класс человек
 * @param {string} fio по формату "Фамилия Имя Отчество"
 * @param {string} birthday по формату "dd.mm.yyyy"
 * @param {string} numbers если много номеров по формату "номер1, номер2"
 * @param {number} room как число
 */
class People {
    constructor(fio, birthday, numbers, room) {
        let name = fio.toLowerCase().split(" ")
        this.name = {}
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

        let date = birthday.split(".")
        this.date = {}
        this.date.d = date[0]
        this.date.m = date[1]
        this.date.y = date[2]

        this.number = numbers.split(", ")

        this.room = +room
    };

    static month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    /**
     * 
     * @returns {string} возвращает "Фамилия Имя Отчество"
     */
    getFio() {
        return `${this.name.f} ${this.name.i} ${this.name.o}`
    }
    /**
     * 
     * @returns {string} возвращает "день месяц(полное название) год"
     */
    getBirth() {
        return `Родился ${this.date.d} ${People.month[this.date.m - 1]} ${this.date.y} года`
    }
    /**
     * 
     * @param {boolean} allNumbers если true, то все номера, если false только первый номер
     * @returns {string} возвращает "890066633322, 8900044478822"
     */
    getNumbersList(allNumbers) {
        if (this.number.length == 0 || this.number[0].length == 0)
            return undefined
        if (allNumbers) {
            return this.number.join(", ")
        } else {
            return this.number[0];
        }
    }
}

let me = new People("кАриМов РаВшаН рУстАмовиЧ", "12.12.1995", "1235, 1325, 45734", 325)
let uncle = new People("карИмов РустАм ФАТТулоевич", "03.12.1976", "38998, 12351, 1325", 146)

// Оператор расширения ...
function sum(a, b) {
    return a+b;
}
let c = [4, 8]
console.log(sum(...c))
// В функциях
function sumOf(first, ...rest) {
  console.log(first);  // 5
  console.log(rest);   // [10, 15, 20]
}
sumOf(5, 10, 15, 20);

// В деструктуризации
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log(first);   // 1
console.log(second);  // 2
console.log(others);  // [3, 4, 5]
// Массивы
const numbers1 = [1, 2, 3];
const newNumbers = [...numbers1, 4, 5];  // [1, 2, 3, 4, 5]

// Объекты
const user5 = { name: 'Равшан', age: 30 };
const newUser = { ...user5, city: 'Москва' };  // { name: 'Равшан', age: 30, city: 'Москва' }

// Функции
const nums10 = [3, 5, 7];
Math.max(...nums10);  // то же самое что Math.max(3, 5, 7)

// Дискруктивное присваивание
let [l,m,n,o] = [10,2,4,6]; /* присвоение как отдельным переменным */

//.entries() .keys() .values()
let arrow = [`a`, `b`, `c`]
let entries = arrow.entries()
let keys = arrow.keys()
let values = arrow.values()
console.log(...entries)
console.log(...keys)
console.log(...values)

// Множество - set

let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(1)/* не добавиться, так как в множестве не может быть одинаковых значений */
console.log(set)
console.log(set.has("4")) /* Тип boolean. Спрашивает есть ли "4" в множестве. true(да) / false(нет) */
console.log(set.size) /* Длина множества */
set.delete(2) /* Удаляет элемент 2 из множество */
console.log(set) 
set.clear() /* возвращает пустое множество*/
console.log(set)
// Забавный лайфхак с множеством по удалению повторяющихся элементов внутри массива
let arrSet = [1,2,5,6,7,1,64,2,3,6,43,5,1]
let arrSetSort = [...new Set(arrSet)]