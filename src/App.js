
import './App.css';
import About from './component/About';
import Hero from './component/Hero';
import Menu from './component/Menu';
import Navbar from './component/Navbar';
import Event from './component/Event';
import Chefs from './component/Chefs';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <Event/>
      <Chefs/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
