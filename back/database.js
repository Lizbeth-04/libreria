const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE books (id INT, title TEXT, author TEXT, status TEXT)");

    const stmt = db.prepare("INSERT INTO books VALUES (?, ?, ?, ?)");

    stmt.run(1, "1984", "George Orwell", "disponible");
    stmt.run(2, "To Kill a Mockingbird", "Harper Lee", "disponible");
    stmt.run(3, "The Great Gatsby", "F. Scott Fitzgerald", "disponible");
    stmt.run(4, "One Hundred Years of Solitude", "Gabriel Garcia Marquez", "en espera");
    stmt.run(5, "Pride and Prejudice", "Jane Austen", "disponible");
    stmt.run(6, "War and Peace", "Leo Tolstoy", "disponible");
    stmt.run(7, "The Catcher in the Rye", "J.D. Salinger", "en espera");
    stmt.run(8, "The Hobbit", "J.R.R. Tolkien", "disponible");
    stmt.run(9, "Moby-Dick", "Herman Melville", "en espera");
    stmt.run(10, "The Odyssey", "Homer", "disponible");

    stmt.finalize();
});

module.exports = db;
