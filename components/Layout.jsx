import React, { useContext, useEffect, useState, useRef } from 'react'
import { motion as m } from "framer-motion";


import Header from './Header'
import logo from "../public/images/logo.svg";
import Image from 'next/image';
import Footer from './Footer';
import { AppContext } from '../contexts/AppContext';



function Layout({children}) {  
//   // state for mouse position
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   // Set cursor variant to change color on hover text
//   const [cursorVariant, setCursorVariant] = useState("default");

//   // Variant animation
//   const variants = {
//     default: {
//       x: mousePosition.x - 8,
//       y: mousePosition.y - 8,
//       mixBlendMode: "difference",
//     },   
//  };

  const { homePage } = useContext(AppContext);

  return (
      <div className='relative w-full font-clashGrotesk'>
        {homePage ? (
            <div className='flex justify-center w-full overflow-hidden px-5 z-30 absolute'>
                <m.div 
                initial={{ y: "100%"}}
                animate={{ y: 0}}
                transition={{ duration: 0.5, delay: 0.20, ease: "easeIn"}}
                className='flex justify-center w-full mt-14 z-30'
                >
                  <Image 
                  src={logo}
                  alt="logo"
                  />
                </m.div>
              </div>
          ): (
            <div className='px-5 sticky top-0 z-30'>
              <Header />
            </div>
        )}

        {homePage && (
          <div className='px-5 sticky -top-40 z-30 home_page_nav_container'>
            <div className='relative top-40 home_page_nav'>
              <Header />
            </div>
          </div>
        )}
          {/* <m.div
          variants={variants}
          animate="default"
          className="bg-GW-Black h-11 w-11 rounded-full z-50 fixed left-0 top-0"
        /> */}
          {children}
        
          <Footer />
      </div>
  )
}

export default Layout