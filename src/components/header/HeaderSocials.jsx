import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'
import {FiDribbble} from 'react-icons/fi'
import {FaBlogger} from 'react-icons/fa'
import { themeContext } from '../../Context'
import { useContext } from 'react';
const HeaderSocials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" className='header-icon-social-1' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a style={{color : darkMode? 'white': ''}} href="https://github.com/Honghaonguyen/haonguyen.github.io" className='header-icon-social-2' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://dribbble.com/Crispham" className='header-icon-social-3' target="_blank" rel="noreferrer"><FiDribbble /></a>
        <a href="https://gmail.com" className='header-icon-social-4' target="_blank" rel="noreferrer"><CgMail /></a>
        <a href="https://blogger.com" className='header-icon-social-5' target="_blank" rel="noreferrer"><FaBlogger /></a>
    </div>
  )
}

export default HeaderSocials