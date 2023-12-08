// Socials.js

import Link from "next/link";
import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri';

const icons = [
  { path: '/youtube', name: <RiYoutubeFill /> },
  { path: '/linkedin', name: <RiLinkedinFill /> },
  { path: '/github', name: <RiGithubFill /> },
  { path: '/facebook', name: <RiFacebookBoxFill /> },
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
