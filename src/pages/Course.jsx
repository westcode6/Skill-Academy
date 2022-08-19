import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";

export function CoursesPage() {
  return (
    <>
      <section>
        <Navbar />
        <div className="lg:py-20">
        <Courses />
        </div>
        <Footer />
      </section>
    </>
  );
}
