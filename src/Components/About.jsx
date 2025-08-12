const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-16">
      <div className="w-11/12 mx-auto text-center animate-fadeIn">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
          About Me
        </h2>
        <div className="w-34 h-2 bg-amber-400 mx-auto mb-8 rounded-full"></div>

        {/* About Text */}
        <p className="text-lg md:text-xl font-poppins text-gray-100 leading-relaxed max-w-4xl mx-auto">
          Hello! My name is <span className="text-amber-300 font-semibold">Imam Hasan</span>, and I’m currently pursuing my Honours degree in <span className="font-semibold">Islamic History and Culture</span> at the University of Chittagong. My programming journey began in 2020 out of pure curiosity and the desire to create something meaningful. Since then, I have developed a passion for crafting modern, interactive, and user-friendly designs that not only look beautiful but also provide a seamless experience. Outside the world of coding, I am a football enthusiast, enjoying both playing and watching the game, and I love exploring new technologies, spending time with friends, and diving into creative hobbies. My ultimate goal is to continuously learn, innovate, and make a positive impact through my work, turning ideas into reality with every project I create.
        </p>
        
      </div>
    </section>
  );
};

export default AboutMe;
