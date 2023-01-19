import Image from 'next/image';
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext';
import Header from './Header';

import menu from "../public/images/menu.svg";
import close from "../public/images/cancle.svg";
import smallLogo from "../public/images/logo2.svg";

function DropDownMenu() {
    // const { setHomePageState } = useContext(AppContext);

    // useEffect(() => {
    //     setHomePageState(false);
    //   }, []);
    const { dropDown, openDropDown } = useContext(AppContext);

  return (
    <div className='w-screen h-screen fixed top-0 left-0 px-5 flex z-50 flex-col items-center justify-start md:hidden bg-GW-White'>
        
        
        <div className="w-full max-w-[1500px] top-0 border-t-2 border-GW-Black z-40 mt-10 ">
          <div className="flex justify-between pt-5">
            <Link href="/" legacyBehavior>
              <div onClick={openDropDown} className="w-20  md:w-24 cursor-pointer ">
                <Image src={smallLogo} alt="smallLogo"/>
              </div>
            </Link>
            <div className="">

              <ul className="hidden md:flex space-x-16">
                <li className="btn relative"><Link href="#" legacyBehavior>Work</Link></li>
                <li className="btn relative"><Link href="/studio" legacyBehavior>Studio</Link></li>
                <li className="btn relative"><Link href="/contact" legacyBehavior>Contact</Link></li>
              </ul>

              <div onClick={openDropDown} className="flex md:hidden h-9 w-9">
              {dropDown ? (
                <Image 
                src={close}
                alt="close"
                layout="fixed"
                />
                ):(
                <Image 
                src={menu}
                alt="menu"
                layout="fixed"
              />
              )}
              </div>

            </div>
          </div>
        </div>



        <ul className='flex-1 flex justify-end flex-col w-full h-full'>
            <Link onClick={openDropDown} href="#" className='py-16 font-normal md:text-7xl text-5xl border-b-2 text-GW-Red flex justify-between items-end'>
                WORK 
                <span className='text-2xl text-GW-Red'>
                    /01
                </span>
            </Link>
            <Link onClick={openDropDown} href="/studio" className='py-16 font-normal md:text-7xl text-5xl border-b-2 text-GW-Red flex justify-between items-end'>
                STUDIO 
                <span className='text-2xl text-GW-Red'>
                    /02
                </span>
            </Link>
            <Link onClick={openDropDown} href="/contact" className='py-16 font-normal md:text-7xl text-5xl border-b-2 text-GW-Red flex justify-between items-end'>
                CONTACT 
                <span className='text-2xl text-GW-Red'>
                    /03
                </span>
            </Link>
            <li onClick={openDropDown} className='font-normal text-xl text-GW-Red flex justify-between mb-14 py-5'>
                Hey [at] GreatRWorks.com 
                <div className='text-xl text-GW-Red flex flex-1 justify-end space-x-4'>
                    <Link href="https://www.instagram.com/greatrworks">
                        <h1>IG</h1>
                    </Link>
                    <Link href="https://www.instagram.com/greatrworks">
                        <h1>LI</h1>
                    </Link>
                    <Link href="https://twitter.com/GreatrWorks">
                        <h1>TW</h1>
                    </Link>  
                </div>
            </li>
        </ul>
    </div>
  )
}

export default DropDownMenu