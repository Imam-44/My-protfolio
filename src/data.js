// src/data.js
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourname" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourname" },
  { name: "Twitter", url: "https://twitter.com/yourname" },
];

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "MongoDB"],
  tools: ["Git", "VS Code", "Figma"],
};

export const projects = [
  {
    id: 1,
    name: "TutorNexus",
    image: "/images/tutor.png",
    stack: ["React", "Node.js", "MongoDB"],
    description: "An online tutor booking platform...",
    live: "https://example.com",
    github: "https://github.com/user/tutor-client",
    challenges: "Managing booking conflicts...",
    improvements: "Add video conferencing feature.",
  },
  {
    id: 2,
    name: "ScholarHub",
    image: "/images/scholar.png",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    description: "A scholarship management system...",
    live: "https://example.com",
    github: "https://github.com/user/scholar-client",
    challenges: "Implementing role-based access...",
    improvements: "Mobile-friendly admin dashboard.",
  },
];
