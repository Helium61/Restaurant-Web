import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaConciergeBell, FaUtensils, FaStore } from "react-icons/fa";
// import image from "../assets/premium_photo-1674106347866-8282d8c19f84.avif";
import largePic from "../assets/s2.jfif";
import smallPic1 from "../assets/s3.jfif";
import smallPic2 from "../assets/s6.avif";

const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
 {/* Slider Section */}
 <div className="flex flex-col w-100 h-100 overflow-hidden">
        <div id="home" className="w-full relative">
          <Slider {...settings}>
            <div>
              <div className="w-full h-screen relative">
                <img
                  src="src/assets/s1.avif"
                  alt="Slide 1"
                  className="w-full h-full object-cover blur-sm"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
                  <h1 className="text-4xl font-serif italic">
                    Its Quick & Amusing!
                  </h1>
                  <p className="text-lg italic">
                    Lorem ipsum dolor sit amet consectet
                  </p>
                  <p className="text-lg italic">
                    Lorem ipsum dolor sit amet consectetbdshnn
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-screen relative">
                <img
                  src="src/assets/s4.avif"
                  alt="Slide 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="w-full h-screen relative">
                <img
                  src="src/assets/s5.jfif"
                  alt="Slide 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* About Us and Images Section */}
      <div className="flex flex-col md:flex-row w-full mt-14 bg-white " id="about">
        {/* Left Side: About Us Section */}
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">About Us</h2>
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            We Create the Best Foody Products
          </h1>
          <p className="text-base md:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus augue a lorem tincidunt, at condimentum felis bibendum. Donec
            ac metus nec odio sollicitudin consequat.
          </p>
          <ul className="list-disc pl-5 space-y-2 md:space-y-4 mb-6">
            <li className="text-base md:text-lg">
              Our mission is to provide excellent service.
            </li>
            <li className="text-base md:text-lg">
              We value customer satisfaction above all.
            </li>
            <li className="text-base md:text-lg">
              Innovation and quality are our top priorities.
            </li>
          </ul>
          <div className="text-start">
            <button className="bg-teal-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Images Layout */}
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <div className="w-full mb-4">
            <img
              src={largePic}
              alt="Large Picture"
              className="w-full h-64 md:h-80 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={smallPic1}
              alt="Small Picture 1"
              className="w-full md:w-1/2 h-32 md:h-40 object-cover rounded-md"
            />
            <img
              src={smallPic2}
              alt="Small Picture 2"
              className="w-full md:w-1/2 h-32 md:h-40 object-cover rounded-md"
            />
          </div>
        </div>
      </div>

     

      {/* Food Category Section */}
      <section id="menu" className="text-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center text-5xl font-serif mb-8">
            Food Category
          </h1>
          <div className="flex flex-wrap -m-4">
            {[
              "src/assets/f1.jfif",
              "src/assets/f2.jfif",
              "src/assets/f3.jfif",
              "src/assets/f4.jfif",
            ].map((src, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="relative">
                  <img
                    className="h-64 rounded w-full object-cover object-center mb-6"
                    src={src}
                    alt={`content ${index + 1}`}
                  />
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500  text-white py-2 px-4 rounded-md shadow-md hover:bg-opacity-100 transition-opacity duration-300">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 image-container relative">
        <img
          src="src/assets/r1.jfif"
          alt="footer image"
          className="w-full h-auto object-cover blur-sm"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-black text-6xl font-serif">Book Early & Save</h2>
          
          <button className="mt-6 px-4 py-2 bg-teal-500 text-white rounded ">
            Book Now
          </button>
        </div>
      </div>
 
      <div>
        <section  id="franchise" className="text-gray-600 body-font mt-10">
          <div className="container px-5 py-10 mx-auto">
            {/* First Horizontal Section */}
            <div className="flex flex-col md:flex-row w-full mb-10">
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="src/assets/premium_photo-1674106347866-8282d8c19f84.avif"
                  alt="Left Side Image"
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">
                    Left Side Image Description
                  </h2>
                  <p className="text-base md:text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla luctus augue a lorem tincidunt, at condimentum felis
                    bibendum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt tenetur voluptate consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, tenetur!
                  </p>
                </div>
              </div>
            </div>

            {/* Second Horizontal Section */}
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full md:w-1/2 p-4 flex items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">
                    Right Side Image Description
                  </h2>
                  <p className="text-base md:text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla luctus augue a lorem tincidunt, at condimentum felis
                    bibendum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente atque quidem, quae iure maxime expedita aspernatur ea nihil excepturi, sit placeat explicabo!
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="src/assets/photo-1651978595428-b79169f223a5.avif"
                  alt="Right Side Image"
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
       {/* Our Services Section */}
       <div className="py-16 bg-teal-200 mt-10">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
            {/* Concierge Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6 md:mb-0">
              <FaConciergeBell className="text-teal-500 text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-serif mb-4">Concierge Service</h3>
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                luctus augue a lorem tincidunt.
              </p>
            </div>
            {/* Dining */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6 md:mb-0">
              <FaUtensils className="text-teal-500 text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-serif mb-4">Dining</h3>
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                luctus augue a lorem tincidunt.
              </p>
            </div>
            {/* Restaurant */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaStore className="text-teal-500 text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-serif mb-4">Restaurant</h3>
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                luctus augue a lorem tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Main;
