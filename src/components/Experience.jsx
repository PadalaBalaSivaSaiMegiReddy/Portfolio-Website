import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
      <div className="bg-tertiary p-5 rounded-2xl -mt-12 max-w-[1000px] ">
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[18px] font-bold hover:text-white cursor-pointer' onClick={() => window.open(experience.link, "_blank")}>
          <i>{experience.company_name}</i>
        </p>
        <p className = "text-white text-[14px] font-medium">{experience.date}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");