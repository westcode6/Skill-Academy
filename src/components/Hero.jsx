import {GoSearch} from "react-icons/go"

export default function Hero() {
  return (
    <>
      <section className="hero-section px-6 pt-32 md:pt-32 md:px-16  md:flex items-center justify-center">
       <div className="lg:flex items-center justify-center ">
       <div className="lg::w-2/3  flex flex-col md:items-center md:justify-center">
          <div className="lg:mr-44 md:text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold md:leading-2">
              Find Our Best Online Courses & Learn More
            </h1>

            <p className="text-base md:text-lg text-gray-600 mt-8 lg:pr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias
              distinctio minima  voluptatem debitis deserunt! Aperiam pariatur
              odit reprehenderit ipsum id.
            </p>



            <div className="w-full flex items-center md:justify-center lg:justify-start mt-10 ">
           <div className="w-full flex items-center justify-center lg:mr-20">
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
        </div>
        <div className="hero-image lg::w-2/3 py-10  md:pl-10">
          <img
            src="./images/student.avif"
            className="object-cover hero-image h-min object-center"
            alt=""
          />
        </div>
       </div>
      </section>
    </>
  );
}
