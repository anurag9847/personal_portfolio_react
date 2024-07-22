import React from 'react'
import { PROJECTS } from '../constants'
import Card from '../components/Card'
import { motion } from 'framer-motion'



const containerVarients = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.4
        }
    },
}

const itemVarients = {
    hidden: { opacity: 0, y: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const Projects = () => {
    return (
        <div id='projects'>
            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={containerVarients}
                viewport={{ once: true }}

                className='mt-20 text-center font-semibold text-[30px]'>Projects</motion.h2>
            <motion.div className='flex flex-wrap justify-center py-8'
                initial="hidden"
                whileInView="visible"
                variants={containerVarients}
                viewport={{ once: true }}
            >
                {PROJECTS.map((project, index) => (
                    <motion.div key={index} variants={itemVarients}>
                        <Card image={project.image}
                            title={project.title} subtitle={project.subtitle} link={project.link} />
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Projects
