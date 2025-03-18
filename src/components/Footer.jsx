import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 mt-10 rounded-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    {/* Left Section - Logo & Description */}
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-white text-2xl font-semibold">Communion</h2>
                        <p className="mt-2 text-gray-400">
                            Discover the power of connection with Communion. Uniting diverse communities
                            through spirituality and innovation, we foster inclusivity, collaboration,
                            and social cohesion for a better world.
                        </p>
                        {/* Social Media Icons with Bigger Size & Hover Effects */}
                        <div className="flex space-x-6 mt-4">
                            <a
                                href="#"
                                className="text-gray-400 text-3xl hover:bg-sky-100 hover:scale-160 transition-all duration-300 rounded-full"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 text-3xl hover:bg-sky-100 hover:scale-160 transition-all duration-300 rounded-full"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 text-3xl hover:bg-sky-100 hover:scale-160 transition-all duration-300 rounded-full"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 text-3xl hover:bg-sky-100 hover:scale-160 transition-all duration-300 rounded-full"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Center Section - Company Links */}
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-white text-lg font-semibold mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Communities</a></li>
                            <li><a href="#" className="hover:text-white">Events</a></li>
                            <li><a href="#" className="hover:text-white">Leaders</a></li>
                            <li><a href="#" className="hover:text-white">Support</a></li>
                            <li><a href="#" className="hover:text-white">Profile</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right Section - Contact & Legal */}
                    <div className="md:w-1/3">
                        <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
                        <p className="text-gray-400 mb-2">contact@communionhub.org</p>
                        <p className="text-gray-500 text-sm">Copyright © 2024. All rights reserved to Communion</p>
                        <div className="flex space-x-4 mt-3">
                            <a href="#" className="hover:text-white text-sm">Privacy Policy</a>
                            <a href="#" className="hover:text-white text-sm">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
