"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";



export default function World() {
  return (

    <section className={`${styles.paddings} relative z-10`}>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

        <TypingText title="| People On The World" textStyles="text-center"/>

        <TitleText title={(<>Track friends around you and invite them to play together in the same world</>)}
        textStyles="text-center"
        />

        {/* World Map Image */}

        <motion.div
          variants={fadeIn('up','tween',0.3,1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >

          <img 
            src="/map.png" 
            alt="map" 
            className="lg:w-full h-full w-[1000px] lg:object-cover"
            />

            {/* Showing Icons on Top of Map */}

          {/* People 1 */}

            <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
              <img 
                src="people-01.png" 
                alt="people"
                className="w-full h-full"
              />

            </div>

          {/* People 2 */}

            <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
              <img 
                src="people-02.png" 
                alt="people"
                className="w-full h-full"
              />

            </div>


          {/* People 3 */}

            <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
              <img 
                src="people-01.png" 
                alt="people"
                className="w-full h-full"
              />

            </div>

        </motion.div>


      </motion.div>
    </section>
  );
}