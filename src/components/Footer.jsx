

import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#0b1220] text-gray-300">


        
        

            <div className="  grid grid-cols-2 ml-4 md:grid-cols-4 w-full pt-10 mx-auto px-10 gap-4">


                <div>
                    <h1 className="text-[20px] md:text-2xl font-bold text-white mb-3">DigiTools</h1>
                    <p className="text-sm text-gray-400">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h6 className="text-white font-semibold mb-3">Product</h6>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Templates</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                    </ul>
                </div>


                <div className="mb-4">
                    <h6 className="text-white font-semibold mb-3">Company</h6>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>


                <div className="my-4">
                    <h6 className="text-white font-semibold mb-3">Resources</h6>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Documentation</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Community</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>


                <div className="my-4">
                    <h6 className="text-white font-semibold mb-3">Social Links</h6>
                    <div className="flex gap-3">
                        <div className="bg-white  p-2 rounded-full   text-pink-500 hover:cursor-pointer  scale-110 transition">
                            <FaInstagram />
                        </div>
                        <div className="bg-white p-2 rounded-full text-blue-500 hover:cursor-pointer scale-110 transition">
                            <FaFacebookF />
                        </div>
                        <div className="bg-white p-2 rounded-full    text-sky-500  hover: cursor-pointer scale-110 transition">
                            <FaXTwitter />
                        </div>
                    </div>
                </div>

            </div>


            <div className="max-w-7xl mx-auto px-6 pb-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>© 2026 Digitools. All rights reserved.</p>

                <div className="flex gap-6 mt-3 md:mt-0">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer">Cookies</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;