import './App.css';
import  MainPage  from "./components/pages/MainPage";
import AboutUs from "./components/pages/AboutUs";
import OrderMenu from "./components/pages/OrderMenu";
import MenuPage from "./components/pages/MenuPage";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element = {<MainPage/>} />
          <Route path="/Menu" element = {<MenuPage/>} />
          <Route path="/Order" element = {<OrderMenu/>} />
          <Route path="/About_Us" element = {<AboutUs/>} />
      </Routes>

    </>
  );
}

export default App;
