/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Skyscanner",

    comment:
      "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.    Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.   Customised my application and ran automated tests to ensure it rendered properly.",
    photo: "/src/assets/Avatar1.png",
  },
  {
    id: 2,
    name: "Lyft",

    comment:
      "Completed the Back-End Engineering job simulation, taking over development of an unfinished project for the Lyft Rentals team.     Drafted a UML class diagram representing a new reorganized architecture.    Refactored a messy codebase inherited from another team to accurately reflect my new design.     Implemented unit tests and added new functionality using test-driven development.",
    photo: "/src/assets/Avatar2.png",
  },
  {
    id: 3,
    name: "Wells Fargo",

    comment:
      "Understood relevant requirements for building a system to manage financial portfolios   Figured out what data the system needed to keep track of     Drafted a visual representation of the data as an entity relationship diagram ",
    photo: "/src/assets/Avatar3.png",
  },
];

const ReviewCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper -z-0"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="border border-[#006B6A] p-8 rounded"
          >
            <div>
              <img src="/src/assets/starts.png" alt="" className="h-4" />
              <p className="my-5">" {review.comment}</p>
              <div className="flex gap-4 items-center">
                <img src={review.photo} alt="" className="h-10" />
                <div>
                  <p>{review.name}</p>
                  <p className="text-sm">{review.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewCard;
