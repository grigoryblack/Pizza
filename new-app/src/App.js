import './App.css';
import MainPage  from "./components/pages/MainPage";
import AboutUs from "./components/pages/AboutUs";
import OrderMenu from "./components/pages/OrderMenu";
import MenuPage from "./components/pages/MenuPage";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import CheckPage from "./components/pages/CheckPage";
import TablePage from "./components/pages/TablePage";
import { Route, Routes } from 'react-router-dom';
import Axios from "axios";

Axios.defaults.withCredentials = true;


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element = {<MainPage/>} />
          <Route path="/Menu" element = {<MenuPage/>} />
          <Route path="/Order" element = {<OrderMenu/>} />
          <Route path="/About_Us" element = {<AboutUs/>} />
          <Route path="/Login" element = {<Login/>} />
          <Route path="/Registration" element = {<Registration/>} />
          <Route path="/Check" element = {<CheckPage/>} />
          <Route path="/Table" element = {<TablePage/>} />
      </Routes>

    </>
  );
}

export default App;
