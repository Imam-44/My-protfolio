import { skills } from "../data";

export default function Skills() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold capitalize">{category}</h3>
            <ul className="mt-2">
              {list.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
