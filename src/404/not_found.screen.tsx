import { Link } from 'react-router-dom';

export function NotFoundScreen() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='text-white items-center flex-col justify-center content-center'>
        <h1 className='font-AlumniSansPinstripe text-center sm:text-6xl text-4xl'>
          <span className='font-AlumniSansPinstripe'>SORRY,</span> PAGE NOT FOUND
        </h1>
        <div className='w-full items-center flex origin-center justify-center'>
          <Link to={'/'} className='border mt-4 border-white text-white bg-transparent py-2 px-4 rounded-md hover:bg-white hover:text-black transition-all'>
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
}
