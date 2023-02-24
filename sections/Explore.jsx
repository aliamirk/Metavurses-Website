'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, ExploreCard, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../public/constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (

    <section className={`${styles.paddings}`} id="explore">

      {/* The World Text */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

        <TypingText title="| The World" textStyles="text-center" />

        {/* Choose The World Text */}

        <TitleText
          title={<>Choose The World You Want <br className="md:block hidden" />To Explore</>}
          textStyles="text-center"
        />

        {/* Explore Images */}

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">

          {exploreWorlds.map((world, index) => (

            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={(id) => setActive(id)}
            />

          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Explore;
