const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
const db = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// GET ALL TASKS
app.get("/tasks", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM tasks ORDER BY id");

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET TASK BY ID
app.get("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const result = await db.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.json(result.rows[0]);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// CREATE TASK
app.post("/tasks", async (req, res) => {

    try {

        const { title } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                error: "Title is required"
            });
        }

        const result = await db.query(

            "INSERT INTO tasks(title, done) VALUES($1,$2) RETURNING *",

            [title, false]

        );

        res.status(201).json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// UPDATE TASK
app.put("/tasks/:id", async (req, res) => {

    try {

        const id = req.params.id;
        const { title, done } = req.body;

        const check = await db.query(
            "SELECT * FROM tasks WHERE id=$1",
            [id]
        );

        if (check.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        if (!title || title.trim() === "") {
            return res.status(400).json({
                error: "Title is required"
            });
        }

        const result = await db.query(

            "UPDATE tasks SET title=$1, done=$2 WHERE id=$3 RETURNING *",

            [title, done, id]

        );

        res.json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// DELETE TASK
app.delete("/tasks/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const result = await db.query(

            "DELETE FROM tasks WHERE id=$1 RETURNING *",

            [id]

        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.status(204).send();

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});