import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Blogs() {
  return (
    <>
      <Navbar />
      <header className="w-full h-80  bg-amber-500 p-6 flex items-center justify-center mt-0">
        <div className="mt-20">
          <Link to="/">
          <p>
            <span className="block md:hidden text-2xl text-cyan-900 transform transition  hover:-translate-x-1">
              <HiArrowNarrowLeft />
            </span>
          </p></Link>
          <div className="text-center mt-4">
            <h1 className="text-3xl text-white font-bold">
              Skill <span className="text-cyan-900">Academy</span>
            </h1>
            <p className="py-4 text-amber-50">
              A blog about learning new skills and getting your first job
            </p>
          </div>
        </div>
      </header>
      <BlogPost />
      <Footer />
    </>
  );
}

export default Blogs;
