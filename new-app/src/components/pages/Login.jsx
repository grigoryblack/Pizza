import React from "react";
import './Login.css'
import { Link } from "react-router-dom";


function Login() {
    return (
        <>
            <div className="login_header_container">
                <a href="/"><div className="login_logo"></div></a>
            </div>
            <div className="background">
                <div className="login_contaner">
                    <div className="logo_urfu_login"></div>
                    <div className="login_forms_container">
                        <div className="login_user_email">
                            Имя пользователя или e-mail
                        </div>
                        <input className="login_user_email_input" type="text" placeholder="User name & email"></input>
                        <div className="login_password">
                            Пароль
                        </div>
                        <input className="login_password_input" type="password" placeholder="Password"></input>
                        <Link to="/Registration" className="login_reg">
                            <div>Зарегистрироваться?</div>
                        </Link>
                        <div className="login_page_button">
                            <div className="login_word">Войти</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;