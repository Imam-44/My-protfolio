const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-gray-400 py-6 ">
      <div className="w-11/12 max-w-5xl mx-auto text-center font-poppins">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Imam Hasan. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
