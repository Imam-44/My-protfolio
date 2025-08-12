import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-16">
      <div className="w-11/12 max-w-5xl mx-auto animate-fadeIn">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-center">
          Contact Information
        </h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-12 rounded-full"></div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">

          {/* Email Card */}
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 flex-1 cursor-pointer">
            <MdEmail className="text-5xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold font-poppins mb-2">Email</h3>
            <a href="mailto:imamhasan@example.com" className="text-lg font-poppins text-gray-100 hover:text-amber-300 break-all transition">
              imamets3@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 flex-1 cursor-pointer">
            <MdPhone className="text-5xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold font-poppins mb-2">Phone</h3>
            <a href="tel:+8801234567890" className="text-lg font-poppins text-gray-100 hover:text-amber-300 transition">
              +880 1763 - 473741
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 flex-1 cursor-pointer">
            <MdWhatsapp className="text-5xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold font-poppins mb-2">WhatsApp</h3>
            <a href="https://wa.me/8801987654321" target="_blank" rel="noopener noreferrer" className="text-lg font-poppins text-gray-100 hover:text-amber-300 transition">
              +880 1763 - 473741
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
