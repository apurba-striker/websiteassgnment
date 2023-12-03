/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";

import feature5 from "../assets/images/ph2.png";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const Features2 = () => 
{
  useEffect(() => {
    AOS.init();
  }, [])
return(
  <section className="w-full bg-[#fef9f6] mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
            <div data-aos="fade-right">
              <img
                src={feature5}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
          <div data-aos="fade-left">
          <span className=" text-2xl font-medium border  rounded-full px-5 bg-blue-200">Smart Reminders & Task</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
            Never miss an important deadline or event again
            </h2>
            <p className="mb-10 text-gray-400 text-xl leading-loose">
            Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
};
