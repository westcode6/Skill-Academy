import {GoSearch} from "react-icons/go"

export default function Hero() {
  return (
    <>
      <section className="hero-section px-6 pt-16 md:pt-0 md:px-16 h-screen md:flex items-center justify-center">
       <div className="md:flex mt-16">
       <div className="md:w-2/3 md:py-8 flex flex-col items-center justify-center">
          <div className="md:mr-20 ">
            <h1 className="text-4xl md:text-6xl font-semibold md:leading-2">
              Find Our Best Online Courses & Learn More
            </h1>

            <p className="text-base md:text-lg text-gray-600 mt-8 w-2/1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias
              distinctio minima  voluptatem debitis deserunt! Aperiam pariatur
              odit reprehenderit ipsum id.
            </p>



            <div className="w-full flex items-center justify-center md:justify-start mt-10 md:pr-32">
            <div className="w-full relative">
            <input
                type="text"
                placeholder="Search Online Course"
                className="w-full py-4 px-3 pl-12 relative text-xs  border shadow-md rounded-tl-md rounded-bl-md bg-white m-0"
              />{" "}
              <span className="block absolute top-4 left-4"> <GoSearch /></span>

            </div>
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-md font-semibold rounded-tr-md rounded-br-md shadow-md transform transition hover:-translate-x-1 m-0">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 py-10 md:py-2 md:pl-10">
          <img
            src="./images/student.avif"
            className="hero-image object-cover h-min border-2 shadow object-center"
            alt=""
          />
        </div>
       </div>
      </section>
    </>
  );
}
