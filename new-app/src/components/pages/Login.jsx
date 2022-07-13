import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";


function Login() {
    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const [loginUsername, setLoginUsername] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const logUser = () => {
        Axios.post("http://localhost:3001/login", {
            username: usernameLog,
            password: passwordLog,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginUsername(response.data[0].username);
            }
        });
    };

    return (
        <>
            <div className="login_header_container">
                <a href="/"><div className="login_logo"></div></a>
                <div className="nickname">{ loginUsername }</div>
            </div>
            <div className="background">
                <div className="login_contaner">
                    <div className="logo_urfu_login"></div>
                    <div className="login_forms_container">
                        <div className="login_user_email">
                            Имя пользователя или e-mail
                        </div>
                        <input className="login_user_email_input" type="text" placeholder="User name & email"
                            onChange={(event) => {
                                setUsernameLog(event.target.value)
                            }}>
                        </input>
                        <div className="login_password">
                            Пароль
                        </div>
                        <input className="login_password_input" type="password" placeholder="Password"
                            onChange={(event) => {
                                setPasswordLog(event.target.value)
                            }}>
                        </input>
                        <Link to="/Registration" className="login_reg">
                            <div>Зарегистрироваться?</div>
                        </Link>
                        <div className="message">{ loginStatus }</div>
                        <div className="login_page_button" onClick={logUser}>
                            <div className="login_word">Войти</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;