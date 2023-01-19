import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function WhatWeDo() {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-between md:flex-row flex-col w-full md:border-t-2 border-GW-Black text-2xl font-normal text-GW-Red py-5">
        <div className="text-GW-Gray md:border-0 border-b-2 md:w-auto w-full md:mb-0 mb-6 md:pb-0 pb-6 md:px-0 px-5">
          <h1>What We Do:</h1>
        </div>
        <div className="">
          <ul className="space-y-6 w-full">
            <li>Web/Mobile Development</li>
            <li>UI/UX Design</li>
            <li>Strategy</li>
          </ul>
        </div>
        <div className="md:mt-0 mt-6">
          <ul className="space-y-6 w-full">
            <li>Branding</li>
            <li>Consulting</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
    </div>
  )
}

export default WhatWeDo