import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const academics = [
  {
    college: "Motilal Nehru National Institute of Technology, Allahabad",
    qualification: "B.tech in Computer Science",
    year: "2020 - 2024",
    cpi: "7.65 (Till 6th Semester)",
  },
  {
    college: "Indian School Muscat",
    qualification: "Higher Secondary Education",
    year: "2019",
    cpi: "91.2 %",
  },
  {
    college: "Indian School Muscat",
    qualification: "High School Certification",
    year: "2017",
    cpi: "90.5 %",
  },
];

const Academics = () => {
  return (
    <section className="section" id="academics">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-academics lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 mb-6">
              <span className="text-gradient"> Educational </span> <br />
              <span className="font-semibold">Qualification</span>
            </h2>
            <h3 className="h3 max-w-[455px] mb-16">

            </h3>
          </motion.div>
          {/* academics */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div className="flex-1">
              {academics.map((academic, index) => {
                const { college, qualification, year, cpi } = academic;
                return (
                  <div
                    className="border-b border-white/20 mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {college}
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="font-secondary leading-tight text-gradient">
                          {qualification}
                        </div>
                        <div className="">{year}</div>
                      </div>
                      <div className="my-2">CPI/Percentage : {cpi}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
