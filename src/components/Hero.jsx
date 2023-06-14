import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { CubeCanvas, StarsCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <StarsCanvas />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, <span className='text-[#915EFF]'>Bala Siva Sai Megi Reddy Padala</span> here!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full-Stack Developer with a passion for  <br className='sm:block hidden' />
            crafting visually stunning and high-performing websites.
          </p>
        </div>
      </div>
      <CubeCanvas />
    </section>
  );
}

export default Hero;