'use client'
import Link from "next/link"

import {RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill} from 'react-icons/ri'
 const icons =[
    {
        path:'/',
        name:<RiYoutubeFill/>
    },
    {
        path:'/',
        name:<RiLinkedinFill/>
    },
    {
        path:'/',
        name:<RiGithubFill/>
    },
    {
        path:'/',
        name:<RiFacebookBoxFill/>
    },
    {
        path:'/',
        name:<RiInstagramFill/>
    },

 ]
const Socials = (containerStyles,iconsStyles) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon,index)=>{
            return <Link href ={icon.path} key={index}
            >
            <div className={`${iconsStyles}`}>
                {icon.name}
                </div></Link>
        })}
      Socials
    </div>
  )
}

export default Socials
