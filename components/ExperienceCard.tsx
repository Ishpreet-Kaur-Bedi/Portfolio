'use client'


import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
const ExperienceCard = () => {
  return (
   <article className='flex flex-col rounded-lg items-center spcae-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]  p-10 hover:opacity-100 opactiy-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>    
    <motion.img
    initial={{
        y:-100,
        opacity:0
    }}
    transition={{duration:1.2}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    
    className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ' src="" alt=''/>


<div className='px-0 md:px-10'>

<h4 className='text-4xl font-light'>
Senior Executive
</h4>
<p className='font-bold text-2xl mt-1'>
    E - cell

</p>
<div className='flex space-x-2 my-2'>
   <Image src="" alt='' className='h-10 w-10 rounded-full'></Image>
   <Image src="" alt='' className='h-10 w-10 rounded-full'></Image>
   <Image src="" alt='' className='h-10 w-10 rounded-full'></Image>
   <Image src="" alt='' className='h-10 w-10 rounded-full'></Image>
   <Image src="" alt='' className='h-10 w-10 rounded-full'></Image>
   
</div>
<p className='uppercase py-5 text-gray-300'>
    started....ended....
</p>
<ul className='list-disc space-y-4 text-lg ml-5'>
    <li>points</li>
    <li>points</li>
    <li>points</li>
    <li>points</li>
    <li>points</li>
</ul>
</div>
   </article>
  )
}

export default ExperienceCard