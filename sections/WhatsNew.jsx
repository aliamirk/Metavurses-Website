'use client';

import { motion } from 'framer-motion';
import { TypingText, NewFeatures, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer,fadeIn,planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';


const WhatsNew = () => (


  <section className={`${styles.paddings} relative z-10`}>


    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >


      {/* Text */}

      <motion.div
        variants={fadeIn('right', 'tween', 0.2 , 1)}
        className=" flex justify-center flex-col gap-4"
      >

        <TypingText title="| What's New" />
        <TitleText title={<>What's New About Metavurses</>} />



      {/* Whats New Features */}

        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px] '>

          {newFeatures.map((feature)=>(

            <NewFeatures
            key={feature.title}
            {...feature}
            />

          ))}

        </div> 

      </motion.div>
      

      {/* Image */}

      <motion.div
      variants={planetVariants('right')}
      className={`flex ${styles.flexCenter}`}
      >

        <img 
        src="/whats-new.png" 
        alt="whats new image"
        className='w-[90%] h-[90%] object-contain'
        />

      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
