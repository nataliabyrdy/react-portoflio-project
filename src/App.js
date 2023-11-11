import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Concerts from './components/Concerts/Concerts';
import Calendar from './components/Calendar/Calendar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <About />
      <Concerts />
      <Calendar />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
