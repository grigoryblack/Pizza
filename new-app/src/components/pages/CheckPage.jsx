import React from "react";
import Header from "../common/Header/Header";
import './CheckPage.css'
import { LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function CheckPage() {

    return(
        <>
            <Header/>
            <div className="check_contaner">
                <div className="title_check_contaner">Чек заказа</div>
                <div className="check_contaner_inner">
                    <div className="left_check_box">
                        <div className="left_check_contaner">
                            <div className="title_lefr_check">Информация о заказе</div>
                            <div className="title_info_check"> Имя: <div className="info_check"> Григорий </div> </div>
                            <div className="title_info_check"> Номер телефона: <div className="info_check"> +7-(912)-889-89-99 </div> </div>
                            <div className="title_info_check"> Расчтетное время: <br/> <div className="info_check"> 08.07.2022  14:15 </div> </div>
                            <div className="title_info_check"> Оплата: <br/> <div className="info_check"> По карте </div> </div>
                        </div>
                        <Link to = '/Menu' className ="back_to_menu_check"><ArrowBackIosNewIcon/> Назад в меню</Link>
                    </div>
                    <div className="right_check_contaner">
                        <div className="right_contaner_box">
                            <div className="right_title_check">Заказ №154</div>
                            <div className="right_title_check">Чек</div>
                            <div className="box_check">
                                <div className="pizza_contaner_check">
                                    <div className="title_pizza_check">Пепперони</div>
                                    <div className="subtitle_pizza_check">Классическая, 30 см</div>
                                </div>
                                <div className="price_pizza_check">419 ₽</div>
                            </div>
                            <div className="box_check">
                                <div className="price_contaner_check">
                                    <div className="title_price_check">1 товар</div>
                                    <div className="adres_check">Доставка по адресу: г. Екатеринбург, ул. Пушкина 45 а, кв 123.</div>
                                </div>
                                <div className="price_check">419 ₽</div>
                            </div>
                            <div className="final_price_box">
                                <div className="final_price_title">
                                    Сумма заказа
                                </div>
                                <div className="final_price_checkbox">419 ₽</div>
                            </div>

                            <div className="delivery_check">Бесплатная доставка</div>
                        </div>

                        <div className="progress_bar_check_box">
                            <div className="title_progress_bar">
                                Статус заказа
                            </div>
                            <div className="subtitle_progress_bar">Выдано курьеру</div>
                            <LinearProgress variant = 'buffer'  value={60} style={{width:300 , height:5}}  className="progressbar"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckPage;