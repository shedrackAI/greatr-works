/** @format */

import Link from "next/link";
import Image from "next/legacy/image";
import React, { useContext, useState } from "react";
import { motion as m } from "framer-motion";

import menu from "../public/images/menu.svg";
import close from "../public/images/cancle.svg";
import smallLogo from "../public/images/logo2.svg";

import DropDownMenu from "./DropDownMenu";
import { AppContext } from "../contexts/AppContext";


function Header() {
  const { dropDown, openDropDown } = useContext(AppContext);

  return (
    <div data-scroll-section className="w-full font-clashGrotesk sticky top-0  z-30 flex flex-col items-center">
      {dropDown ? (
        <DropDownMenu />
      ) : (
        <div className="w-full max-w-[1500px] top-0 border-t-2 border-GW-Black z-40 mt-10 ">
          <div className="flex justify-between pt-5">
            <Link href="/" legacyBehavior>
              <div className="w-20  md:w-24 cursor-pointer">
                <Image src={smallLogo} alt="logo"/>
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
      )}
    </div>
  );
}

export default Header;
