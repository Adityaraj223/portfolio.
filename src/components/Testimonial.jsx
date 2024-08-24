// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  return (
    <div
      className="lg:px-16 px-6 my-32 py-24 bg-bgShade rounded-lg shadow-lg"
      id="testimonials"
    >
      <div className="mb-16 text-center">
        <p className="text-2xl text-primary font-semibold mb-3">Internship</p>
        <h2 className="md:text-6xl text-5xl text-headingcolor font-bold leading-tight">
          Experience
        </h2>
      </div>

      {/* reviews */}
      <div className="relative">
        <ReviewCard />
      </div>
    </div>
  );
};

export default Testimonial;
