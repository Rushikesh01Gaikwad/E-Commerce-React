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
