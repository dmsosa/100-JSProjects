import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="header">
        <Navbar/>
      </div>
      <div className="main">
        <Outlet/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  );
}
      
export default App;
