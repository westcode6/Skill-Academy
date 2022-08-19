import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function About() {
  return (
    <>
      <section>
        <Navbar />

        <main className="">
          <div className="lg:flex items-center justify-between px-6 md:px-8 lg:px-16 py-20">
            <div className="lg:w-3/5 mt-10 md:mt-0">
              <h1 className="text-4xl lg:text-7xl font-bold text-gray-800">
                Inspiring discovery through{" "}
                <h3 className="text-gray-400 inline-block">creativity. </h3>
              </h1>
            </div>
            <div className="lg:w-2/6 lg:h-96 flex items-start lg:items-end  pt-6 ">
              <p className="lg:text-xl text-gray-600">
                Move your creative journey forward without putting life on hold.
                Skillshare’s short online classes help you find inspiration that
                fits your routine.
              </p>
            </div>
          </div>

          <div className="w-full flex">
            <img
              src="./images/skill.webp"
              className="w-full h-96 object-left-top object-cover "
              alt="staffs"
            />
            {/* <img src="./images/hands.jpeg" className="w-full object-cover object-center" alt="staffs" /> */}
          </div>

          <div className="w-full lg:flex items-center justify-between px-6 md:px-8 lg:px-16 mb-10">
            <div className="lg:w-3/5 mt-10 md:mt-0">
              <h1 className="text-4xl lg:text-7xl  font-bold text-gray-800">
               Together we are Strong{" "}
                <h3 className="text-gray-400 inline-block"> </h3>
              </h1>
            </div>
            <div className="lg:w-2/6 pt-10 lg:pt-36">
              <p className="lg:text-xl text-gray-600 font-semibold ">
                Move your creative journey forward without putting life on hold.
                Skillshare’s short online classes help you find inspiration that
                fits your routine.
              </p>

              <p className="py-6 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at inventore quia ea dolorem hic! In iusto numquam esse eveniet?</p>
            </div>
          </div>
        </main>

        <Footer />
      </section>
    </>
  );
}
