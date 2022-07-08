import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return(
        <>
            <div className="header">
                <a href="/"><div className="main_logo"></div></a>
                <button className="call_number"> +7-(912)-889-49-99 </button>
                <div className="main_nav">
                    <Link className = "main_nav_item" to ="/" > Главная </Link>
                    <Link className = "main_nav_item" to ="/About_Us" > О нас </Link>
                    <Link className = "main_nav_item" to ="/Menu" > Меню </Link>
                    <Link className = "main_nav_item" to ="/Order" > <ShoppingCartIcon/> </Link>
                </div>
            </div>
        </>
    )
}

export default Header;