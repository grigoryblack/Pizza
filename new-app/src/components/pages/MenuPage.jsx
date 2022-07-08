import React from "react";
import Header from "../common/Header/Header";
import './MenuPage.css'


function MenuPage() {
    return(
        <>
            <Header/>
            <div className="menu_contaner">
                <div className="title_menu"> Пицца </div>
                <div className="pizza_line">
                    <div className="pizza_contaner">
                        <div className="pic1"></div>
                        <div className="pizza_header">Четыре сыра</div>
                        <div className="pizza_subheader">Моцарелла, сыры чеддер и пармезан,
                            соус альфредо</div>
                        <div className="price_button">
                            <div className="price_menu">289 ₽</div>
                            <button className="button_menu ">Выбрать</button>

                        </div>

                    </div>
                    <div className="pizza_contaner">
                        <div className="pic2"></div>
                        <div className="pizza_header">Четыре сезона</div>
                        <div className="pizza_subheader">Увеличенная порция моцареллы, ветчина,
                            пикантная пепперони, кубики брынзы, томаты,
                            шампиньоны, итальянские травы,
                            томатный соус</div>
                            <div className="price_button">
                                <div className="price_menu">429 ₽</div>
                                <button className="button_menu ">Выбрать</button>
                            </div>

                    </div>
                    <div className="pizza_contaner">
                        <div className="pic3"></div>
                        <div className="pizza_header">Пепперони</div>
                        <div className="pizza_subheader">Пикантная пепперони, увеличенная порция
                            моцареллы, томатный соус</div>
                        <div className="price_button">
                            <div className="price_menu">419 ₽</div>
                            <button className="button_menu ">Выбрать</button>
                        </div>

                    </div>
                </div>
                <div className="pizza_line">
                    <div className="pizza_contaner">
                        <div className="pic4"></div>
                        <div className="pizza_header">Ветчина и грибы</div>
                        <div className="pizza_subheader">Ветчина, шампиньоны, увеличенная
                            порция моцареллы, томатный соус</div>
                        <div className="price_button">
                            <div className="price_menu">359 ₽</div>
                            <button className="button_menu ">Выбрать</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuPage;