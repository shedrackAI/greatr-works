import { AnimatePresence } from 'framer-motion'
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { motion as m } from "framer-motion";

import smallLogo from "../public/images/logo2.svg";
import Layout from '../components/Layout'
import { AppProvider } from '../contexts/AppContext'
import '../styles/globals.css'
import Image from 'next/image';

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <AnimatePresence>
      <AppProvider>
        <Layout>
          {/* {!loading ? ( */}
            <Component key={router.pathName} {...pageProps} />
          {/* ) : ( */}
            {/* <m.div initial={{x: 0}} animate={{x: 0}} exit={{ opacity:  0, transition:{duration: 1} }} className='w-full h-full absolute top-0 z-50 bg-GW-Black flex justify-center items-center '>
               <div className="w-20  md:w-24 cursor-pointer">
                <Image src={smallLogo} alt="smallLogo"/>
               </div>
            </m.div>
          )} */}
        </Layout>
      </AppProvider>
    </AnimatePresence>
  ) 
}
