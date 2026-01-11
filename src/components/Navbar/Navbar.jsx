import React, { useState } from "react";
import { NavbarMenu } from "../../data/data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="w-full m-auto px-10 md:px-20  flex justify-between items-center py-6">
                    <div className="text-2xl flex items-center gap-2 font-bold cursor-pointer">
                        <MdComputer className="text-3xl text-secondary" />
                        <p>E-School</p>
                    </div>

                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-6">
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="hidden md:block space-x-6">
                        <button className="font-semibold cursor-pointer">Sign in</button>
                        <button className="text-white bg-blue-600 cursor-pointer font-semibold rounded-full px-6 py-2 ">
                            Register
                        </button>
                    </div>
                    <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </motion.div>

            <ResponsiveMenu isOpen={isOpen} />
        </>
    );
};

export default Navbar;