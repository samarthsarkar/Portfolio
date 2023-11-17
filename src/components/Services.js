import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Data Structures and Algorithms",
    description: "Solved 400+ problems on Leetcode and Code Studio.",
    additional: "View Profiles",
    link: "https://www.codingninjas.com/studio/profile/DzrkZammy",
  },
  {
    name: "Full Stack Web developer",
    description:
      "Expert Full-StackWeb Developer specializing in MERN stack and Tailwind CSS with over 10 projects build",
    additional: "View Github",
    link: "https://github.com/samarthsarkar",
  },
  {
    name: "Core CSE Subjects",
    description:
      "Strong grasp of Computer Networking, Operating Systems, Object Oriented Programming and Database Management.",
    additional: "",
    link: "",
  },
  {
    name: "AWS Cloud Computing",
    description:
      "Fundamental knowledge of cloud computing, AWS applications, virtualization concepts, IaaS, PaaS, SaaS, and essential AWS services such as EC2, etc.",
    additional: "",
    link: "",
  },
];

const Services = () => {
  return (
    <section className="section mt-40 mb-48" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-centre bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Technical Skills</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Expert command over MERN stack, opencv and 
              various other frameworks such as tailwind, React,etc.
            </h3>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div className="flex-1">
              {services.map((service, index) => {
                const { name, description, additional, link } = service;
                return (
                  <div
                    className="border-b border-white/20 mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-3">
                        {description}
                      </p>
                    </div>
                    {link !== "" && (
                      <div className="flex flex-col mb-5 flex-1 items-end">
                        <a
                          onClick={() => {
                            if (link === "https://www.codingninjas.com/studio/profile/DzrkZammy")
                              window.open(
                                "https://leetcode.com/dzrkzammy/"
                              );
                          }}
                          href={link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn w-9 h-9 mb-[25px] flex justify-center items-center"
                        >
                          <BsArrowUpRight />
                        </a>
                        <a
                          onClick={() => {
                            if (link === "https://leetcode.com/dzrkzammy/")
                              window.open(
                                "https://www.codingninjas.com/studio/profile/DzrkZammy"
                              );
                          }}
                          href={link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-gradient text-sm"
                        >
                          {additional}
                        </a>
                      </div>
                    )}
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

export default Services;
