export default function Navbar() {
  const $ = (el) => document.getElementById(el);

  function showNav() {
    const mobileNav = $("mobileNav");

    mobileNav.classList.toggle("hidden");
  }

  return (
    <>
      <div className="md:mb-0">
        <nav className="w-full fixed z-10 px-4 md:px-16 py-5 bg-white shadow-md md:flex items-center justify-between">
          <div className="flex items-center justify-between">
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
              className="block md:hidden text-4xl font-semibold"
            >
              =
            </button>
          </div>

          {/* Mobile Nav Menu */}
          <section id="mobileNav" className="hidden h-96 left-200 ">
            <div className="flex flex-col items-center animate__animated  animate__delay-4s animate__fast animate__bounceInDown">
              <ul className="flex flex-col space-y-6 pt-12">
                <li>
                  <a href="##" className=" nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="##" className="nav-link">
                    Course
                  </a>
                </li>
                <li>
                  <a href="##" className="nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="##" className="nav-link">
                    Login
                  </a>
                </li>
              </ul>
              <button className="px-6 py-3 mt-6 bg-indigo-600 hover:bg-indigo-500 text-white text-md font-semibold rounded-md shadow-md ">
                Sign up
              </button>
            </div>
          </section>

          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              <ul className="flex space-x-6">
                <li>
                  <a href="##" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="##" className="nav-link">
                    Course
                  </a>
                </li>
                <li>
                  <a href="##" className="nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="##" className="nav-link">
                    Login
                  </a>
                </li>
              </ul>
              <button className="px-6 py-3 ml-6 bg-indigo-600 hover:bg-indigo-500 text-white text-md font-semibold rounded-md shadow-md transform transition hover:-translate-x-1">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
