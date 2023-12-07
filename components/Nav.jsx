import React from "react";
import Link from "next/link";
import {motion} from "framer-motion"
//next hooks
import { usePathname } from "next/navigation";



const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
const path =usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link className={`capitalize ${linkStyles} `} key={index} href={link.path}>
            {link.path===path &&(
              <motion.span
              initial ={{y:'-100%'}}
              animate ={{y:0}}
              transition={{type:'tween'}}
              layoutId ='underline'
              className={`${underlineStyles}`}

              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
