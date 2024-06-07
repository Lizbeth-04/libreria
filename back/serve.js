const express = require('express');
const db = require('./database');
const app = express();
const PORT = 3000; // o el puerto que prefieras

app.use(express.static('front'));
app.use(express.json());

app.get('/books', (req, res) => {
    db.all("SELECT * FROM books", [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    db.run("UPDATE books SET status = ? WHERE id = ?", [status, id], function(err) {
        if (err) {
            throw err;
        }
        
        db.get("SELECT * FROM books WHERE id = ?", [id], (err, row) => {
            if (err) {
                throw err;
            }
            res.json(row);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
