import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/genlogo.jpg";
const Career = () => {
  return (
    <section className="section" id="internship">
      <div className="container mt-52 mx-auto">
      {/* inside project class */}
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* left aligned */}
            <div>
              <h2 className="h2 mt-52 text-accent">
                Professional Career
              </h2>
              <p className="max-w-sm mb-10">
                A glimpse into my professional growth.
              </p>
            </div>
            {/* image */}
            <div className="flex gap-x-4">
                <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer w-64 h-64"
                >
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-10 h-10 absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={Img1}
                    alt=""
                />
                </motion.div>
                <div className="flex flex-col justify-center">
                    <h2 className="genp" style={{ fontSize: "40px" }}>
                        Genpact
                    </h2>
                    <p>
                        6-Month internship at Genpact India, located in Bengaluru, as an ML engineering intern.<br></br>
                        I worked on end-to-end projects and conducted data exploration, exploratory data analysis,<br></br>
                        feature engineering, model training and deployment.

                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
