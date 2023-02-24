'use client';

import { motion } from 'framer-motion';
import { TypingText, InsightCard, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer} from '../utils/motion';
import { insights } from '../public/constants';



export default function Insights() {


  return (


    <section className={`${styles.paddings} relative z-10`}>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

        {/* Title Text  */}
        <TypingText title="| Insight" textStyles="text-center" />

        <TitleText title="Insights About Metaverse" textStyles="text-center"/>


        {/* Mapping Insights */}
        <div className="mt-[50px] flex flex-col gap-[30px] ">

            {insights.map((insight ,index)=>(
              <InsightCard key={`insight-${index}`}
              {...insight}
              index= {index + 1}
              />
            ))}

        </div>

      </motion.div>
      
      </section>

  );
}
