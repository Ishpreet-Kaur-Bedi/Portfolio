import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center mt-8 pt-16"
      >
        <h3 className="absolute hidden sm:block top-0 p-5 md:top-0 uppercase tracking-[20px] text-gray-500 text-2xl md:relative">
          
        </h3>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/Images/IshpreetProfileImage.jpeg"
          className="mt-8 md:-mt-8 md:-ml-8 w-64 h-64 rounded-full object-cover md:rounded-lg xl:w-[500px] xl:h-[600px]"
          alt="Profile Image"
        />

        <div className="mt-8 md:mt-0 space-y-4 md:ml-8">
          <h4 className="text-3xl md:text-4xl font-semibold">
            Here is a <span className="underline decoration-[#f7AB0A]/50">little</span> background
          </h4>
          <p className="text-base md:text-lg">
            🎓 Computer Science Undergrad at IIITM Gwalior 🖥️ <br />
            💻 Full Stack Web Developer proficient in MERN stack, Next JS, and Typescript 🌐 <br />
            🔢 Passionate about Data Structures & Algorithms ⚙️ <br />
            🌱 Learning new technologies and embracing creative and practical applications ✨ <br />
            📚 A poet, writer, and avid reader, exploring the power of language to unlock the depths of human experience 🖋️📖 <br />
          </p>
        </div>
      </motion.div>
    </div>
  );
}
