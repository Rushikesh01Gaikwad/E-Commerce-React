import './App.css';
import Navbar from './header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Allsidebar from './sidebarcontents/Allsidebar';
import Allpopup from './popups/Allpopup';
import Alldives from './shopdives/Alldives';
import Aboutus from './footer/Aboutus';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maincard from './shopdives/Maincard';
import Apidata from './shopdives/Apidata';
import Menscatagory from './Catagories/Menscatagory';
import Womenscatagory from './Catagories/Womenscatagory';
import Electronicscat from './Catagories/Electrocatagory';
import Jwellerycatagory from './Catagories/Jwellerycatagory';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Header/>
        <Allsidebar/>
        <Allpopup/>
        <Routes>
          <Route path='/' element={<Alldives/>}></Route>
          <Route path='/menscat' element={<Menscatagory/>}></Route>
          <Route path='/womencat' element={<Womenscatagory/>}></Route>
          <Route path='/elctroncat' element={<Electronicscat/>}></Route>
          <Route path='/jwellerycat' element={<Jwellerycatagory/>}></Route>
          <Route path='/products' element={<Apidata/>}></Route>
          <Route path='/Mainproduct' element={<Maincard/>}></Route>
        </Routes>
        <Aboutus/>
        <Footer/>
      </BrowserRouter>
      </>
  );
}

export default App;
