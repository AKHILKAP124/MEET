"use client"
import MeetingTypeList from '@/components/MeetingTypeList';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home = () => {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  function getDateTime() {
    const now = new Date();
    setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    setDate((new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now))
  }

  useEffect(() => {
    getDateTime()
  }, [])

  setInterval(() => {
    getDateTime()
  }, 10000);


  return (
    <section className=' text-xl text-white '>

      <div className='w-full h-full flex flex-col gap-5 flex-wrap'>
        {/* Home card */}
        <div className="w-full h-[19rem] relative">
          <Image
            src="/images/hero-background.png"
            width={1000}
            height={1000}
            quality={100}
            alt='hero-bg'
            className='w-full h-full object-cover object-left rounded-3xl' />
          <div className=" absolute bottom-9 left-6">
            <p className='text-5xl font-extrabold lg:text-7xl'>{time}</p>
            <p className='mt-2 text-lg font-semibold text-slate-300 lg:text-2xl'>{date}</p>
          </div>
        </div>

        <MeetingTypeList />
      </div>
    </section>
  );
};

export default Home;
