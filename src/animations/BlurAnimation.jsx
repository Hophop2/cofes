import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
const AnimatedList = ({ children }) => {
    const ref = useRef(null)
    const controls = useAnimation();
    const  inView = useInView(ref);
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 75,  filter: 'blur(10px)'}}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, filter: 'blur(0)' },
        }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };
  export default AnimatedList;