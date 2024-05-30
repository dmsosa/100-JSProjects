import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const showUp = () => {
    document.body.classList.remove("nonscroll");
    document.querySelector("div.curtain").classList.add("remove");
    document.querySelector("div.curtain .giftbox").classList.add("remove");
  }
  return (
    <>
      <div className='curtain'>
        <div className='gift-container'>
          <div className='gift-lid'></div>
          <button onClick={() => showUp()}>
            <div className='giftbox'></div>
          </button>
        </div>
      </div>
      <div className='header'>
        <Navbar/>
      </div>
      <div className='main'>
        <Outlet/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </>
  );
}
      
export default App;
