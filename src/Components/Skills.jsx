import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiVercel } from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-16">
      <div className="w-11/12 mx-auto px-6 text-center animate-fadeIn">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
         All My Skills
        </h2>
        <div className="w-44 h-2 bg-amber-400 mx-auto mb-12 rounded-full"></div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-transform transform hover:scale-105"
                  >
                    <div className="text-5xl">{skill.icon}</div>
                    <p className="text-lg font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
