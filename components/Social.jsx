import React from 'react'
import Link from 'next/link'


import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon:<FaGithub/>, path: "https://github.com/mfmshazan"},
    {icon:<FaLinkedin/>, path: "https://www.linkedin.com/in/shazan-faslan-4264a3334"},
    {icon:<FaTwitter/>, path: ""}
]
const Social = ({containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return(
         <Link key={index} href={item.path} className={iconStyles}
         >{item.icon}</Link> 
        )
      })}
    </div>
  )
}

export default Social
