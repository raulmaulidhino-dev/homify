import Logo from "../assets/homify-logo.webp";

const Footer = () => {
    return (
      <footer className="bg-white py-10 font-poppins mt-20 mb-20">
        <div className="container mx-auto px-5">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          <div className="order-1 md:order-1">
              <img src={ Logo } alt="Homify Logo" className="h-16" data-aos="zoom-in" />
              <p className="text-sm text-gray-600" data-aos="fade-down">
              Homify is a smart home company that provides innovative automation solutions for home security, energy efficiency, and convenience, making everyday living easier and more connected.
              </p>
          </div>
  
          <div className="grid grid-cols-2 gap-8 order-2 md:order-2">
              
              <div>
              <h4 className="font-semibold mb-2" data-aos="zoom-in">Smart Devices</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Smart Lighting</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Smart Thermostats</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Security Cameras</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Smart Plugs</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Voice Assistants</a>
                  </li>
              </ul>
              </div>
  
              <div>
              <h4 className="font-semibold mb-2" data-aos="zoom-in">Automation</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Energy Saving Automation</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Custom Home Setup</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Smart Routines</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Home Security Integration</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Device Synchronization</a>
                  </li>
              </ul>
              </div>
          </div>
  
          <div className="grid grid-cols-2 gap-8 order-3 md:order-3">
              
              <div>
              <h4 className="font-semibold mb-2" data-aos="zoom-in">Support</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">24/7 Technical Support</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Installation Assistance</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Troubleshooting</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Customer Reviews</a>
                  </li>
              </ul>
              </div>
  
              <div>
              <h4 className="font-semibold mb-2" data-aos="zoom-in">Help Center</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Blog</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">FAQs</a>
                  </li>
                  <li className="hover:text-black transition duration-300">
                      <a href="#" className="hover:text-black" data-aos="fade-down">Contact Us</a>
                  </li>
              </ul>
              </div>
          </div>
          </div>
  
          <div className="items-center justify-center text-center pt-10 text-slate-500">
              <h1 data-aos="zoom-in">@2024 Homify_fathurahman x raul. All rights reserved.</h1>
          </div>
      </div>
      </footer>
    );
};

export default Footer;