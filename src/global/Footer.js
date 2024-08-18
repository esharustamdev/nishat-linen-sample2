import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footerCont'>
        <div className='footerDiv1'>
          <h3>Contact Us</h3>
          <div className='footerDiv1Icon1'>
            <i class='fa-solid fa-location-dot'></i>
            <li>21 Km Ferozpur Road Lahore Pakistan.</li>
          </div>
          <div className='footerDiv1Icon1'>
            <i class='fa-regular fa-envelope'></i>
            <li>nishatonline@nishatmills.com</li>
          </div>
          <div className='footerDiv1Icon1'>
            <i class='fa-solid fa-phone'></i>
            <li>+92 (0)42 3810 3311</li>
          </div>
        </div>
        <div className='footerDiv1'>
          <h3>Information</h3>
          <li>Blogs</li>
          <li>Size Guide</li>
          <li>About Us</li>
          <li>Catalogues</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </div>
        <div className='footerDiv1'>
          <h3>Customer Services</h3>
          <li>Faqs</li>
          <li>Order Tracking</li>
          <li>Store Locator</li>
          <li>Contact Us</li>
          <li>Return & Exchange Policy</li>
        </div>
        <div className='footerDiv4'>
          <h3>Letter Sign Up</h3>
          <p>Subscribe to our newsletter and get latest updates.</p>
          <div className='footerDiv4Btn'>
            <input type='Your E-mal Adress' />
            <button>Subscribe</button>
          </div>
          <div className='footerDiv4Icons'>
            <i class='fa-brands fa-facebook'></i>
            <i class='fa-brands fa-linkedin'></i>
            <i class='fa-brands fa-tiktok'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
