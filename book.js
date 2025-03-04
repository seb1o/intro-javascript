// Esercizio: Sistema di Gestione di una Biblioteca con Programmazione ad Oggetti in JavaScript
// 
// 
// Obiettivo:Creare un sistema di gestione di una biblioteca
// Requisiti:

//     Classi Principali:
//         Book: Rappresenta un libro generico.
//         PhysicalBook: Eredita da Book e rappresenta un libro fisico con una posizione sugli scaffali.
//         EBook: Eredita da Book e rappresenta un libro elettronico con un formato di file.
//         User: Rappresenta un utente della biblioteca.
//         PremiumUser: Eredita da User e rappresenta un utente premium con un limite massimo di libri che può prendere in prestito estendibile.
//         Library: Gestisce i libri e gli utenti della biblioteca.

//     Proprietà e Metodi:
//         Book:
//             Proprietà: title, author, isbn
//             Metodi: toString().
//         PhysicalBook:
//             Proprietà aggiuntiva: shelfLocation.
//         EBook:
//             Proprietà aggiuntiva: fileFormat.
//         User:
//             Proprietà: name, id, borrowedBooks, maxBorrowLimit(statica) = 3
//             Metodi: borrowBook(book), returnBook(book), borrowedBooksNumber(getter).
//         PremiumUser:
//             Metodo aggiuntivo: extendBorrowLimit(newLimit).
//         Library:
//             Proprietà: books, users.
//             Metodi: addBook(book), removeBook(book), isBookAvailable(isbn), addUser(user), removeUser(user), listBooks(), listUsers(), borrowBook(user, book), returnBook(user, book).

//     Funzionalità:
//         Aggiungere e rimuovere libri dalla biblioteca.
//         Aggiungere e rimuovere utenti dalla biblioteca.
//         Gestire il prestito e la restituzione dei libri agli utenti.
//         Visualizzare l'elenco dei libri disponibili e degli utenti registrati.

class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // get isbn(){
    //     return `isbn + ${this.isbn}`;
    // }
    // set isbn(value){
    //     this.isbn = value;
    // }

    toString() {
        const bookStr = `
        titolo : ${this.title}
        autore : ${this.author}`;
        return bookStr;
    }

}


class PhysicalBook extends Book {
    constructor(title, author, isbn, shelfLocation) {
        super(title, author, isbn);
        this.shelfLocation = shelfLocation;
    }
    toString() {
        const bookphyStr = `
        Physical Version
         ${super.toString()}
        shelfLocation : ${this.shelfLocation}`;
        return bookphyStr;
    }

}


class EBook extends Book {
    constructor(title, author, isbn, fileFormat) {
        super(title, author, isbn);
        this.fileFormat = fileFormat;
    }
    toString() {
        const eBookStr = `
        EBook version 
         ${super.toString()}
        fileFormat : ${this.fileFormat}`;
        return eBookStr;
    }

}



class User {
    static maxBorrowLimit = 3;

    constructor(name, surname, id, borrowedBooks = []) {
        this.name = name;
        this.surname = surname
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

get borrowedBooksNumber(){   ////non so se giusto
    return this.borrowedBooks.length
}


    borrowBook(book) {
        if (this.borrowedBooks.length < User.maxBorrowLimit) {
            this.borrowedBooks.push(book);
            console.log(`${this.name} ha preso in prestito "${book}".`);
        } else {
            console.log(`${this.name} ha raggiunto il limite massimo di prestiti.`);
        }
    }
    returnBook(book) {
        if (this.borrowedBooks.length > 0) {
            console.error('che cazzo vuoi, non hai libri da restituire, mi fai perdere tempo')
            return
        }
        if (this.borrowedBooks.includes(book)) {
            this.borrowedBooks.splice(book);
            console.log(`hai restituito il libro finalmente ${book.title}`);
        } else {
            console.error('che cazzo vuoi, mi fai perdere tempo, sto libro non e nostro')
        }
    }
}
class PremiumUser extends User {
    constructor(name, surname, id, borrowedBooks = [], maxBorrowLimit = User.maxBorrowLimit) {
        super(name, surname, id, borrowedBooks);
        this.maxBorrowLimit = maxBorrowLimit;
    }

    extendBorrowLimit(newLimit) {
        this.maxBorrowLimit = newLimit;
        console.log(`${this.name} ha esteso il limite massimo di prestiti a ${newLimit} libri.`);
    }

