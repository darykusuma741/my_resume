import { MdWork } from 'react-icons/md';

export function AboutWorkExperience() {
  return (
    <>
      <div className='w-full bg-primary2 p-10 z-50'>
        <div className='flex justify-center mb-9 text-center items-center'>
          <MdWork className='text-4xl lg:text-6xl text-white mr-4' />
          <div>
            <h1 className='text-white text-3xl lg:text-5xl font-bold font-PalanquinDark'>
              Work <span className='text-secondary'>Experience</span>
            </h1>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
          <MyGrid
            title={'Fullstack Developer'}
            company={'PT Telekomunikasi Indonesia'}
            period={'Jan 2016 - Jan 2019'}
            address={'Jl. A. P. Pettarani No.2, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan'}
            logo={[<img src='logo/laravel.png' className='h-16' />, <img src='logo/expressjs.png' className='h-14 ml-3 mr-6' />]}
          />
          <MyGrid
            title={'Mobile Project Inspection Tower'}
            company={'PT PLN PERSERO'}
            period={'Oct 2019 - Jan 2020'}
            address={'Gandul, Kec. Cinere, Kota Depok, Jawa Barat'}
            logo={[<img src='logo/java-icon.png' className='w-10 ml-3' />, <img src='logo/oracle.png' className='h-9 mt-1 ml-4' />]}
          />
          <MyGrid
            title={'Mobile Engineer (Flutter)'}
            company={'PT Majoo Teknologi Indonesia'}
            period={'Jan 2020 - MAY 2020'}
            address={'Jl. Kahuripan No.5, Kauman, Kec. Klojen, Kota Malang'}
            logo={[<img src='logo/flutter.png' className='h-10 mt-2' />]}
          />
        </div>
      </div>
    </>
  );
}

interface MyGridI {
  title: string;
  company: string;
  address: string;
  period: string;
  logo: React.ReactNode[];
}

function MyGrid({ title, company, address, logo, period }: MyGridI) {
  return (
    <div className='text-white flex-col flex rounded-lg items-center justify-center backdrop-blur-sm bg-white/10 p-8'>
      <div className='text-center'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <h2 className='mt-1 font-bold text-secondary'>{company}</h2>
        <h3 className='mt-1 text-xs'>{address}</h3>
        <h4 className='mt-1 text-xs'>{period}</h4>
        <div className='flex mt-3 justify-center items-center gap-2'>
          {logo.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
