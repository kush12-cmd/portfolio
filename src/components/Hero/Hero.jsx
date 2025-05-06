import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='' />
        <h1> <span> I'm Kushagra Gupta,</span>  frontend devloper based in India</h1>
        <p>"Passionate developer exploring the world of Frontend Development with React, JavaScript, HTML, and CSS! 🚀 Focused on building dynamic, user-friendly web applications with clean and responsive designs."</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero