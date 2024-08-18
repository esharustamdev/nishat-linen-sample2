import React, { useState } from 'react'

const Navbar = () => {
  const [navBtn, setnavBtn] = useState(false)
  const navFunc = () => {
    setnavBtn(!navBtn)
  }
  return (
    <>
      <div className='headerContainer'>
        <div className='headerIconBtn'>
          <i class='fa-solid fa-bars' onClick={navFunc}></i>
        </div>
        <div className='headerLogo'>
          <img src='imges/nishatLogo.webp' alt='' />
        </div>
        <div className='headerIcon'>
          <i class='fa-solid fa-cart-shopping'></i>
          <i class='fa-regular fa-user'></i>
          <i class='fa-solid fa-magnifying-glass'></i>
          <i class='fa-solid fa-truck-fast'></i>
        </div>
      </div>
      <hr />

      <div className='navContainer'>
        <div className={`navLinks ${navBtn ? 'activenavLinks' : ''}`}>
          <div className='navLinkIcon'>
            <i class='fa-solid fa-xmark' onClick={navFunc}></i>
          </div>
          <ul>
            <li>
              <a href=''>NewIn</a>
              <ul className='dropdown'>
                <li className='dropdownImg'>
                  <img src='imges/navimg.webp' alt='' />
                </li>
                <li>
                  <li>
                    <a href=''>Unstitched</a>
                  </li>
                  <li>
                    <a href=''>Luxury</a>
                  </li>
                  <li>
                    <a href=''>Pret</a>
                  </li>
                  <li>
                    <a href=''>Free To Buy</a>
                  </li>
                  <li>
                    <a href=''>Men</a>
                  </li>
                  <li>
                    <a href=''>Bottoms</a>
                  </li>
                  <li>
                    <a href=''>Home</a>
                  </li>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Women</a>
              <ul className='dropdown'>
                <li className='dropdownImg'>
                  <img src='imges/navimg2.webp' alt='' />
                </li>
                <li>
                  <li>
                    <a href=''>Printed</a>
                  </li>
                  <li>
                    <a href=''>Embroided</a>
                  </li>
                  <li>
                    <a href=''>Soilds</a>
                  </li>
                  <li>
                    <a href=''>Co-Ods</a>
                  </li>
                  <li>
                    <a href=''>1piece</a>
                  </li>
                  <li>
                    <a href=''>2piece</a>
                  </li>
                  <li>
                    <a href=''>Home</a>
                  </li>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Men</a>
              <ul className='dropdown'>
                <li className='dropdownImg'>
                  <img src='imges/navimg4.webp' alt='' />
                </li>
                <li>
                  <li>
                    <a href=''>Unstitched</a>
                  </li>
                  <li>
                    <a href=''>Luxury</a>
                  </li>
                  <li>
                    <a href=''>Pret</a>
                  </li>
                  <li>
                    <a href=''>Free To Buy</a>
                  </li>
                  <li>
                    <a href=''>Men</a>
                  </li>
                  <li>
                    <a href=''>Bottoms</a>
                  </li>
                  <li>
                    <a href=''>Home</a>
                  </li>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Luxuray</a>
              <ul className='dropdown'>
                <li className='dropdownImg'>
                  <img src='imges/navimg2.webp' alt='' />
                </li>
                <li>
                  <li>
                    <a href=''>Embroided</a>
                  </li>
                  <li>
                    <a href=''>Non-Embroided</a>
                  </li>
                  <li>
                    <a href=''>Summers</a>
                  </li>
                  <li>
                    <a href=''>Pre-Fall</a>
                  </li>
                  <li>
                    <a href=''>Eid-ul-Azha</a>
                  </li>
                  <li>
                    <a href=''>Eid Edit</a>
                  </li>
                  <li>
                    <a href=''>Home</a>
                  </li>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Home</a>
              <ul className='dropdown'>
                <li className='dropdownImg'>
                  <img src='imges/navimg5.webp' alt='' />
                </li>
                <li>
                  <li>
                    <a href=''>Bed Sheets</a>
                  </li>
                  <li>
                    <a href=''>Bed Covers</a>
                  </li>
                  <li>
                    <a href=''>Comforters</a>
                  </li>
                  <li>
                    <a href=''>Bridal Set</a>
                  </li>
                  <li>
                    <a href=''>Bed Spreads</a>
                  </li>
                  <li>
                    <a href=''>Bottoms</a>
                  </li>
                  <li>
                    <a href=''>Home</a>
                  </li>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Accessories</a>
              <ul className='dropdown'>
                <li className='dropdownImg'>
                  <img src='imges/navimg6.webp' alt='' />
                </li>
                <li>
                  <li>
                    <a href=''>Hand Bags</a>
                  </li>
                  <li>
                    <a href=''>Cluches</a>
                  </li>
                  <li>
                    <a href=''>Kids Bags</a>
                  </li>
                  <li>
                    <a href=''>Mini Bags</a>
                  </li>
                  <li>
                    <a href=''>Wallets</a>
                  </li>
                  <li>
                    <a href=''>Bag Packs</a>
                  </li>
                  <li>
                    <a href=''>Vanity Bags</a>
                  </li>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
