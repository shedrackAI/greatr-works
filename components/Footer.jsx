import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import work from '../public/images/work.svg'

function Footer() {
  return (
    <section className='w-full h-screen flex justify-center bg-GW-Gray pt-20'>
        <div className="w-full flex-col h-full flex justify-end max-w-[1500px] px-5">
            <div className='w-full flex md:flex-row flex-col-reverse'>

                <div className='flex-1 pt-28 flex'>

                    {/* { Only show on mobile devices} */}
                    <div className='xs:text-[1rem] text-[0.7rem] text-GW-Red space-y-5 py-10'>
                        <div className='w-full space-x-7 md:hidden flex'>
                            <Link href="#" legacyBehavior>DRIBBLE</Link>
                            <Link href="https://www.behance.net/greatrworks" legacyBehavior>BEHANCE</Link>
                            <Link href="https://www.instagram.com/greatrworks" legacyBehavior>INSTAGRAM</Link>
                        </div>
                        <div className='w-full space-x-7 md:hidden flex'>
                            <Link href="https://twitter.com/GreatrWorks" legacyBehavior>TWITTER</Link>
                            <Link href="#" legacyBehavior>LINKEDN</Link>
                            <Link href="#" legacyBehavior>MEDIUM</Link>
                        </div>
                    </div>

                    <div className='text-GW-Red space-y-5 md:flex flex-col hidden'>
                        <Link href="mailto:hey@greatrworks.com">
                                <h2 className='text-sm'>Email</h2>
                                <p className='text-2xl'>Hey [at] GreatRWorks.com</p>
                        </Link>
                        <Link href="tel:+3123-123-1234">
                                <h2 className='text-sm'>Phone</h2>
                                <p className='text-2xl'>+234 123 123 1234</p>
                        </Link>
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='py-10 text-xl text-GW-Red'>Got A Project?</h1>
                    <div className='mb-5 md:w-[400px] w-[200px]'>
                        <Image 
                         src={work}
                         alt="lets get to work"
                        />
                    </div>

                    <div className='flex flex-col w-full text-xl text-GW-Red space-y-5 md:py-20 py-10'>
                        <div className='w-full space-x-7 md:flex hidden'>
                            <Link href="#" legacyBehavior>DRIBBLE</Link>
                            <Link href="https://www.behance.net/greatrworks" legacyBehavior>BEHANCE</Link>
                            <Link href="https://www.instagram.com/greatrworks" legacyBehavior>INSTAGRAM</Link>
                        </div>
                        <div className='w-full space-x-7 md:flex hidden'>
                            <Link href="https://twitter.com/GreatrWorks" legacyBehavior>TWITTER</Link>
                            <Link href="#" legacyBehavior>LINKEDN</Link>
                            <Link href="#" legacyBehavior>MEDIUM</Link>
                        </div>

                        {/* { Only show on mobile devices} */}
                        <div className='text-GW-Red space-y-5 md:hidden flex flex-col '>
                            <Link href="mailto:greatrworks@gmail.com">
                                    <h2 className='text-sm'>Email</h2>
                                    <p className='text-2xl'>Hey [at] GreatRWorks.com</p>
                            </Link>
                            <Link href="tel:+3123-123-1234">
                                    <h2 className='text-sm'>Phone</h2>
                                    <p className='text-2xl'>+234 123 123 1234</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full border-t-2 border-GW-Black md:text-center text-left py-5 md:text-[15px] text-[13px] '>
                <h1>© 2023 GraetR Works by INNVESIO TECHNOLOGIES</h1>
            </div>
        </div>
    </section>
  )
}

export default Footer