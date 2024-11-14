import { ArrowDownTrayIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { HomeHeaderPhoto } from './home.header.photo';
import { Link } from 'react-router-dom';

export function HomeHeader() {
  return (
    <>
      <div className='flex w-full max-w-4xl mb-0 md:mb-12'>
        <HomeHeaderPhoto />
        <div className='flex-1 text-white pr-8 flex flex-col justify-center'>
          <h2 className='text-2xl mb-4'>
            Fullstack <span className='text-secondary'>Developer</span>
          </h2>

          <h1 className='font-PalanquinDark text-4xl mb-4'>
            <span className='font-AlumniSansPinstripe'>Hello,</span> I'm Dary Kusuma!
          </h1>
          <p className='font-thin text-sm mt-2 leading-relaxed'>
            Hello, I’m Dary Kusuma Hardian, a Fullstack Developer with experience in building end-to-end web and mobile applications. I possess the ability to develop applications from the front-end, focusing on intuitive user experiences, to the
            back-end, managing servers, databases, and application logic efficiently.
          </p>
          <div className='flex mt-2'>
            <button className='border mt-4 border-white text-white bg-transparent py-2 px-4 rounded-md hover:bg-white hover:text-black transition-all flex items-center'>
              <ArrowDownTrayIcon className='w-5 mr-2' />
              Download CV
            </button>
            <Link to={'/about'} className='border mt-4 border-secondary hover:border-white flex items-center text-white bg-secondary py-2 px-4 rounded-md hover:bg-white hover:text-black transition-all ml-3'>
              <UserCircleIcon className='w-5 mr-2' />
              About Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
