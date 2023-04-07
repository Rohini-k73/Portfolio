import React from 'react'

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonalLinesFill} from 'react-icons/bs'

const socialLinks = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'> 
      <ul>
        <li className="flex justify-between items-center w-40 h-1/4 px-4 bg-black">
            <a href="http://" className='flex justify-between items-center w-full text-white'>

             <>
             Linkedin < FaLinkedin/> 
             </a>
             </li>
      </ul>
    </div>
  )
}

export default socialLinks;
