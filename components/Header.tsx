import React from 'react';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import {BsMedium} from 'react-icons/bs'
import {BiLogoBlogger} from 'react-icons/bi'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'; // Import SocialIcon if it's part of your codebase

export default function Header() {
  return (
    <header className="sticky p-5 top-0 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center space-x-4 z-20"
      >
        {/* Wrap the icon with a link */}
        <a href="https://www.linkedin.com/in/ishpreet-kaur-bedi/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size={30} color="gray" />
        </a>
        <a href="https://github.com/Ishpreet-Kaur-Bedi" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size={30} color="gray" />
        </a>
        <a href="https://medium.com/@Ishpreet_Kaur" target="_blank" rel="noopener noreferrer">
          <BsMedium size={30} color="gray" />
        </a>
        <a href="https://preetsquill.blogspot.com/" target="_blank" rel="noopener noreferrer">
          <BiLogoBlogger size={30} color="gray" />
        </a>
      
        <a href="https://www.linkedin.com/in/ishpreet-kaur-bedi/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size={30} color="gray" />
        </a>
      </motion.div>

      {/* Contact */}
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 1.5 }}
          className="flex items-center text-gray-300 cursor-pointer z-20"
        >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" className="" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact Me</p>
        </motion.div>
      </Link>
    </header>
  );
}
