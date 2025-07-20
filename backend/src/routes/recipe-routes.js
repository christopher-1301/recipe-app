const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const router = express.Router();

const dbPath = path.join(__dirname, '../data/recipes.db');

router.get('/', (req, res) => {
    
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error("Error connecting to the database", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        db.all("SELECT * FROM mock_recipes", [], (err, rows) => {
            if (err) {
                console.error("Error fetching recipes", err);
                res.status(500).send("Internal Server Error");
                return;
            }
            res.status(200).json(rows);
            db.close();
        });
    });
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error("Error connecting to the database", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        db.get(`SELECT *
                FROM mock_recipes
                WHERE id = ${id}`, [], (err, row) => {
            if (err) {
                console.error("Error fetching recipe", err);
                res.status(404).send("Internal Server Error");
                return;
            }
            res.status(200).json(row);
            db.close();
        });
    });
});

router.post("/", (req, res) => {
    const {title, description, url} = req.body;

    if (!title || !url) {
        return res.status(400).json({error: "Title and URL are required fields"});
    }

    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error("Error connecting to the database", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        const stmt = db.prepare("INSERT INTO mock_recipes (title, description, url) VALUES (?, ?, ?)");
        stmt.run([title, description || "", url], function (err) {
            if (err) {
                console.error("Error inserting recipe", err);
                res.status(500).send("Internal Server Error");
                return;
            }

            res.status(201).json({
                id: this.lastID,
                title,
                description: description || "",
                url
            });

            stmt.finalize();
            db.close();
        });
    });
});

module.exports = router;