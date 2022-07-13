const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "registration_schema",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    db.query(
        "INSERT INTO reg_users (username, password, email) VALUES (?,?,?)",
        [username, password, email],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({message: "Регистрация прошла успешно!"});
            }
        }
    );
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM reg_users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err: err})
            }

            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ message: "Неправильный пароль или имя пользователя!" });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});