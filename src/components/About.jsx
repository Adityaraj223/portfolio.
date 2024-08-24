import proPic from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="lg:mx-16 mx-6 py-32" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2 flex justify-center">
          <img
            src={proPic}
            alt="Profile Picture"
            className="w-full sm:w-11/12 rounded-full shadow-lg border-4 border-green-500 transform hover:scale-105 transition-transform duration-300 animate-float"
            style={{
              boxShadow: "0 0 15px 5px rgba(72, 187, 120, 0.5)", // Greenish shadow
            }}
          />
        </div>
        <div className="sm:w-1/2">
          <p className="text-2xl text-green-600 font-semibold mb-5">Who I Am</p>
          <h2 className="md:text-6xl text-5xl text-gray-900 font-bold leading-tight">
            Mastering the Art of Frontend Development
          </h2>
          <p className="mt-8 text-lg text-gray-700 md:pr-8 mb-8 leading-relaxed">
            I am a passionate frontend developer with deep expertise in
            JavaScript, TypeScript, React, and Next.js. My professional journey
            is fueled by a relentless pursuit of perfection, where every detail
            matters, and every user interaction is meticulously crafted for an
            exceptional experience.
            <br /> <br />
            Known for harmonizing creativity with technical excellence, I
            transform complex problems into intuitive and efficient solutions.
            Every project I undertake is an opportunity to innovate, push
            boundaries, and deliver results that not only meet but exceed
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
