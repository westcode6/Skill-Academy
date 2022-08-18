import {FaFacebook, FaInstagramSquare,FaLinkedin} from "react-icons/fa"


export default function Footer() {
    return <>

    <footer className="px-6 md:px-16 flex items-center justify-start">
    <div className="w-full grid grid-cols-1 md:grid-cols-4 py-10 md:py-20 space-y-10 sm:space-y-0 md:space-x-10">
        <div>
        <a
              href="/"
              className="text-xl md:text-2xl text-indigo-600 font-semibold uppercase"
            >
              skill <span className="text-gray-800">academy</span>
            </a>

            <p className="text-xs text-gray-500 mt-4">4517 Washington Ave, manchester, Kenturky 39495</p>
        </div>

        <div>
            <h5 className="text-lg text-gray-800 font-semibold">Privacy</h5>
            <ul className="mt-2">
                <li><a href="/" className="text-xs text-gray-500">Terms of Service & Honor code </a></li>
                <li><a href="/" className="text-xs text-gray-500">Privacy Policy </a></li>
                <li><a href="/" className="text-xs text-gray-500">Trademark Policy </a></li>
                <li><a href="/" className="text-xs text-gray-500">Accessibility Policy </a></li>
            </ul>
        </div>


        <div>
            <h5 className="text-lg text-gray-800 font-semibold">Latest Courses</h5>
            <ul className="mt-2">
                <li><a href="/" className="text-xs text-gray-500">Web Design </a></li>
                <li><a href="/" className="text-xs text-gray-500">Business </a></li>
                <li><a href="/" className="text-xs text-gray-500">Music </a></li>
                <li><a href="/" className="text-xs text-gray-500">Marketing </a></li>
            </ul>
        </div>

        <div className="flex lg:flex-col lg:space-y-6 text-sm text-indigo-600 font-semibold">
            <span className="text-2xl"><FaFacebook /></span>
            <span className="text-2xl"><FaInstagramSquare /></span>
            <span className="text-2xl"><FaLinkedin /></span>
        </div>
    </div>
    </footer>
    </>
}