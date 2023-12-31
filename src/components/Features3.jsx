/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";

import feature1 from "../assets/images/ph3.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Features3 = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section
      className="w-full bg-[#fef9f6] mt-10 pt-10  mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m   md:pt-12 lg:pt-20"
      id="features"
    >
     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 ">
        
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <div data-aos="fade-right">
              <span className=" text-2xl font-medium border  rounded-full px-5 bg-green-300">Seamless Scheduling</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Focus on what matters most for you
              </h2>
              <p className="mb-10 text-gray-400 text-xl leading-loose">
              Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
              </p>
              
            </div>
          </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
              <div data-aos="fade-left">
                <img
                  src={feature1}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};
