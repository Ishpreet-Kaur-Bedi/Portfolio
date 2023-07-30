import React from 'react';
import {motion} from 'framer-motion'
const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-34 uppercase tracking-[20px] text-gray-500 text-2xl'></h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div
            key={i} // Added key prop with unique value
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center p-20 md:p-44 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80  h-screen'
          >
            <motion.img
            initial={{
              y:-300,
              opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            src='' alt='' />
            <div>
            
              <h4 className='text-4xl font-semibold text-center '>
                <span className='underline decoration-[#f7AB0A]/50'> Case study {i + 1} of {projects.length}: ups clone</span>
                
               </h4>
               <p className='text-lg text-center md:p-44 h-screen'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nobis dolorem, cum eum voluptatem laboriosam molestiae dolores quos quae amet veniam consequuntur et similique velit impedit voluptatibus? Eveniet, laudantium nemo!
               </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'
      />
    </motion.div>
  );
};

export default Projects;
