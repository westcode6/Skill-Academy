import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TradeMark from './components/TradeMark';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TradeMark />
      <Courses />
      <Testimonials />
    </div>
  );
}

export default App;
