import { BiSolidGraduation } from 'react-icons/bi';

export function AboutEducation() {
  return (
    <>
      <div className='w-full bg-primary p-10 z-50'>
        <div className='flex lg:justify-start justify-center mb-9 text-center items-center'>
          <BiSolidGraduation className='text-5xl lg:text-6xl text-white mr-4' />
          <div>
            <h1 className='text-white text-xl lg:text-5xl font-bold font-PalanquinDark'>Education</h1>
          </div>
        </div>
        <div className='mt-5'>
          <div className='rounded-lg font-PalanquinDark w-full backdrop-blur-sm bg-white/10 text-white p-6'>
            <h1 className='font-bold text-2xl mb-2'>
              Informatics Management, <span className='text-secondary'>Associate Degree</span>
            </h1>
            <h2 className='text-xl mb-2'>College of Information and Computer Management Kharisma</h2>
            <h3 className='font-sans'>Makassar, South Sulawesi, Indonesia</h3>
          </div>
        </div>
        <div className='mt-5'>
          <div className='rounded-lg font-PalanquinDark w-full backdrop-blur-sm bg-white/10 text-white p-6'>
            <h1 className='font-bold text-2xl mb-2'>
              IPA, <span className='text-secondary'>Senior High School</span>
            </h1>
            <h2 className='text-xl mb-2'>Madrasah Aliyah Negeri 2 Model</h2>
            <h3 className='font-sans'>Makassar, South Sulawesi, Indonesia</h3>
          </div>
        </div>
        <div className='mt-5'>
          <div className='rounded-lg font-PalanquinDark w-full backdrop-blur-sm bg-white/10 text-white p-6'>
            <h1 className='font-bold text-2xl mb-2'>
              Without Title, <span className='text-secondary'>Middle School</span>
            </h1>
            <h2 className='text-xl mb-2'>State Junior High School 1</h2>
            <h3 className='font-sans'>Makassar, South Sulawesi, Indonesia</h3>
          </div>
        </div>
      </div>
    </>
  );
}
