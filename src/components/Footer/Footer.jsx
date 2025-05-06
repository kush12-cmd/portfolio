import React from 'react'
import './Footer.css'
import nav_underline from '../../assets/nav_underline.svg'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Kushagra</h1>
                <img src= {nav_underline} alt="" />
                <p>I am a frontend developer, with 1 years of experience in companies like W3villa technologi ltd.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src= {user_icon} alt="" />
                    <input type="email"  placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="fotter-bottom-left">© 2025 Kushagra Gupta . All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Footer