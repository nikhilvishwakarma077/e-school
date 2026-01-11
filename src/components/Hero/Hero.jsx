import React from "react";
import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";

const Hero = () => {
    return (
        <>
            <div className="px-10 md:px-20 min-h-160  grid grid-cols-1 md:grid-cols-2  relative">
                <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
                    <div className="text-center md:text-left space-y-6">
                        <motion.p
                            variants={SlideRight(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="text-orange-600 uppercase font-semibold"
                        >
                            100% Satisfaction Guarantee
                        </motion.p>
                        <motion.h1
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl font-semibold lg:text-6xl leading-tight"
                        >
                            Find Your Perfect <span className="text-primary">Tutor</span>
                        </motion.h1>
                        <motion.p
                            variants={SlideRight(0.8)}
                            initial="hidden"
                            animate="visible"
                        >
                            We help you find perfect tutor for 1-on-1 lessons. It is
                            completely free and private
                        </motion.p>
                        <motion.div
                            variants={SlideRight(1.0)}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-8 justify-center md:justify-start mt-8 items-center"
                        >
                            <button className=" bg-yellow-400 cursor-pointer font-semibold rounded-full px-6 py-2">Get Started</button>
                            <button className="flex justify-end items-center gap-2 font-semibold">
                                <span className="w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center">
                                    <FaPlay className="text-secondary" />
                                </span>
                                See how it works
                            </button>
                        </motion.div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        src={HeroImg}
                        alt=""
                        className="w-85 md:w-135 xl:w-175"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;