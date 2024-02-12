import './App.css';
import Navbar from './header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Carosel from './slides/Carosel';
import CatagoryListDiv from './shopdives/CatagoryListDiv';
import LastArrival from './shopdives/LastArrival';
import Divtechmode from './shopdives/Divtechmode';
import Findmore from './shopdives/Findmore';
import Aboutus from './footer/Aboutus';
import Footer from './footer/Footer';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Carosel></Carosel>
      <CatagoryListDiv></CatagoryListDiv>
      <LastArrival></LastArrival>
      <Divtechmode></Divtechmode>
      <Findmore></Findmore>
      <Aboutus></Aboutus>
      <Footer></Footer>
   </>
  );
}

export default App;
