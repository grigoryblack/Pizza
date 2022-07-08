import React from "react";
import Header from "../common/Header/Header";
import './AboutUs.css';

function AboutUs() {
    return(
        <>
            <Header/>
            <div className="about_us_contaner">
                <div className="about_us_title">UrFU’S Pizza - </div>
                <div className="about_us_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation</div>
                <div className="about_us_contact">Контакты
                    <div className="mobile_and_mail_about_us">Телефон:
                        <div className="multyply_components_about_us">
                            <button className="number_about_us"> +7-(912)-889-49-99 </button>
                            <button className="number_about_us"> +7-(912)-889-88-22 </button>
                        </div>
                    </div>
                    <div className="mobile_and_mail_about_us">Почта: <button className="number_about_us"> example@mail.ru </button> </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;