import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";
import { textVariant, fadeIn  } from '../utils/motion';
import { styles } from "../styles";

const Socials = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}><center>Connect with me!</center></h2>
    </motion.div>
    <br />
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {socials.map((social) => (
        <div className='w-28 h-28 cursor-pointer' key={social.name}>
          <img src={social.icon} onClick={() => window.open(social.link, "_blank")}/>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-5 text-secondary text-[17px] max-w-3xl'>
            <div><center><b>{social.name}</b></center></div>
          </motion.p>
        </div>
      ))}
    </div>
    </>
  );
}

export default SectionWrapper(Socials, "contact");