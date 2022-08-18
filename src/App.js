import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TradeMark from './components/TradeMark';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TradeMark />
      <Courses />
      <Testimonials />
      <BlogPost />
      <Footer />
    </div>
  );
}

export default App;
