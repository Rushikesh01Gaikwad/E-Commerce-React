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
import Sidebar from './slides/Sidebar';
import Popus from './popups/Popus';
import Locationsidebar from './sidebarcontents/Locationsidebar';
import Bestsellersidebar from './sidebarcontents/Bestsellersidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Header></Header>
        <Carosel></Carosel>
        <Popus></Popus>
        <CatagoryListDiv></CatagoryListDiv>
        <LastArrival></LastArrival>
        <Fashions></Fashions>
        <Jwellery></Jwellery>
        <Aboutus></Aboutus>
        <Footer></Footer>
        <Routes>
          <Route path='/location' element={<Locationsidebar></Locationsidebar>}></Route>
          <Route path='/BestSeller' element={<Bestsellersidebar></Bestsellersidebar>}></Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
