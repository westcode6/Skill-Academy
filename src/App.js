// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { About } from "./pages/About";
import Blogs from "./pages/Blogs";
import { CoursesPage } from "./pages/Course";
import './index.css';
import './App.css';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
