import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full shadow-xl p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#072E5C] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[#f4f4f6] text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#64748b] text-[18px] max-w-3xl leading-[30px]"
      >
        I am a front-end developer with a 3-year track record, dedicated to
        crafting visually appealing and functional web and mobile applications
        that prioritize an outstanding user experience. Fueled by a passion for
        UX/UI design, I meticulously consider and refine every aspect of the
        graphical interface to ensure optimal user engagement. My academic
        foundation encompasses project management, business enterprise, and
        agile methodologies, instilling in me a constant pursuit of fresh
        challenges and avenues for professional development. Known for my high
        level of responsibility, organizational prowess, and proactive approach,
        I consistently demonstrate efficiency in task completion and meeting
        project requirements. My overarching objective is to contribute to my
        company's success through the delivery of high-quality work, aspiring to
        be acknowledged for my accomplishments and progress within the
        organization.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} sr />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
