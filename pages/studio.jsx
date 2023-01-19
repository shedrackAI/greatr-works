import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import { motion as m } from "framer-motion";
import Aos from 'aos'
import 'aos/dist/aos.css'

// component
import WhatWeDo from '../components/WhatWeDo';

// context
import { AppContext } from '../contexts/AppContext';

// animation 
import { studioTextContainer, studioText } from '../animation'

// images
import studio from '../public/images/studio.svg'
import loveToPartner from '../public/images/loveToPartner.svg'

function Studio() {
    
    const { setHomePageState } = useContext(AppContext);

    useEffect(() => {
        setHomePageState(false);
        Aos.init({ duration: 2000 })
      }, []);

  return (
        <m.section className="w-full flex flex-col items-center">

            <m.div 
             initial={{ y: "-120%"}}
             animate={{ y: "0%", position: "relative"}}
             transition={{ delay: 1, duration: 1}}
             className="w-full flex-col h-full flex max-w-[1500px] px-5"
            >
                <div className='w-full flex md:flex-row flex-col'>

                    <m.div className='flex-1 md:h-[480px] h-auto flex md:mt-0 mt-20 relative w-full items-center overflow-x-hidden'>
                        <div>
                            <div className='md:hidden block'>
                                <Image
                                src={studio}
                                alt="studio text image"
                                />
                            </div>

                            <m.div className='md:flex hidden h-full items-start justify-center text-[20rem] text-GW-Black' variants={studioTextContainer} initial="hidden" animate="show">
                                <m.h1 className='studio_animation_text' variants={studioText}>S</m.h1>
                                <m.h1 className='studio_animation_text' variants={studioText}>t</m.h1>
                                <m.h1 className='studio_animation_text' variants={studioText}>u</m.h1>
                                <m.h1 className='studio_animation_text' variants={studioText}>d</m.h1>
                                <m.h1 className='studio_animation_text' variants={studioText}>i</m.h1>
                                <m.h1 className='studio_animation_text' variants={studioText}>o</m.h1>
                            </m.div>

                        </div>
                        <m.div 
                        inherit={{ left: "-20%"}} 
                        animate={{ left: "100%"}}
                        transition={{ delay: 1.2, duration: 2}}
                        className='w-[50px] h-[50px] border-2 border-GW-Red rounded-full absolute bottom-20 left-0 md:flex hidden'
                        >
                        </m.div>
                    </m.div>

                    <div className='flex justify-start md:mt-40 mt-20 overflow-hidden'>

                        {/* Show on mobile phone */}
                        <div className='md:hidden flex text-xl text-GW-Red space-y-5 mt-7 flex-col items-start'>
                            <p className='text-3xl'>
                                A bunch of super talented <br /> multidisciplinary ceatives <br /> working
                                to creating exceptional <br /> solution for businesses
                            </p>

                            <div className="rounded-full text-GW-Red font-normal border-2 border-GW-Red py-1 px-3 lg:text-3xl text-2xl w-auto">
                                <Link  href="/contact">
                                    Work with us
                                </Link>
                            </div>
                        </div>

                        <m.div 
                        className='text-xl text-GW-Red space-y-5 mt-7 flex-col items-start md:flex hidden'
                        initial={{ x: "-200%" }}
                        animate={{ x: "0%"}}
                        transition={{ delay: 2, duration: 1 }}
                        >
                            <p className='text-3xl'>
                                A bunch of super talented <br /> multidisciplinary ceatives <br /> working
                                to creating exceptional <br /> solution for businesses
                            </p>

                            <div className="rounded-full text-GW-Red font-normal border-2 border-GW-Red py-1 px-3 lg:text-3xl text-2xl w-auto">
                                <Link  href="/contact">
                                    Work with us
                                </Link>
                            </div>
                        </m.div>
                    </div>
                </div>

                <div className='w-full md:py-0 mt-20'>
                    <h1 className='text-3xl'>
                        Whatever we do, we work <br />
                        really hard and smart to make <br />
                        sure its done well
                    </h1>
                </div>

                <div className='w-full mt-5'>
                    <WhatWeDo />
                </div>

                <div className='flex justify-between md:flex-row flex-col pt-20 pb-28 md:mt-28 mt-14 gap-10'>
                    <div>
                        <div className=''>
                            <Image 
                            src={loveToPartner}
                            alt="Lve to partner image"
                            />
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <p className='text-3xl md:mt-0 mt-8 md:block hidden'>
                            We are eager to learn about <br />
                            your organisation and to help <br />
                            you create powerful tools that <br />
                            will propel forward and bulid <br />
                            influence
                        </p>

                        {/* Show on mobile phone */}
                        <p className='text-3xl md:mt-0 mt-10 md:hidden block'>
                            We are eager to learn about
                            your organisation and to help
                            you create powerful tools that
                            will propel forward and bulid
                            influence
                        </p>
                        <Link href="/contact" legacyBehavior>
                            <button className='border-2 border-GW-Red py-1 px-2 text-2xl rounded-full mt-5'>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </m.div>


            <m.div 
             initial={{ y: "-100%", position: "absolute"}}
             animate={{ y: ["-100%", "0%", "0%", "0%", "100%", "200%"] }}
             transition={{ duration: 2 }}
             className='w-auto h-auto relative top-0 left-0 z-50'
            >
                <m.div
                 initial={{ display: "flex" }}
                 animate={{ display: "none" }}
                 transition={{ delay: 2  }}
                 className='w-screen h-screen bg-GW-Black flex justify-center'
                >
                    <div className='max-w-[1500px] w-full flex items-end'>
                        <h1 className='md:text-[12rem] text-[4rem] font-medium text-GW-White mb-10'>
                            Studio.
                        </h1>
                    </div>
                </m.div>
            </m.div>
        </m.section>
  )
}

export default Studio