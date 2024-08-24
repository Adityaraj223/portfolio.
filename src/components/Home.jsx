import React from "react";
import banner from "../assets/banner.jpeg";
import FadeInSection from "../components/FadeInSection"; // Make sure the path is correct

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        {/* Right side */}
        <FadeInSection>
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img
              src={banner}
              alt="Banner"
              className="w-full h-auto rounded-full max-w-[500px]"
            />
          </div>
        </FadeInSection>

        {/* Left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            Hey, I am Aditya
          </p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px] mb-5">
            Front-end J.S{" "}
            <span className="text-primary">(React and Next.js)</span> developer
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            Skilled frontend developer with expertise in JavaScript, React,
            TypeScript, and Next.js, specializing in crafting SaaS solutions.
            I’m committed to creating high-performance, refined user interfaces
            that exceed expectations. My passion for innovation and design
            drives the creation of solutions that are not only functional but
            also visually captivating and user-friendly.
          </p>
          <button className="btn-primary">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
