import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function TemplateSocialMedia() {
  return (
    <div className='fixed top-[40%] transform -translate-y-1/2 z-10 left-10 flex-col space-y-4 hidden md:flex'>
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
  );
}
