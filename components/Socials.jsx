// Socials.js

import Link from "next/link";
import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri';
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";

const icons = [
  { path: '/youtube', name: <RiYoutubeFill /> },
  { path: 'https://www.linkedin.com/in/ishpreet-kaur-bedi/', name: <RiLinkedinFill /> },
  { path: 'https://github.com/Ishpreet-Kaur-Bedi', name: <RiGithubFill /> },
  { path: 'https://leetcode.com/u/ishpreet27/', name: <SiLeetcode />
  },
  { path: '/instagram', name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>
            {icon.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
