import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="lg:px-12 px-4 py-16 bg-gray-900">
      <div className="text-center mb-16">
        <p className="text-xl text-gray-400 font-semibold mb-3">Get In Touch</p>
        <h2 className="md:text-5xl text-4xl text-white font-bold mb-5">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300">
          For inquiries and collaboration opportunities, feel free to reach out.
          I look forward to connecting with you!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="flex items-center gap-3 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.64 0-3-1.36-3-3s1.36-3 3-3 3 1.36 3 3-1.36 3-3 3zM12 10a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            <span className="text-white text-xl font-semibold">Aditya</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.64 0-3-1.36-3-3s1.36-3 3-3 3 1.36 3 3-1.36 3-3 3zM12 10a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            <a
              href="mailto:adityarajru20612000@gmail.com"
              className="text-white text-xl font-semibold"
            >
              adityarajru20612000@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.64 0-3-1.36-3-3s1.36-3 3-3 3 1.36 3 3-1.36 3-3 3zM12 10a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            <span className="text-white text-xl font-semibold">8797040159</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
