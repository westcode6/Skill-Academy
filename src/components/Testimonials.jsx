import { IoMdStar } from "react-icons/io";
export default function Testimonials() {
  const Testimonials = [
    {
      id: 1,
      image: "./images/ads.jpg",
      testimony:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, inventore? Unde placeat impedit eos culpa qui, deleniti inventore iusto eveniet.",
      name: "Eleanor Pena",
      rating: "5.0",
    },
    {
      id: 2,
      image: "./images/trust.webp",
      testimony:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, inventore? Unde placeat impedit eos culpa qui, deleniti inventore iusto eveniet.",
      name: "Anabella Kipena",
      rating: "4.8",
    },
    // {
    //   id: 3,
    //   image: "./images/serious.jpg",
    //   testimony:
    //     "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, inventore? Unde placeat impedit eos culpa qui, deleniti inventore iusto eveniet.",
    //   name: "Kingdom Godspower",
    //   rating: "5.0",
    // },
  ];

  return (
    <>
      <section className="px-6 py-10 pb-20  md:px-8 lg:px-16  flex justify-center items-center">
        <div>
          <h2>Student Feedback</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 md:px-16 lg:px-24 gap-3 md:gap-12 mt-12">
            {Testimonials.map((each) => (
              <div key={each.id} className="bg-white shadow rounded-xl   px-6 md:px-8 lg:px-20 py-4  mt-2">
                <img
                  src={each.image}
                  className="testimony-image w-32 rounded-full border shadow-md object-cover object-center"
                  alt={"Testifier " + each.name}
                />

                <p className="py-6 tect-gray-500">{each.testimony}</p>

                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-800">
                    {each.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p>{each.rating}</p>

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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
