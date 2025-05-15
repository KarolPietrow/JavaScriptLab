// Praca domowa - Zadanie 4, 5
// 1
const currentUser = {
    name: "Jan",
    surname: "Kowalski",
    email: "jan.kowalski@gmail.com",
    www: "https://jankowalski.com",
    userType: "admin",
    isActive: false,
    show() {
        console.log(`Imię: ${this.name}`);
        console.log(`Nazwisko: ${this.surname}`);
        console.log(`Email: ${this.email}`);
        console.log(`Strona WWW: ${this.www}`);
        console.log(`Typ użytkownika: ${this.userType}`);
        console.log(`Aktywny: ${this.isActive}`);
    },
    setActive(active) {
        if (typeof active === "boolean") {
            this.isActive = active;
        } else {
            console.error("setActive: wartość musi być typu boolean (true/false)");
        }
    }
}

currentUser.show();
currentUser.setActive(true);
currentUser.show();

// 2
class Book {
    constructor() {
        this.users = [];
    }
    addUser(name, age, phone) {
        this.users.push({
            name,
            age,
            phone
        })
    }
    showUsers() {
        console.log("Wszyscy użytkownicy w książce:")
        if (this.users.length !== 0) {
            this.users.forEach((user) => {
                console.log("Imię: " + user.name + ", wiek: " + user.age + ", telefon: " + user.phone);
            });
        } else {
            console.log("Brak użytkowników")
        }
    }
    findByName(name) {
        const user = this.users.find(user => user.name === name);
        if (user) {
            console.log("Znaleziono użytkownika " + name + " - wiek: " + user.age + ", telefon: " + user.phone);
        } else {
            console.log(false);
        }
    }
    findByPhone(phone) {
        const user = this.users.find(user => user.phone === phone);
        if (user) {
            console.log("Znaleziono użytkownika " + name + " - wiek: " + user.age + ", telefon: " + user.phone);
        } else {
            console.log(false);
        }
    }
    getCount() {
        console.log("Liczba użytkowników: " + this.users.length);
    }
}

const book  = new Book();
book.addUser("Jan Kowalski", 20, "+48123456789");
book.getCount();
book.showUsers();
book.findByName("Jan Kowalski");
book.findByPhone("+48000000000")

// 3
const text = {
    check(txt,word) {
        return txt.includes(word);
    },
    getCount(text) {
        return text.length
    },
    getWordsCount(txt) {
        txt = txt.split(" ");
        return txt.length
    },
    setCapitalize(txt) {
        txt = txt.split(" ")
        txt = txt.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return txt.join(" ")
    },
    setMix(txt) {
        txt = txt.split("")
        for (let i = 0; i < txt.length; i++) {
            txt[i] = txt[i].toLowerCase()
            if (++i<txt.length) {
                txt[i] =  txt[i].toUpperCase()
            }
        }
        return txt.join("");
    },
    generateRandom(lng) {
        let string = ""
        const startId = 97; // Kod 'a' w ASCII
        for (let i = 0; i < lng; i++) {
            const letterIndex = Math.floor(Math.random() * 26);
            string += String.fromCharCode(startId + letterIndex);
        }
        return string;
    }
}

console.log(text.check("ala ma kota", "kot"));
console.log(text.getCount("Ala ma kota"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.setCapitalize("ala ma kota"))
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10))

// 4
// JavaScript nie ma klas w tradycyjnym sensie tego słowa, używając słowa 'class' i tak w rzeczywistości działamy na prototypie
String.prototype.mirror = function() {
    return this.split("").reverse().join("");
};
console.log("Ala ma kota".mirror());

// 5
// Domnięcie to funkcja, która ma dostęp do zmiennych, które są na zewnątrz tej funkcji
function createCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2