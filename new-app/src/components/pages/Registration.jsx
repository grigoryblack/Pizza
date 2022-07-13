import React from "react";
import './Registration.css'
import { useState } from "react";
import Axios from "axios";


function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [regStatus, setRegStatus] = useState("");

    const addUser = () => {
        Axios.post("http://localhost:3001/register", {
            username: username,
            password: password,
            email: email,
        }).then((response) => {
            if (response.data.message) {
                setRegStatus(response.data.message);
            }
        });
    };

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
                        <input className="reg_username_input" type="text" placeholder="Username"
                            onChange={(event) => {
                                setUsername(event.target.value)
                            }}>
                        </input>
                        <div className="reg_password">
                            Пароль
                        </div>
                        <input className="reg_password_input" type="password" placeholder="Password"
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}>
                        </input>
                        <div className="reg_user_email">
                            E-mail
                        </div>
                        <input className="reg_user_email_input" type="text" placeholder="E-mail"
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}>
                        </input>
                        <div className="message">{ regStatus }</div>
                        <div className="reg_page_button" onClick={ addUser }>
                            <div className="reg_word">Регистрация</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;