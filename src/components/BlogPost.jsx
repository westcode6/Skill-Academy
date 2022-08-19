export default function BlogPost() {
  const blogs = [
    {
      id: 1,
      image: "./images/trust.webp",
      date: "November 12",
      noOfComment: 14,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit doloremque tempore quaerat ",
    },

    {
      id: 2,
      image: "./images/student.avif",
      date: "September 16",
      noOfComment: 24,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit doloremque tempore quaerat ",
    },

    {
      id: 3,
      image: "./images/ads.jpg",
      date: "October 22",
      noOfComment: 17,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit doloremque tempore quaerat ",
    },

    {
        id: 4,
        image: "./images/serious.jpg",
        date: "October 22",
        noOfComment: 17,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit doloremque tempore quaerat ",
      },


      {
        id: 5,
        image: "./images/smile.jpg",
        date: "October 22",
        noOfComment: 17,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit doloremque tempore quaerat ",
      },

      {
        id: 6,
        image: "./images/student.avif",
        date: "October 22",
        noOfComment: 17,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit doloremque tempore quaerat ",
      },
  ];
  return (
    <>
      <section className="blog-section px-6 md:px-16 py-10 md:py-16">
        <h2>Our Latest Blog</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-20 mt-8">
          {blogs.map((each) => (
            <div key={each.id} className="bg-white shadow p-4 rounded-xl cursor-pointer my-4 transform transition hover:-translate-y-0.5">
              <img
                src={each.image}
                className="h-44 rounded-xl shadow-lg object-cover object-center"
                alt="blog post banner"
              />
              <div className="px-4 py-8">
                <div className="flex items-center justify-start">
                  <span className="text-sm text-gray-500 font-semibold">
                    {each.date}
                  </span>
                  <span className="pl-6 text-sm text-gray-400 font-semibold">
                    {each.noOfComment} Comments
                  </span>
                </div>
                <h3 className="text-xl font-semibold mt-4">{each.title}</h3>
                <p className="py-4 text-gray-500 leading-7">{each.body}</p>

                <h4 className="text-sm text-indigo-600 font-semibold">
                  Read More
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
