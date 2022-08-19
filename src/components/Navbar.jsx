import { BrowserRouter, Route, Link } from "react-router-dom";
export default function Navbar() {
  const $ = (el) => document.getElementById(el);



  function showNav() {
    const mobileNav = $("mobileNav");
  const mobileNavMenu = $("mobileNavMenu");
    mobileNav.classList.toggle("hidden");
    mobileNavMenu.classList.toggle("hidden");
  }

  function hideMobileNav(){
    const mobileNav = $("mobileNav");
  const mobileNavMenu = $("mobileNavMenu");
    mobileNav.classList.add("hidden");
    mobileNavMenu.classList.add("hidden");

  }

  return (
    <>
      <div className="md:mb-0">
        <nav className="w-full fixed z-30 px-6 md:px-16 py-5 bg-white shadow-sm md:flex items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <a
              href="/"
              className="text-xl md:text-2xl text-indigo-600 font-semibold uppercase"
            >
              skill <span className="text-gray-800">academy</span>
            </a>

            <button
              onClick={() => {
                showNav();
              }}
              className="block  lg:hidden text-4xl font-semibold"
            >
              =
            </button>
          </div>



          <div className="hidden lg:block w-full">
            <div className="w-full flex items-center justify-end">
              <ul className="flex">
              <Link to="/">
                <p className="nav-link">Home</p>
              </Link>

              <Link to="/about">
                <p className="nav-link">About</p>
              </Link>

              <Link to="/courses">
                <p className="nav-link">Courses</p>
              </Link>

              <Link to="/blogs">
                <p className="nav-link">Blog</p>
              </Link>
              <Link to="/login">
                <p className="nav-link">Login</p>
              </Link>

              </ul>
              <button className="px-6  py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-md font-semibold rounded-md shadow-md transform transition hover:-translate-x-1">
                Sign up
              </button>

              {/* <button className="inline-block">Sign Up</button> */}
            </div>
          </div>
        </nav>

           {/* Mobile Nav Menu */}
          <div onClick={() => hideMobileNav()} id="mobileNav" className="overlay w-full hidden absolute  h-screen z-10  bg-black bg-opacity-40"></div>
          <section id="mobileNavMenu"   className="w-60 h-screen hidden absolute bg-indigo-700 z-20">
            <div className=" flex flex-col items-center animate__animated  animate__delay-4s animate__slower animate__bounceInLeft py-10">
              <ul className="flex flex-col text-center space-y-6 pt-28 ">
              <Link to="/">
                <p className="mobile-nav-link">Home</p>
              </Link>

              <Link to="/about">
                <p className="mobile-nav-link">About</p>
              </Link>

              <Link to="/courses">
                <p className="mobile-nav-link">Courses</p>
              </Link>

              <Link to="/blogs">
                <p className="mobile-nav-link">Blog</p>
              </Link>
              <Link to="/login">
                <p className="mobile-nav-link">Login</p>
              </Link>
              </ul>
              <button className="px-6 py-3 mt-6 bg-indigo-600 hover:bg-indigo-500 text-white text-md font-semibold rounded-md shadow-2xl hover:shadow-sm transform transition hover:-translate-y-1">
                Sign up
              </button>
            </div>
          </section>
          </div>
      {/* </div> */}
    </>
  );
}
