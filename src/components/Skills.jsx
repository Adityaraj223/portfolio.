const skills = [
  {
    id: 1,
    name: "SaaS Development",
    description:
      "Expert in designing and developing scalable SaaS solutions. I excel at creating seamless user experiences and ensuring the architecture supports rapid growth and integration.",
    image: "src/assets/saas-icon.png",
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Proficient in full-stack web development, from crafting intuitive frontend interfaces to architecting robust backend systems. I ensure every layer of the web application is optimized for performance and maintainability.",
    image: "src/assets/webdev-icon.png",
  },
  {
    id: 3,
    name: "JavaScript & TypeScript",
    description:
      "Specialized in both JavaScript and TypeScript, I bring dynamic, type-safe code to the frontend and backend, ensuring high code quality, maintainability, and reduced bugs.",
    image: "src/assets/js-ts-icon.png",
  },
  {
    id: 4,
    name: "React & Next.js",
    description:
      "Adept in React and Next.js, I build performant, SEO-optimized web applications with modern, reusable components. My approach focuses on delivering exceptional user experiences with speed and efficiency.",
    image: "src/assets/react-next-icon.png",
  },
  {
    id: 5,
    name: "Express & Node.js",
    description:
      "Skilled in Express and Node.js, I develop scalable server-side applications, handling everything from RESTful APIs to real-time data processing, with a focus on security and performance.",
    image: "src/assets/express-node-icon.png",
  },
];

const Skills = () => {
  return (
    <div className="lg:mx-16 mx-6 py-32" id="skills">
      <div className="mb-20 text-center">
        <p className="text-2xl text-gray-800 font-semibold mb-5">
          Skills & Expertise
        </p>
        <h2 className="md:text-6xl text-5xl text-gray-900 font-bold">
          Mastery in Modern Web Development
        </h2>
      </div>

      {/* Skills Cards */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 p-4 bg-white rounded-full shadow-xl mb-6 mx-auto"
            />
            <h3 className="text-3xl text-white font-bold mb-4 text-center">
              {skill.name}
            </h3>
            <p className="text-white text-lg text-center">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
