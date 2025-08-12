import { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "ScholarHub",
    image: 'https://i.ibb.co.com/6chVRRwG/Scholar-Hub.png',
    stack: "React, express.js, MongoDB, TailwindCSS",
    description: "A full-stack scholarship management system with user authentication, role-based dashboards, and payment integration.",
    liveLink: "https://assignment-12-scholarhub.web.app/",
    githubClient: "https://github.com/Imam-44/ScholarHub-scholarship-management-client-side.git",
    challenges: "Handling role-based permissions and integrating Stripe payments was challenging but rewarding.",
    improvements: "Plan to add real-time notifications and advanced search filters."
  },
  {
    id: 2,
    name: "TutorNexus",
    image: "https://i.ibb.co.com/Q3rKC3KZ/assignment-11.png",
    stack: "React, Firebase, Express",
    description: "An online tutor booking platform with real-time chat, booking management, and user reviews.",
    liveLink: "https://assignment-11-clint-7c349.web.app",
    githubClient: "https://github.com/Imam-44/TutorNexus-online-tutor-client-side.git",
    challenges: "Managing real-time updates and tutorial synchronization required careful state management.",
    improvements: "Will add video call integration and tutor rating analytics."
  },
  {
    id: 3,
    name: "HireSwift",
    image: "https://i.ibb.co.com/B2FGhXMt/assignment-10.png",
    stack: "React, TailwindCSS, MongoDB, expressJs",
    description: "HireSwift Freelance Marketplace is a full-stack web application that connects clients with freelancers for short-term tasks. Users can post tasks, browse available tasks, view task details, and place bids. It includes secure authentication, protected routes, and a fully responsive user interface.",
    liveLink: "https://assignment-10-auth-dd74d.web.app",
    githubClient: "https://github.com/Imam-44/HireSwift-market-place-project.git",
    challenges: "Ensuring smooth bidding workflows and responsive UI across devices was challenging.",
    improvements: "Planning to add real-time notifications, improved task filtering, and multi-language support to enhance user experience."

  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-16">
      <div className="w-11/12 mx-auto text-center animate-fadeIn">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
          See My New Projects
        </h2>
        <div className="w-74 h-2 bg-amber-400 mx-auto mb-12 rounded-full"></div>


        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projectsData.map(project => (
            <div
              key={project.id}
              className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 cursor-pointer"
            >
              {/* Bigger image with rounded corners and shadow */}
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-6 object-cover w-full h-56 md:h-50"
              />
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-white">{project.name}</h3>

              {/* Styled Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-auto bg-amber-400 text-indigo-900/90 font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                View More  Details
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white rounded-xl max-w-3xl w-full p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-amber-400 font-bold text-2xl hover:text-amber-300 cursor-pointer"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg mb-6 w-full object-cover max-h-64"
            />
            <p><span className="font-semibold">Main Tech Stack:</span> {selectedProject.stack}</p>
            <p className="mt-3">{selectedProject.description}</p>
            <p className="mt-3"><span className="font-semibold">Challenges:</span> {selectedProject.challenges}</p>
            <p className="mt-3"><span className="font-semibold">Improvements & Future Plans:</span> {selectedProject.improvements}</p>

            <div className="mt-6 flex gap-6">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 text-purple-900 px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition"
              >
                Live Project
              </a>
              <a
                href={selectedProject.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-yellow-300 px-4 py-2 rounded font-semibold hover:bg-gray-700 transition"
              >
                GitHub (Client)
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
