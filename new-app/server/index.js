const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: "mrlora3q_pizza",
    host: "mrlora3q.beget.tech",
    password: "Biba123!",
    database: "mrlora3q_pizza",
});

db.query("SET SESSION wait_timeout = 604800"); // 7 days timeout

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
                res.send({ message: "Регистрация прошла успешно!" });
            }
        }
    );
});

app.post("/order", (req, res) => {
    const f_name = req.body.f_name;
    const telephone = req.body.telephone;
    const address = req.body.address;
    const d_time = req.body.d_time;

    db.query(
        "INSERT INTO orders (f_name, telephone, address, d_time) VALUES (?,?,?,?)",
        [f_name, telephone, address, d_time],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: "Заказ принят!" });
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
                res.send({ err: err })
            }

            if (result.length > 0) {
                req.session.user = result;
                res.send(result)
            } else {
                res.send({ message: "Неправильный пароль или имя пользователя!" });
            }
        }
    );
});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});