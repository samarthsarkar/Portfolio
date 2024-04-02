import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// import Img1 from "../assets/genpact-logo.png";
const Internship = () => {
  return (
    <section className="section" id="internship">
      <div className="container mt-52 mx-auto">
      {/* inside project class */}
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* left aligned */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Internships
              </h2>
              <p className="max-w-sm mb-10">
                A glimpse into my professional career.
              </p>
            </div>
            {/* image */}
            {/* <motion.div
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
              {/* <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              {/* <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              {/* <div className="absolute -bottom-full left-1/2 group-hover:bottom-32 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl">VibeSync</span>
              </div>
              {/* title */}
              {/* <div className="absolute -bottom-full left-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  Music Player synced to spotify, API-data retrieval demonstration
                </span>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
