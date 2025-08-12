const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-6 ">
      <div className="w-11/12 max-w-5xl mx-auto text-center font-poppins">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Imam Hasan. All rights reserved.
        </p>
        <p className="mt-1 text-amber-400 font-semibold">
          Designed & Built with Love
        </p>
      </div>
    </footer>
  );
};

export default Footer;
