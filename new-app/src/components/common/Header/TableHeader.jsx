import React from 'react';
import {useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import './TableHeader.css'
import LogoutIcon from '@mui/icons-material/Logout';


function TableHeader() {

    const [isActive,setIsActive] = useState (false)
    const [loginUsername, setLoginUsername] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginUsername(response.data.user[0].username);
            }
        });
    }, []);


    return(
        <>
            <div className="header">
                <a href="/Table"><div className="main_logo"></div></a>
                <div className="main_nav_table">
                    <Link className = "main_nav_item" to ="/Table" > Главная </Link>
                    <div className="dropdown_order_contaner">
                        <div className="dropdown_order order_style" onClick={(e) => setIsActive(!isActive)}> Профиль

                            {isActive && (
                                <div className="order_contaner_table">
                                    <div className="title_order_table"> Ваш профиль </div>
                                    <div className="subtitle_order_table"> Имя <div className="name_table_titlle">{loginUsername}</div> </div>
                                    <div className="subtitle_order_table"> Должность <div className="name_table_titlle">Менеджер</div> </div>

                                    <button className="exit_button_table" ><a href="/" className=""> Выход </a> <LogoutIcon sx={{ fontSize: 14 }}/></button>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TableHeader;