import { HomeHeader } from './home.header';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function HomeScreen() {
  return (
    <>
      <motion.div className='page home' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <div className='min-h-screen bg-primary flex items-center justify-center md:px-10 px-6'>
          <HomeHeader />

          <motion.div className='page home' initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='fixed top-1/2 transform -translate-y-1/2 z-10 flex-col space-y-4 hidden md:flex'>
              <button onClick={() => window.open('https://www.instagram.com/dary.kusuma/', '_blank')}>
                <FaInstagram className='w-6 h-6 text-white' />
              </button>
              <button onClick={() => window.open('https://www.linkedin.com/in/dary-kusuma-hardian-87a314310/', '_blank')}>
                <FaLinkedin className='w-6 h-6 text-white' />
              </button>
              <button onClick={() => window.open('https://wa.me/6288242286199', '_blank')}>
                <FaWhatsapp className='w-6 h-6 text-white' />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
