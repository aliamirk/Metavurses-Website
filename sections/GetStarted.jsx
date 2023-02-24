'use client';

import { motion } from 'framer-motion';
import { TypingText, StartSteps, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer,fadeIn,planetVariants } from '../utils/motion';
import { startingFeatures } from '../public/constants';

const GetStarted = () => (

  <section className={`${styles.paddings} relative z-10`}>


    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >



      {/* Image */}

      <motion.div
      variants={planetVariants('left')}
      className={`flex ${styles.flexCenter}`}
      >

        <img 
        src="/get-started.png" 
        alt="get started image"
        className='w-[90%] h-[90%] object-contain'
        />

      </motion.div>





      {/* Text */}

      <motion.div
        variants={fadeIn('left', 'tween', 0.2 , 1)}
        className=" flex justify-center flex-col gap-4"
      >

        <TypingText title="| How Metavurses Works" />
        <TitleText title={<>Get Started With Just A Few Clicks</>} />



      {/* Features */}

        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px] '>

          {startingFeatures.map((feature,index)=>(
            <StartSteps
            key={feature}
            number={index + 1}
            text={feature}
            />
          ))}

        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default GetStarted;
  