import {React, useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Header() {

    const [isActive,setIsActive] = useState (false)
    const [count,setCount] = useState(0)


    return(
        <>
            <div className="header">
                <a href="/"><div className="main_logo"></div></a>
                <button className="call_number"> +7-(912)-889-49-99 </button>
                <div className="main_nav">
                    <Link className = "main_nav_item" to ="/" > Главная </Link>
                    <Link className = "main_nav_item" to ="/About_Us" > О нас </Link>
                    <Link className = "main_nav_item" to ="/Menu" > Меню </Link>
                    <div className="dropdown_order_contaner">
                    <div className="dropdown_order" onClick={(e) => setIsActive(!isActive)}> <ShoppingCartIcon/>

                        {isActive && (
                            <div className="order_contaner_dropdown">
                                <div className="title_order_dropdown">Товар не выбран</div>
                                <div className="pizza_dropdown_order">
                                    <div className="pizza_dropdown"> Корзина пуста</div>
                                </div>
                                <div className="counter_dropdown_pizza">
                                    <div className="price_dropdown_counter"> 0 ₽</div>
                                    <div className="counter_dropdown">
                                        <button className="counter_button" onClick={()=>setCount(count-1)}>-</button>
                                        <div className="counter">{count}</div>
                                        <button className="counter_button"onClick={()=>setCount(count+1)}>+</button>
                                    </div>
                                </div>
                                <div className="final_price_dropdown_order">
                                    <div className="title_final_price_dropdown">Сумма заказа</div>
                                    <div className="final_price_dropdown"> 0 ₽</div>
                                </div>
                                <Link className = "goto_order" to ="/Order" > К оформлению заказа <ArrowForwardIosIcon sx={{ fontSize: 20 }}/> </Link>
                            </div>

                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;