    borrowBook(book) {
        if (this.borrowedBooks.length < this.maxBorrowLimit) {
            this.borrowedBooks.push(book);
            console.log(`${this.name} ha preso in prestito "${book.title}".`);
        } else {
            console.log(`${this.name} ha raggiunto il limite massimo di prestiti.`);
        }
    }   
}

class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Libro aggiunto: "${book.title}".`);
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
        console.log(`Libro con ISBN ${isbn} rimosso.`);
    }

    addUser(user) {
        this.users.push(user);
        console.log(`Utente aggiunto: "${user.name} ${user.surname}".`);
    }

    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
        console.log(`Utente con ID ${id} rimosso.`);
    }

    listBooks() {
        console.log("Elenco libri disponibili:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i].toString());
        }
    }

    listUsers() {
        console.log("Elenco utenti registrati:");
        for (let i = 0; i < this.users.length; i++) {
            console.log(`${this.users[i].name} ${this.users[i].surname} (ID: ${this.users[i].id})`);
        }
    }

    borrowBook(user, book) {
        let bookAvailable = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isbn === book.isbn) {
                bookAvailable = true;
                break;
            }
        }

        if (bookAvailable) {
            user.borrowBook(book);
            console.log(`Prestito registrato per ${user.name} con il libro "${book.title}".`);
        } else {
            console.log(`Il libro "${book.title}" non è disponibile.`);
        }
    }

    returnBook(user, book) {
        user.returnBook(book);
        console.log(`Restituzione registrata per ${user.name} con il libro "${book.title}".`);
    }
}




















const book1 = new Book(`1984`, `George Orwell`, 9780451524935);
const book2 = new Book(`Il nome della rosa`, `Umberto Eco`, 9780553274865);
const book3 = new Book(`La divina commedia`, `Dante Alighieri`, 9788804678579);
const book4 = new Book(`Don Chisciotte`, `Miguel de Cervantes`, 9780142437230);
const book5 = new Book(`Orgoglio e pregiudizio`, `Jane Austen`, 9780553213102);
const book6 = new Book(`Cime tempestose`, `Emily Brontë`, 9780553212587);
const book7 = new Book(`Guerra e pace`, `Lev Tolstoj`, 9781400079988);
const book8 = new Book(`Il ritratto di Dorian Gray`, `Oscar Wilde`, 9780141439570);
const book9 = new Book(`Frankenstein`, `Mary Shelley`, 9780486282114);

const bookPhy1 = new PhysicalBook(`1984`, `George Orwell`, 9780451524935, `a-105`);
const bookPhy2 = new PhysicalBook(`Il nome della rosa`, `Umberto Eco`, 9780553274865, `a-212`);
const bookPhy3 = new PhysicalBook(`La divina commedia`, `Dante Alighieri`, 9788804678579, `a-315`);
const bookPhy4 = new PhysicalBook(`Don Chisciotte`, `Miguel de Cervantes`, 9780142437230, `a-425`);
const bookPhy5 = new PhysicalBook(`Orgoglio e pregiudizio`, `Jane Austen`, 9780553213102, `a-531`);
const bookPhy6 = new PhysicalBook(`Cime tempestose`, `Emily Brontë`, 9780553212587, `a-642`);
const bookPhy7 = new PhysicalBook(`Guerra e pace`, `Lev Tolstoj`, 9781400079988, `a-743`);
const bookPhy8 = new PhysicalBook(`Il ritratto di Dorian Gray`, `Oscar Wilde`, 9780141439570, `b-814`);
const bookPhy9 = new PhysicalBook(`Frankenstein`, `Mary Shelley`, 9780486282114, `b-930`);

const eBook1 = new EBook(`1984`, `George Orwell`, 9780451524935, `.epub`);
const eBook2 = new EBook(`Il nome della rosa`, `Umberto Eco`, 9780553274865, `.mobi`);
const eBook3 = new EBook(`La divina commedia`, `Dante Alighieri`, 9788804678579, `.pdf`);
const eBook4 = new EBook(`Don Chisciotte`, `Miguel de Cervantes`, 9780142437230, `.epub`);
const eBook5 = new EBook(`Orgoglio e pregiudizio`, `Jane Austen`, 9780553213102, `.mobi`);
const eBook6 = new EBook(`Cime tempestose`, `Emily Brontë`, 9780553212587, `.pdf`);
const eBook7 = new EBook(`Guerra e pace`, `Lev Tolstoj`, 9781400079988, `.epub`);

const user1 = new User(`Alessandro`, `Bianchi`, `T-5682`);
const user2 = new User(`Beatrice`, `Rossi`, `T-3427`);
const user3 = new User(`Claudio`, `Verdi`, `T-1934`);
const user4 = new User(`Debora`, `Neri`, `T-8753`);
const user5 = new User(`Enrico`, `Galli`, `T-9482`);
const user6 = new User(`Federica`, `Moretti`, `T-7592`);
const user7 = new User(`Giorgia`, `Colombo`, `T-3471`);
const user8 = new User(`Ivano`, `Ferrari`, `T-6574`);
const user9 = new User(`Jessica`, `Romano`, `T-4376`);
const user10 = new User(`Lorenzo`, `Conti`, `T-2985`);

const premiumUser1 = new PremiumUser(`Manuela`, `Napoli`, `T-7432`);
const premiumUser2 = new PremiumUser(`Nicola`, `Job`, `T-9821`);
const premiumUser3 = new PremiumUser(`Olivia`, `Gas`, `T-6721`);
const premiumUser4 = new PremiumUser(`Pietro`, `Nana`, `T-1234`);