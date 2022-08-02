import './App.css';
import Etapa from './components/Etapa';
import Hero from './components/Hero';
import Nav from './components/Nav';
import QueBuscamos from './components/QueBuscamos';
import QueHacemos from './components/QueHacemos';
import QuienesSomos from './components/QuienesSomos';

function App() {
  return (
    <div className="bg-gradient-to-b from-blueLibu to-darkVioletLibu">
      <Nav />
      <Hero />
      <QuienesSomos />
      <QueHacemos />
      <QueBuscamos />
      <Etapa />
    </div>
  );
}

export default App;
