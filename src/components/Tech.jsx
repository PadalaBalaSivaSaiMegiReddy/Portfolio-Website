import React from "react";
import "./Tech.css";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          <center>Technologies & Frameworks</center>
        </h2>
      </motion.div>
      <br />
      <div className="flex flex-row flex-wrap justify-center">
        {technologies.map((technology) => (
        <div className="tech-item" key={technology.name}>
          <img className="tech-icon" src={technology.icon} alt={technology.name} />
          <motion.p variants={fadeIn("", "", 0.01, 1)}>
            <p className="tech-name">{technology.name}</p>
          </motion.p> 
        </div>
  ))}
</div>
    </>
  );
}

export default SectionWrapper(Tech, "");