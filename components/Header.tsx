import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
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
        {/* socialIcons */}
        <SocialIcon url="https://www.linkedin.com/in/ishpreet-kaur-bedi/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/ishpreet-kaur-bedi/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/ishpreet-kaur-bedi/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/ishpreet-kaur-bedi/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/ishpreet-kaur-bedi/" fgColor="gray" bgColor="transparent" />
      </motion.div>

      {/* Contact */}
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
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
    </header>
  );
}
