import { socialLinks } from "../data";

export default function Hero() {
  return (
    <section className="p-10 text-center bg-gray-100">
      <img src="https://i.ibb.co.com/nM9YGKLL/Whats-App-Image-2025-08-08-at-08-19-46-be2bd7bb.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full" />
      <h2 className="text-3xl font-bold mt-4">Full Stack Web Developer</h2>
      <p className="mt-2">I build modern and responsive web applications.</p>
      <a href="/resume.pdf" download className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Download Resume</a>
      <div className="flex justify-center gap-4 mt-4">
        {socialLinks.map((link, i) => (
          <a key={i} href={link.url} className="text-blue-600 underline">{link.name}</a>
        ))}
      </div>
    </section>
  );
}
