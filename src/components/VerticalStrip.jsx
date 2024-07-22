
import { FaHome, FaUtensils, FaBuilding, FaInfoCircle, FaPhone } from 'react-icons/fa';

const VerticalStrip = () => {
  return (
    <div className="fixed top-0 right-0 h-100 w-36 rounded-3xl mr-4 mt-20 bg-stone-700 bg-opacity-80 flex flex-col items-center py-4 space-y-4">
      <a href="#home" className="text-white hover:text-gray-300 ">
        <FaHome size={60} />
      </a>
      <a href="#menu" className="text-white hover:text-gray-300">
        <FaUtensils size={60} />
      </a>
      <a href="#franchise" className="text-white hover:text-gray-300">
        <FaBuilding size={60} />
      </a>
      <a href="#about" className="text-white hover:text-gray-300">
        <FaInfoCircle size={60} />
      </a>
      <a href="#contact" className="text-white hover:text-gray-300">
        <FaPhone size={60} />
      </a>
      {/* <button className="px-3 py-2 mt-auto bg-teal-500 text-white rounded hover:bg-teal-600 focus:outline-none">
        Book Me
      </button> */}
    </div>
  );
};

export default VerticalStrip;
