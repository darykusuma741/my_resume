import { Progress } from '@material-tailwind/react';
import { GiSkills } from 'react-icons/gi';

export function AboutSkills() {
  return (
    <>
      <div className='w-full bg-primary p-10 z-50'>
        <div className='flex justify-center mb-9 text-center items-center'>
          <GiSkills className='text-4xl lg:text-6xl text-white mr-4' />
          <div>
            <h1 className='text-white text-3xl lg:text-5xl font-bold font-PalanquinDark'>Skills</h1>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
          <MyGrid
            title={'Backend'}
            prg={[
              { prg: 80, title: 'ExpressJS' },
              { prg: 90, title: 'Prisma' },
              { prg: 40, title: 'NestJS' },
              { prg: 70, title: 'JWT' },
              { prg: 50, title: 'Socket IO' },
            ]}
          />
          <MyGrid
            title={'Frontend'}
            prg={[
              { prg: 100, title: 'Flutter' },
              { prg: 80, title: 'Getx' },
              { prg: 70, title: 'ReactJS' },
              { prg: 60, title: 'Redux' },
              { prg: 50, title: 'Socket IO' },
            ]}
          />
          <MyGrid
            title={'Other'}
            prg={[
              { prg: 50, title: 'Docker' },
              { prg: 80, title: 'Github' },
              { prg: 80, title: 'Gitlab' },
              { prg: 60, title: 'Trello' },
              { prg: 50, title: 'Server' },
            ]}
          />
        </div>
      </div>
    </>
  );
}

interface MyGridI {
  title: string;
  prg: MyGridIP[];
}
interface MyGridIP {
  title: string;
  prg: number;
}

function MyGrid({ title, prg }: MyGridI) {
  return (
    <div className='text-white flex-col flex rounded-lg items-center justify-center backdrop-blur-sm bg-white/10 p-8'>
      <div className='text-center'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <h2 className='mt-1 font-bold text-secondary'>That I use</h2>
      </div>
      <div className='flex w-full flex-col gap-4 mt-2'>
        {prg.map((e, i) => (
          <Prg title={e.title} prg={e.prg} key={i} />
        ))}
      </div>
    </div>
  );
}

function Prg({ title, prg }: MyGridIP) {
  return (
    <div className='flex w-full gap-2 justify-center items-center'>
      <div className='w-36'>
        <h1>{title}</h1>
      </div>
      <Progress value={prg} className='w-full' color={prg >= 80 ? 'green' : prg >= 60 ? 'blue' : 'gray'} size={'lg'} label='' placeholder={'asdasd'} onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} />
    </div>
  );
}
