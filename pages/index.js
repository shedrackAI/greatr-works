import Head from "next/head";
import { motion as m } from "framer-motion";
import Aos from 'aos'
import 'aos/dist/aos.css'

import smallLogo from "../public/images/logo2.svg";


import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

import WhatWeDo from "../components/WhatWeDo";
import { container, item } from '../animation'
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { setHomePageState } = useContext(AppContext);

  useEffect(() => {
    setHomePageState(true);
    Aos.init({  });
  }, []);

  return (
    <>
    {/* <SmoothScrollProvider options={{ smooth: true }}>  */}
      <Head>
        <title>Greater Works</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <m.main className="relative md:-top-[113px] -top-[105px] w-full font-clashGrotesk overflow-x-hidden">
        <m.div
         initial={{ y: "-120%"}}
         animate={{ y: "0%", position: "relative"}}
         transition={{ delay: 1, duration: 0.5}}
         className="w-full"
        >

          <section className="w-full h-screen backgroundImage flex justify-center px-5">
            <div className="w-full max-w-[1500px]">
              <m.div variants={container} initial="hidden" animate="show" className="h-full lg:pt-16 pt-12 mt-[229px] md:mt-[299px]">

                  <p className="text-left text-GW-Red font-normal lg:text-4xl text-2xl min-w-[300px] overflow-hidden">
                    <m.h1 variants={item}>We partner with ambitious</m.h1> 
                  </p>
                  <p className="text-left text-GW-Red font-normal lg:text-4xl text-2xl min-w-[300px] overflow-hidden">
                    <m.h1 variants={item}>enterpreneurs and founders to</m.h1>
                  </p>
                  <p className="text-left text-GW-Red font-normal lg:text-4xl text-2xl min-w-[300px] overflow-hidden">
                    <m.h1 variants={item}>help them go from ideas to mvp</m.h1>
                  </p>

                  <div className="overflow-hidden">
                      <button class="c-button c-button--gooey md:text-4xl text-2xl"> 
                      <Link href="/contact" legacyBehavior>
                        Work with us
                      </Link>
                        <div class="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                      </button>
                      <svg  version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <filter id="goo">
                            <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
                            <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
                            <feBlend in2="goo" in="SourceGraphic"></feBlend>
                          </filter>
                        </defs>
                      </svg>
                  </div>
              </m.div>
            </div>

            
          </section>
          <section className="w-full h-screen bg-GW-White flex justify-center items-center px-5">
            <div className="w-full flex flex-col items-center  max-w-[1500px]">
              <p data-aos="zoom-in-down" data-aos-duration="1300" className="md:text-4xl text-2xl font-normal text-GW-Red py-20">
                GreatR Works was created out of the understanding of how hard it is to
                find the right team or partner to bulid the initial ideal of a product. There
                are a lot founders without teachnical skills, our job help them in that
                area.
              </p>
              <WhatWeDo />
            </div>
          </section>
        </m.div>

       
            <m.div 
             initial={{ y: "-100%", position: "absolute"}}
             animate={{ y: ["-100%", "0%", "0%", "0%", "100%", "130%"] }}
             transition={{ duration: 2 }}
             className='w-auto h-auto relative top-0 left-0 z-50'
            >
                <m.div
                 initial={{ display: "flex" }}
                 animate={{ display: "none" }}
                 transition={{ delay: 2  }}
                 className='w-screen h-screen bg-GW-Black flex justify-center items-center'
                >
                  <Image src={smallLogo} alt="Logo"/>
                </m.div>
            </m.div>

      </m.main>
    {/* </SmoothScrollProvider> */}
    </>
  );
}