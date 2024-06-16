'use client'
import React, { useState } from 'react';
import Menu from './components/Menu';
import './styles.css';
import Cards from "./components/Cards";
import TrustedBy from "./components/TrustedBy";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessDropdownHovered, setIsBusinessDropdownHovered] = useState(false); // State for "For Business" dropdown hover

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleMouseEnter = () => {
    setIsBusinessDropdownHovered(true);
  }

  const handleMouseLeave = () => {
    setIsBusinessDropdownHovered(false);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsBusinessDropdownHovered(false); 
  }
  return (
    <>
      <div className="min-h-screen min-w-screen text-black bg-gray-200 font-sans overflow-hidden">
        <nav>
          <div className='text-black fixed w-screen flex justify-center items-center'>
            <div style={{'border':'1px solid white'}} className='flex justify-between w-[95%] px-8 py-2 mt-6 rounded-full backdrop-blur-md backdrop-filter'>
              <div className='flex items-center'>
              <svg viewBox="0 0 115 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-enterprise-black h-4 md:h-6 flex-none">
                        <path d="m32.626.367-8.802 21.589a3.284 3.284 0 0 1-3.041 2.043h-8.895a3.283 3.283 0 0 1-3.04-2.04L.02.367A.266.266 0 0 1 .266 0h8.91c.222 0 .421.138.5.346l6.672 17.795L22.967.348a.533.533 0 0 1 .5-.348h8.912c.189 0 .318.192.247.367Zm.813-.1v23.466c0 .147.12.267.267.267h24.463c.146 0 .266-.12.266-.267v-5.851a.267.267 0 0 0-.266-.267h-15.92a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H42.25a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267h15.919c.146 0 .266-.12.266-.267V.267A.267.267 0 0 0 58.17 0H33.706a.267.267 0 0 0-.267.267Zm26.12 0v23.466c0 .147.12.267.268.267H84.29c.146 0 .266-.12.266-.267v-5.851a.268.268 0 0 0-.266-.267H68.37a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H68.37a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267H84.29c.146 0 .266-.12.266-.267V.267A.268.268 0 0 0 84.29 0H59.826a.267.267 0 0 0-.266.267Zm26.123 23.466c0 .147.12.267.266.267h16.76c3.668 0 6.627-.951 8.891-2.868 2.264-1.902 3.396-4.95 3.396-9.147s-1.132-7.245-3.396-9.148C109.335.95 106.377 0 102.708 0h-16.76a.267.267 0 0 0-.266.267v23.466Zm8.81-6.163a.267.267 0 0 1-.267-.267V6.697c0-.147.12-.267.266-.267h6.255c1.932 0 3.366.423 4.302 1.268.936.845 1.403 2.279 1.403 4.287s-.467 3.472-1.403 4.317c-.936.846-2.37 1.268-4.302 1.268h-6.255Z" fill="currentColor"></path>
                      </svg>

              </div>
              <div className='hidden lg:flex lg:items-center'>
                <ul className='flex justify-between gap-10 cursor-pointer'>
                  <li className='flex justify-between items-center gap-1'>Products <p style={{'fontSize':'12px','padding-top':'3px'}}>▼</p></li>
                  <li className='flex justify-between items-center gap-1'>Use Cases <p style={{'fontSize':'12px','padding-top':'3px'}}>▼</p></li>
                  <li className='flex justify-between items-center gap-1'>Resources <p style={{'fontSize':'12px','padding-top':'3px'}}>▼</p></li>
                  
                  <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='cursor-pointer relative'>
                    <div className='flex justify-between items-center gap-1'>For Business <p style={{'fontSize':'12px','padding-top':'3px'}}>▼</p></div>

                    {isBusinessDropdownHovered && (
                      <div>
                      <div className="absolute bg-white  mt-1 py-6 px-4 shadow-lg rounded-3xl border-8 border-slate-400"
                      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                      style={{ minWidth: '800px', top: '100%', left: '50%', transform: 'translateX(-50%)'}}
                      >
                      <div className='flex justify-between gap-10 '>
                          <div>
                              <pre className='pl-10 text-2xl font-sans'>For Business</pre>
                          </div>

                          <div className='flex justify-between gap-4'>
                              <svg viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 flex-none md:h-20 md:w-20 xl:h-24 xl:w-24"><rect y="0.004" width="94" height="94" rx="24" fill="#E7DFFC"></rect><rect x="18.8" y="68.15" width="42.3" height="56.4" rx="5.64" transform="rotate(-90 18.8 68.15)" fill="#541BCA"></rect><g filter="url(#veed-for-business_svg__a)"><rect x="49.35" y="47" width="32.9" height="32.9" rx="16.45" transform="rotate(-90 49.35 47)" fill="url(#veed-for-business_svg__b)"></rect><path d="M65.8 14.1a16.45 16.45 0 0 0-16.45 16.45H65.8V14.1Z" fill="#E7DFFC"></path><path d="M65.8 14.1a16.45 16.45 0 0 0-14.246 8.225L65.8 30.55V14.1Z" fill="#fff"></path></g><path d="M25.85 54.05h42.3M25.85 58.75H61.1" stroke="#E0E2FF" stroke-width="1.88" stroke-linecap="round"></path><defs><linearGradient id="veed-for-business_svg__b" x1="54.285" y1="77.55" x2="55.377" y2="-4.894" gradientUnits="userSpaceOnUse"><stop offset="0.083" stop-color="#9B7AFA" stop-opacity="0.4"></stop><stop offset="0.359" stop-color="#fff" stop-opacity="0.38"></stop><stop offset="0.641" stop-color="#9B7AFA" stop-opacity="0.33"></stop><stop offset="0.85" stop-color="#5667F5" stop-opacity="0.69"></stop></linearGradient><filter id="veed-for-business_svg__a" x="44.899" y="9.648" width="41.803" height="41.803" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.226"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_408_1780"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_408_1780" result="shape"></feBlend></filter></defs></svg>

                              <div style={{'width':"200px"}}>
                                  <h2>VEED for Business</h2>
                                  <span style={{'fontSize':'12px'}} className='text-gray-400'>
                                      Video for teams that requires collaboration, access and privacy
                                  </span>
                              </div>

                          </div>
                          

                          <div className='flex justify-between gap-4'>
                          <svg viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 flex-none md:h-20 md:w-20 xl:h-24 xl:w-24"><rect width="94" height="94" rx="24" fill="#E0FFF0"></rect><path d="m47 18.8-23.52 4.698V35.9A44.594 44.594 0 0 0 47 75.2a44.566 44.566 0 0 0 23.406-39.222v-12.48L47 18.8Z" fill="#00669A"></path><g filter="url(#security-privacy_svg__a)"><rect x="79.9" y="79.898" width="32.9" height="32.9" rx="16.45" transform="rotate(-180 79.9 79.898)" fill="url(#security-privacy_svg__b)"></rect><path fill="#fff" d="M62.04 70.038V52.638h2.368v17.401zM62.04 74.271v-2.35h2.35v2.35z"></path></g><defs><linearGradient id="security-privacy_svg__b" x1="165.075" y1="123.559" x2="44.971" y2="66.371" gradientUnits="userSpaceOnUse"><stop offset="0.316" stop-color="#00669A" stop-opacity="0.18"></stop><stop offset="0.752" stop-color="#80FFC9"></stop></linearGradient><filter id="security-privacy_svg__a" x="42.549" y="42.547" width="41.803" height="41.803" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.226"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_408_1788"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_408_1788" result="shape"></feBlend></filter></defs></svg>

                              <div style={{'width':"200px"}}>
                                  <h2>Security & Privacy</h2>
                                  <span style={{'fontSize':'12px'}} className='text-gray-400'>
                                      Data privacy SSO, and more
                                  </span>
                              </div>

                          </div>


                      </div>

                      </div>

                      </div>
                    )}
                  </li>
                  
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <ul className='flex justify-between gap-5 items-center'>
                  <li className='hidden cursor-pointer lg:block lg:text-black'>Book a Demo</li>
                  <li><button className='hidden cursor-pointer lg:block lg:bg-white lg:px-5 lg:py-3 rounded-full font-semibold'>Login</button></li>
                  <li><button className='bg-black text-white px-5 py-3 rounded-full font-semibold'>Signup</button></li>
                  <li className='lg:hidden'>
                    <button type="button" className="cursor-pointer appearance-none transition group flex items-center justify-center" aria-label="hamburger" onClick={toggleMenu}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 h-12 w-12 p-2 sm:mr-5">
                        <path d="M2 16h20M2 12h20M2 8h20" stroke="#323232" strokeWidth="1.2" strokeLinecap="round"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {isMenuOpen && <Menu closeMenu={closeMenu} />}
          </div>


        </nav>


        <h1 className="text-center font-bold text-4xl lg:text-7xl mt-40 ">GREAT VIDEOS START WITH A PLAN</h1>
        <h2 className="text-center pt-4 pb-2 text-2xl font-light">Try VEED with our <a className="text-indigo-500 font-light underline">Free Plan</a></h2>
        <Cards/>

        {(!isMenuOpen)?<TrustedBy/>:<></>}

      </div>
    </>
  );
}
