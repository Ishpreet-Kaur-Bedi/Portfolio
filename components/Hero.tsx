import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
 
type Props={}
export default function Hero  ({}:Props) {
  const[text,count]  = useTypewriter({
words:[
    "Hi, This is Ishpreet Kaur",
    "Experienced {Content Writer}",
    "Girl-who-loves-coffee.jsx",
    "<But loves to code more/>",
    "[...A Passionate Poet]"
],
loop:true,
delaySpeed:2000,

  })
  
  
    return (
    <div className='h-screen flex-col space-y-8 items-center justify-center text-center overflow-hidden '>



    <BackgroundCircles/>


    <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src= '' alt=''/>
    <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Software Engineer
        </h2>
    <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
      <span className='mr-3'>{text}</span>
<Cursor cursorColor='#f7AB0A' />      </h1>
<div className='pt-5'>
    <Link href="#about">
    <button  className='herobutton px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest test-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#f7AB0A]/40'>About</button>
    
    </Link>
   <Link href="#experiance">  <button  className='herobutton px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest test-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#f7AB0A]/40'>Experience</button></Link>
  
  <Link href="#skills">
  <button  className='herobutton px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest test-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#f7AB0A]/40'>Skills</button>
  </Link>


<Link href="#project">
<button  className='herobutton px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest test-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#f7AB0A]/40'>Projects</button>
    
</Link>


   
</div>
    </div>


    </div>
  )
}


