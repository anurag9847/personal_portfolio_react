import React from 'react'
import video from '../assets/video.mp4';
import { ACHIEVEMENT } from '../constants';
import { motion } from 'framer-motion'

const containerVariables = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.8
    }
  }
}

const itemVariables = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,


    }
  }
}

const AcheivmentShowcase = () => {
  return (
    <div id="award">
      <h2 className='mb-12 text-center text-[30px] font-semibold'>Awards</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariables}
        viewport={{ once: true }}
        className='mx-auto flex max-w-6xl flex-wrap'>
        <motion.div

          className='w-full p-2  sm:w-1/2'>
          <video className='w-full rounded-lg' autoPlay muted loop playsInline>
            <source src={video} type='video/mp4' />
          </video>
        </motion.div>
        <motion.div variants={itemVariables} className='w-full p-4  text-center sm:w-1/2'>
          <h2 className='mb-4 text-3xl'>{ACHIEVEMENT.title}</h2>
          <span className='mt-4  border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400'>
            {ACHIEVEMENT.award}
          </span>
          <p className='m-4 p-2 italic'>{ACHIEVEMENT.description}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AcheivmentShowcase
