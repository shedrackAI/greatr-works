import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext';
import { motion as m } from "framer-motion";
import loveToPartner from '../public/images/loveToPartnerBig.svg'
import Link from 'next/link';

function Contact() {
    const { setHomePageState } = useContext(AppContext);

    useEffect(() => {
        setHomePageState(false);
      }, []);
  return (
    <m.div className="w-full flex flex-col items-center">
        <m.div 
         initial={{ y: "-120%"}}
             animate={{ y: "0%", position: "relative"}}
             transition={{ delay: 1, duration: 1}}
             className="w-full flex-col h-full flex max-w-[1500px] mt-10"
        >
            <div className='w-full flex md:flex-row flex-col justify-between gap-10 font-clashGrotesk px-5 md:mt-24 mt-10'>

                <div>
                    <div className=''>
                        <Image 
                        src={loveToPartner}
                        alt="Lve to partner image"
                        />
                    </div>
                </div>

                {/* Show on mobile device */}
                <div className='md:mt-0 mt-14  md:hidden block'>
                    <p className='text-3xl'>
                        We are eager to learn about
                        your organisation and to help
                        you create powerful tools that
                        will propel forward and bulid
                        influence
                    </p>
                </div>

                <div className='md:mt-0 mt-14 md:block hidden'>
                    <p className='text-3xl'>
                        We are eager to learn about <br />
                        your organisation and to help <br />
                        you create powerful tools that <br />
                        will propel forward and bulid <br />
                        influence
                    </p>
                </div>

            </div>

            <div className='mt-[70px] md:mt-[180px] mb-10 flex flex-col items-center pb-20 px-5'>
                <div className='w-full h-[2px] my-5 md:mx-10 mx-0 bg-GW-Red' />
                <ul className='text-GW-Red flex w-full justify-between md:flex-row flex-col gap-8'>
                    <Link href="mailto:hey@greatrworks.com">
                        <h2 className='text-sm'>Work with us</h2>
                        <p className='text-2xl'>Hey [at] GreatRWorks.com </p>
                    </Link>
                    <Link href="mailto:hey@greatrworks.com">
                        <h2 className='text-sm'>Ask us questions</h2>
                        <p className='text-2xl'>Hey [at] GreatRWorks.com </p>
                    </Link>
                    <Link href="mailto:oga@greatrworks.com">
                        <h2 className='text-sm'>Join our team of freelancers</h2>
                        <p className='text-2xl'>oga [at] GreatRWorks.com </p>
                    </Link>
                </ul>
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
                <div className='max-w-[1500px] w-full flex items-end '>
                    <h1 className='md:text-[12rem] text-[4rem] font-medium text-GW-White mb-10'>
                        Contact.
                    </h1>
                </div>
            </m.div>
        </m.div>

    </m.div>
  )
}

export default Contact