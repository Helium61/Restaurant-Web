import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <header className="body-font bg-black text-white">
        <div className="container mx-auto flex flex-wrap p-3 items-center justify-between">
          <div className="flex flex-1 justify-start">
            {/* Empty div to push logo to the center */}
          </div>
          <div className="flex order-first lg:order-none title-font font-medium items-center justify-center mb-4 md:mb-0">
            <img 
              src="src/assets/a-sleek-and-modern-restaurant-logo-featuring-a-sty-4poY1rvDRmGO6xT_sc9WfQ-6qM87SrWReSZAz7Mib7SYA.jpeg" 
              alt="Logo" 
              className="w-20 h-20 rounded-full object-cover" 
            />
          </div>
          <div className="flex flex-1 justify-end">
            <a href="https://facebook.com" className="text-white mx-2">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
