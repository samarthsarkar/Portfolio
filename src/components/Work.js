import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/musicplayer.png";
import Img2 from "../assets/ml_brain_tumor.png";
// import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mt-52 mx-auto">
      {/* inside project class */}
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* left aligned */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Projects
              </h2>
              <p className="max-w-sm mb-10">
                A glimpse into my projects in the field of Machine Learning and Web Development.
              </p>
              <button
                onClick={() => {
                  window.open("https://github.com/samarthsarkar?tab=repositories");
                }}
                className="btn btn-sm"
              >
                View all projects
              </button>
            </div>
            {/* image */}
            <motion.div
              onClick={() => {
                window.open("https://github.com/samarthsarkar/VibeSync");
              }}
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-32 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl">VibeSync</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  Music Player synced to spotify, API-data retrieval demonstration
                </span>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10 lg:mb-0">
            {/* image */}
            <motion.div
              onClick={() => {
                window.open("https://github.com/samarthsarkar/Brain-Tumour-Detector/");
              }}
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-32 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl">Brain-Tumor Detector</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  Machine Learning Model to determine Brain tumors from MRI imaging
                </span>
              </div>
            </motion.div>
            {/* image */}
            {/* <motion.div
              onClick={() => {
                window.open("https://github.com/Khaliq-786/RAY");
              }}
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-7 hover:cursor-pointer"
            >
              {/* overlay */}
              {/* <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              {/* <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              {/* <div className="absolute -bottom-full left-1/2 group-hover:bottom-40 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl">RAY</span>
              </div>
              {/* title */}
              {/* <div className="absolute -bottom-full left-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  A line and wall follwoing bot built using arduino board and
                  various sensors.
                </span>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
