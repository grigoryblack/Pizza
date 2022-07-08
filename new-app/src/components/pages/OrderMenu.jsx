import React from "react";
import Header from "../common/Header/Header";
import './OrderMenu.css';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {Link} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function OrderMenu() {
    return(
        <>
            <Header/>
            <div className="order_menu_contaner">

                <div className="left_contaner_order_menu">

                    <div className="title_order_menu"> Заказ на доставку </div>

                    <div className="contaner_content_order">
                        <div className="subtitle_order"> Имя </div>
                        <input className="order_input" type="text"/>
                    </div>

                    <div className="contaner_content_order">
                        <div className="subtitle_order"> Номер телефона </div>
                        <input className="order_input" type="text"/>
                    </div>

                    <div className="title_order_menu"> Выберите место </div>

                    <div className="contaner_content_order">
                        <div className="subtitle_order"> В ресторане </div>
                        <input className="checkbox_order" type="checkbox"/>
                    </div>

                    <div className="contaner_content_order_adres">
                        <div className="subtitle_order"> Адрес доставки </div>
                        <textarea name="Adres" id="" cols="100" rows="10"  className="adres_area"></textarea>
                    </div>

                    <div className="contaner_content_order">
                        <div className="subtitle_order"> Время доставки </div>
                        <input className="order_input_time" type="text"/>
                        <i className="icon_time"><ScheduleIcon/></i>
                    </div>

                    <div className="title_order_menu"> Промокод </div>

                    <div className="contaner_content_order_promo">
                        <input className="order_input_promo" type="text"/>
                        <button className="button_promo"> Применить </button>
                    </div>

                    <div className="pay_contaner">
                        <div className="pay_title"> Способ оплаты </div>
                        <div className="contaner_content_order">
                            <div className="subtitle_order"> Картой на сайте </div>
                            <input className="checkbox_order" type="radio"/>
                        </div>
                        <div className="contaner_content_order">
                            <div className="subtitle_order"> Наличными </div>
                            <input className="checkbox_order" type="radio"/>
                        </div>
                    </div>
                    <div className="button_position_order">
                        <Link to = "/Menu" className = "back_to_menu_button" > <ArrowBackIosNewIcon/> Назад в меню </Link>
                        <Link to = "/Order" className = "accept_order_button" > Оформить заказ <ArrowForwardIosIcon/></Link>
                    </div>

                </div>
                <div className="right_contaner_order_menu">
                    <div className="order_case">
                        <div className="title_pizza_order">Состав заказа</div>

                            <div className="pizza">
                                <div className="left_side_order">
                                    <div className="title_name_pizza">Пепперони</div>
                                    <div className="subtitle_name_pizza">Классическая, 30 см</div>
                                </div>
                                <div className="price_pizza">419 ₽</div>
                            </div>

                            <div className="counter_pizza">
                                <div className="counter">1 товар + набор</div>
                                <div className="price_counter">419 ₽</div>
                            </div>

                        <div className="final_price">
                            <div className="title_final_price">Сумма заказа</div>
                            <div className="price_pizza_final">419 ₽</div>
                        </div>

                        <div className="sub_sub_title_pizza">Бесплатная доставка</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderMenu;

/*Добавить лейблы к инпутам и сделать правую секцию*/