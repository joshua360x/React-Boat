import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer-container">
    <div className="footer-wrapper">
      <div className="connected">

      <h4 className="header">Stay Connected</h4>
        <p className="textFoot">Join the community</p>
        </div>

      </div>

      <div className="social-tag">
      <i class="fab fa-facebook-square fa-3x"></i>
      <i class="fab fa-twitter-square fa-3x"></i>
      <i class="fab fa-linkedin fa-3x"></i>
      <i class="fab fa-youtube-square fa-3x"></i>
      </div>

      <div className="policy">
        <div className="border-scen">
        <a className='footEnd' href='#'>Privacy Policy</a>
        </div>
        <div className="border-scen">
        <p className="footEnd">|</p>

        </div>
        <div className="border-scen">
        <a className='footEnd' href='#'>Sitemap</a>
        
        </div>
        <div className="border-scen">
        <p className="footEnd">|</p>

        </div>
        <div className="border-scen">
        <a className='footEnd footEndNone' href='#'>Copyright 2021 Dat Dv LyFE</a>
        </div>
       
     
        

      </div>
    </div>
  
    </>
  )
}

export default Footer
