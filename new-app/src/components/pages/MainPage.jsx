import React from "react";
import Header from "../common/Header/Header";
import './MainPage.css'
import { Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function MainPage() {
    return(
        <>
            <div className="background_main">
                <Header/>
                <div className="main_contaner">
                        <div className="logo_urfu"></div>
                        <div className="decoratinon_line"></div>
                        <Link  to = "/Menu" className = "main_page_button">
                            <p> Выберите пиццу</p>
                            <ArrowForwardIcon/>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default MainPage;