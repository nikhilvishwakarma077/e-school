import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen }) => {
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-0 w-full bg-white z-20 lg:hidden"
                >
                    <div className="text-xl font-semibold uppercase text-black py-5 mx-6 rounded-3xl">
                        <ul className="flex flex-col justify-end items-start gap-10">
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Contact</li>

                            <button className="font-semibold cursor-pointer">Sign in</button>
                            <button className="text-white bg-blue-600 cursor-pointer font-semibold rounded-full px-6 py-2 ">
                                Register
                            </button>

                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;