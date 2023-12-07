import React from "react";
import Link from "next/link";

//next hooks




const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link className={`capitalize ${linkStyles} `} key={index} href={link.path}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
