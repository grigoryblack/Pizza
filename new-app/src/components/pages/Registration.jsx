import React from "react";
import './Registration.css'
import { Link } from "react-router-dom";


function Registration() {
    return (
        <>
            <div className="reg_header_container">
                <a href="/"><div className="reg_logo"></div></a>
            </div>
            <div className="background">
                <div className="reg_contaner">
                    <div className="reg_urfu_login"></div>
                    <div className="reg_forms_container">
                        <div className="reg_username">
                            Username
                        </div>
                        <input className="reg_username_input" type="text" placeholder="Username"></input>
                        <div className="reg_password">
                            Пароль
                        </div>
                        <input className="reg_password_input" type="password" placeholder="Password"></input>
                        <div className="reg_user_email">
                            E-mail
                        </div>
                        <input className="reg_user_email_input" type="text" placeholder="E-mail"></input>
                        <div className="reg_page_button">
                            <div className="reg_word">Регистрация</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;