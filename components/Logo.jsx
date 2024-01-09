import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';




const Logo = () => {
  const logoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Link href='/'>
     <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
      >
        <Image
          src='/logo.png'
          width={54}
          height={50}
          layout="fixed" // Set layout to "fixed"
          objectFit="cover" // Use "cover" to control how the image is resized
          priority
          alt=''
          className="rounded-full" // Apply a rounded style
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
