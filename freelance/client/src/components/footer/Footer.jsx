import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <hr/>
        <div className="top">
        <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Flexicraft</span>
            <span>Buying on Flexicraft</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Flexicraft</h2>
            <span>Flexicraft Business</span>
            <span>Flexicraft Pro</span>
            <span>Flexicraft Logo Maker</span>
            <span>Flexicraft Guides</span>
            <span>Get Inspired</span>
            <span>Flexicraft Select</span>
            <span>ClearVoice</span>
            <span>Flexicraft Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        
        <hr/>

        <div className="bottom">
          <div className="left">
            <h2>Flexicraft</h2>
           
          </div>
          <div className="right">
            <div className="social">
                <img src="/img/instagram_1.png" alt="" />
                <img src="/img/facebook_1.png" alt="" />
                <img src="/img/linkedin_1.png" alt="" />
                <img src="/img/github_1.png" alt="" />
                <img src="/img/youtube_1.png" alt="" />
              </div>

              <div className="link">
                <img src='./img/language_4.png' alt=''/>
                <span>English</span>
              </div>

              <div className="link">
                <img src='./img/currency_1.png' alt=''/>
                <span>INR</span>
              </div>
              <img src='./img/accessability_2.png' alt='' />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
