
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BlockBuster from './components/BlockBuster';
import FindRetailer from './components/FindRetailer';
import Footer from './components/Footer';
import Section from './components/widgets/SimpleSection';
import FirstSectionImage from './images/1600x720-X1X.jpg';
import SecondSectionImage from './images/lifestyle-shot-1600x600.jpg';



function App() {
  return (
    <div className="App">
      <Navigation />
      < Hero />
      <Section title="Witness unbelievable visuals" paragraph=" With 40% more power than any other console, games play better on Xbox One X. Pair it with a Samsung QLED TV–capable of more
                        than a billion shades and 100% colour volume–for unrivalled gaming detail." displayImage={FirstSectionImage} />
      <Section title="A picture-perfect pair" paragraph="6 teraflops of graphical processing power deserves only the best visual real estate. The Xbox One X feels right at home 
            on Samsung QLED TV, thanks to its bezel-less display, advanced Auto Game Mode, and ultra-fast motion rate." displayImage={SecondSectionImage} />
      <BlockBuster />
      <FindRetailer />
      <Footer />
    </div>
  );
}

export default App;
