/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const generateProjectLink = (id) => {
    // Add logic to generate the link based on the project id
    switch (id) {
      case 1:
        return "https://regal-pastelito-2e3a1a.netlify.app/";
      case 2:
        return "https://dashboard-mern-frontend-g9gi.onrender.com/";
      case 3:
        return "https://rad-liger-4e384b.netlify.app/";
      default:
        return "/";
    }
  };

  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-xl text-headingcolor font-semibold mb-5">
            My Skills
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            My Expertise
          </h2>
        </div>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="shadow-xl rounded-lg">
            <img src={project.image} alt="" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
                {project.name}
              </h3>
              <p className="text-body mb-4">{project.description}</p>
              <a
                href={generateProjectLink(project.id)}
                className="underline underline-offset-8"
              >
                Link!{" "}
                <img
                  src="/src/assets/arrow.png"
                  alt=""
                  className="w-3 inline-block ml-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
