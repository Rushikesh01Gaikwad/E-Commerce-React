import './App.css';
import Navbar from './header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Carosel from './slides/Carosel';
import CatagoryListDiv from './shopdives/CatagoryListDiv';
import LastArrival from './shopdives/LastArrival';
import Fashions from './shopdives/Fashions';
import Jwellery from './shopdives/Jwellery';
import Aboutus from './footer/Aboutus';
import Footer from './footer/Footer';
import TodayDealssidebar from './sidebarcontents/TodayDealssidebar';
import Bestsellersidebar from './sidebarcontents/Bestsellersidebar';
import Fashionssidebar from './sidebarcontents/Fashionssidebar';
import Giftideassidebar from './sidebarcontents/Giftideassidebar';
import Locationsidebar from './sidebarcontents/Locationsidebar';
import Menssidebar from './sidebarcontents/Menssidebar';
import Womenssidebar from './sidebarcontents/Womenssidebar';
import Cartsidebar from './sidebarcontents/Cartsidebar';
import SignInPopup from './popups/SignInPopup';
import SignupPopup from './popups/SignupPopup';
import LangPopup from './popups/LangPopup';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Navbar/>
        <Locationsidebar/>
        <Bestsellersidebar/>
        <Fashionssidebar/>
        <Giftideassidebar/>
        <Menssidebar/>
        <TodayDealssidebar/>
        <Womenssidebar/>
        <Cartsidebar/>
        <SignInPopup/>
        <SignupPopup/>
        <LangPopup/>
        <Header/>
        <Carosel/>
        <CatagoryListDiv/>
        <LastArrival/>
        <Fashions/>
        <Jwellery/>
        <Aboutus/>
        <Footer/>

      </>
  );
}

export default App;
