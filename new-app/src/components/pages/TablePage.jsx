import React from "react";
import TableHeader from "../common/Header/TableHeader";
import './TablePage.css';
import CollapsibleTable from "../common/Table/CollapsibleTable";




function TablePage() {
    return(
        <>
            <TableHeader/>
            <div className="contaner_table">
                <div className="searchbar_contaner">
                    <input type="text" placeholder="Поиск..." className="search_bar_style"/>
                    <button className="search_button_style"> Найти </button>
                </div>
                <div className="decoration_table"><CollapsibleTable/></div>
            </div>
        </>
    )
}

export default TablePage;