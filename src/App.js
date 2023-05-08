import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Heros from './components/Heros';
import BuyingSection from './components/BuyingSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Information from './components/Information';
import Products from './components/Products';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
   useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
      <Navbar />
      <Heros />
      <BuyingSection/>
      <Information />
      <Products/>
     <Footer/>
    </div>
  );
}

export default App;
