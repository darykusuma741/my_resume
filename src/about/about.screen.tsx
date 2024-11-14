import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TemplateSocialMedia } from '../template/template.social_media';
import { AboutEducation } from './about.education';
import { AboutWorkExperience } from './about.work_experience';
import { AboutSkills } from './about.skills';

export function AboutScreen() {
  return (
    <>
      <motion.div className='page about' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }}>
        <div className='w-screen flex flex-col'>
          <div className='px-10 pt-10'>
            <div className='text-white text-sm mb-8'>
              <Link to='/' className='text-blue-500 hover:underline'>
                Home
              </Link>
              <span> / About Me</span>
            </div>

            <div className='flex flex-1 items-center xl:pt-5 pt-0 mb-9 xl:mb-0'>
              <div className='flex-1 hidden xl:flex justify-center'>
                <motion.div className='page about' initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: 0 }} transition={{ duration: 1 }}>
                  <img src='images/fotoku4.png' alt='Foto Dary Kusuma' className='w-[30rem]  object-cover' />
                </motion.div>
              </div>

              <div className='flex-1 flex flex-col justify-center'>
                <motion.div className='page about' initial={{ x: 100 }} animate={{ x: 0 }} exit={{ x: 0 }} transition={{ duration: 1 }}>
                  <h1 className='text-white text-5xl font-bold font-PalanquinDark mb-4'>
                    About <span className='text-secondary'>Me</span>
                  </h1>
                  <h2 className='text-white text-sm font-thin mb-4'>01 January 1995 | Temanggung, Central Java | Indonesia</h2>
                  <p className='text-white font-light text-sm leading-relaxed'>
                    Hello, my name is <span className='font-bold text-secondary'>Dary Kusuma Hardian</span>, and I am a passionate Fullstack Developer. I specialize in building comprehensive digital solutions, managing both the frontend and backend
                    aspects of web and mobile applications. With a keen eye for detail and a problem-solving mindset, I thrive on crafting seamless user experiences and robust system architectures.
                  </p>
                  <p className='text-white font-light text-sm leading-relaxed mt-4'>
                    I have always been fascinated by technology and its ability to transform ideas into reality. This passion drives me to stay updated with the latest tools and trends in the tech world, ensuring that every project I work on is
                    innovative and future-proof.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <AboutWorkExperience />
          <AboutSkills />
          <AboutEducation />
          <TemplateSocialMedia />
        </div>
      </motion.div>
    </>
  );
}
