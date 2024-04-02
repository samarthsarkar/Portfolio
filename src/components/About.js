import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-atuo ml-24">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              {/* I'm a coder, developer, ML enthusiast ! */}
            </h3>
            <p className="mb-6">
              I am a dedicated and enthusiastic B.Tech final Year, majoring in Computer Science and Engineering, with a profound interest in the field of machine learning. 
              I am passionate about leveraging technology to solve complex problems and have a strong academic foundation in computer science and I am an expert in Data Structures and Algorithms with over 400 solved problems across multiple paltforms.
              Additionally, I am an avid reader, finding great enjoyment in expanding my knowledge through books. 
              This combination of technical expertise and a love for learning has shaped my commitment to academic and personal growth.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={400} duration={1} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Problems <br />
                  Solved
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetcs <br />
                  Created
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Current <br />
                  Achievements
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a
                href="https://github.com/samarthsarkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-lg">
                  <div className="flex justify-center items-center">
                    <FaGithub className="mr-2" />
                    View Github
                  </div>
                </button>
              </a>
              <a
                href="https://drive.google.com/drive/folders/11s1_lTKw88JQpWox6WD23-PXJC-oIUtl?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient btn-link"
              >
                View Certificates
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
