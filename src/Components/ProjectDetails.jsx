import { useParams } from "react-router-dom";
import { projects } from "../data";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <p>Project not found.</p>;

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">{project.name}</h2>
      <img src={project.image} alt={project.name} className="my-4 rounded" />
      <p><strong>Stack:</strong> {project.stack.join(", ")}</p>
      <p className="my-2">{project.description}</p>
      <p><strong>Challenges:</strong> {project.challenges}</p>
      <p><strong>Future Plans:</strong> {project.improvements}</p>
      <div className="mt-4 space-x-4">
        <a href={project.live} target="_blank" className="text-blue-500 underline">Live Site</a>
        <a href={project.github} target="_blank" className="text-blue-500 underline">GitHub</a>
      </div>
    </section>
  );
}
