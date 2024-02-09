import './App.css';
import Navbar from './header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Carosel from './slides/Carosel';
import CatagoryListDiv from './shopdives/CatagoryListDiv';
import LastArrival from './shopdives/LastArrival';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Carosel></Carosel>
      <CatagoryListDiv></CatagoryListDiv>
      <LastArrival></LastArrival>
   </>
  );
}

export default App;
