import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return ( 
    <section id="home" className="scroll-mt-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-16">
      <div className="w-11/12 mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex-1 text-center md:text-left animate-slideInLeft">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Hi, I’m <span className="text-yellow-300 font-signature ">Imam Hasan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-200 max-w-lg mx-auto md:mx-0 mb-8">
            I build modern, responsive, and user-friendly web applications with
            a focus on performance and clean design.
          </p>

         
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            {/* GitHub */}
            <a
              href="https://github.com/Imam-44"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-300 hover:opacity-90 transition"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/imam-hasan4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-300 hover:opacity-90 transition"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/ImamHasan44"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-300 hover:opacity-90 transition"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" className="w-6 h-6" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/emam.hasan.3511041"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-300 hover:opacity-90 transition"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-6 h-6" />
            </a>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center animate-slideInRight">
          <div className="w-72 h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-300">
            <img
              src="https://i.ibb.co.com/nM9YGKLL/Whats-App-Image-2025-08-08-at-08-19-46-be2bd7bb.jpg" 
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
