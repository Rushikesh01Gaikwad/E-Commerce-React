import './App.css';
import Navbar from './header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Carosel from './slides/Carosel';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Carosel></Carosel>
   </>
  );
}

export default App;
