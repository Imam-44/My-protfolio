import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded p-4">
            <img src={project.image} alt={project.name} className="mb-2 rounded" />
            <h3 className="font-bold">{project.name}</h3>
            <Link to={`/projects/${project.id}`} className="text-blue-500 underline mt-2 inline-block">View More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
