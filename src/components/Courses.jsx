import { BiTime } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
export default function Courses() {
  const courses = [
    {
      id: 1,
      image: "./images/student1.avif",
      title: "Sales Training: What you need to know A to Z",
      time: "8h 22m",
      users: 2321,
      price: "$120",
      discount: "$170",
      rating: 4.8,
    },
    {
      id: 2,
      image: "./images/serious.jpg",
      title: "Amazon Seller Fba & Dropshipping Tutorial",
      time: "56h 12m",
      users: 1321,
      price: "$150",
      discount: "$180",
      rating: "5.0",
    },

    {
      id: 3,
      image: "./images/workers.avif",
      title: "Zero-to-Top Level E-Commerce with Opencart",
      time: "8h 42m",
      users: 1121,
      price: "$100",
      discount: "$150",
      rating: 3.8,
    },

    {
      id: 4,
      image: "./images/workers1.avif",
      title: "Sales Training: What you need to know A to Z",
      time: "8h 22m",
      users: 2321,
      price: "$120",
      discount: "$170",
      rating: 4.6,
    },

    {
      id: 5,
      image: "./images/smile.jpg",
      title: "Sales Training: What you need to know A to Z",
      time: "8h 22m",
      users: 2321,
      price: "$120",
      discount: "$170",
      rating: 4.8,
    },

    {
      id: 6,
      image: "./images/student1.avif",
      title: "Sales Training: What you need to know A to Z",
      time: "8h 22m",
      users: 2321,
      price: "$120",
      discount: "$170",
      rating: 4.8,
    },
  ];

  return (
    <>
      <section className=" px-6 sm:px-8 md:px-8 lg:px-16 py-12">
        <div className="text-center">
        <h2 className="">Explore Popular Courses</h2>
        <p className="text-base text-gray-500  mt-4 ">Explore thousands of hands-on creative classes.</p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-20">
            {courses.map((each) => (
              <div
                className="mt-8 bg-white shadow-md hover:shadow-xl cursor-pointer rounded-xl  pb-4 p-4 transform transition hover:-translate-y-0.5"
                key={each.id}
              >
                <img
                  src={each.image}
                  alt={each.title}
                  className="object-cover object-center h-44 shadow-md rounded-2xl "
                />
                <div className="">
                  <h3 className="text-xl md:text-xl font-semibold capitalize tracking-wide mt-6">
                    {each.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="mt-6 flex">
                      <p className="flex items-center text-xs">
                        <span className="text-xl text-indigo-600 pr-3">
                          <BiTime />
                        </span>
                        {each.time}
                      </p>

                      <p className="pl-4  flex items-center text-xs ">
                        <span className="text-sm text-indigo-600 px-3">
                          <FaUserAlt />{" "}
                        </span>

                        {each.users}
                      </p>
                    </div>

                    <button className="px-4 py-2 rounded-md bg-indigo-200 text-gray-700 text-xs font-semibold mt-4">
                      Best Seller
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <p className=" font-bold text-sm text-gray-800">{each.price}</p>
                      <span className="px-4 text-sm text-gray-400 font-bold">
                        {each.discount}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm">{each.rating}</p>

                      <div className="pl-4 flex space-x-1">
                        <span className="text-amber-500 text-xl">
                          <IoMdStar />
                        </span>
                        <span className="text-amber-500 text-xl">
                          <IoMdStar />
                        </span>
                        <span className="text-amber-500 text-xl">
                          <IoMdStar />
                        </span>
                        <span className="text-amber-500 text-xl">
                          <IoMdStar />
                        </span>
                        <span className="text-amber-500 text-xl">
                          <IoMdStar />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-12 md:py-4">
          <button className="px-8 py-4 mt-8 bg-indigo-600 hover:bg-indigo-500 text-white transform transition hover:-translate-y-1 font-semibold rounded-md capitalize">
            View all course
          </button>
        </div>
      </section>
    </>
  );
}
