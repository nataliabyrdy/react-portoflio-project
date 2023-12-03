import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Disc from './components/Disc/Disc';
import Media from './components/Media/Media';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ScrollButton />
      <About />
      <Disc />
      <Media />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
