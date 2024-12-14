import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='w-[1920px] h-auto bg-[#043873] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex flex-col items-center'>
      <div className='w-full flex items-center mb-[60px]'>
        <div className='w-[656px] h-[154px] flex flex-col gap-[24px] text-white'>
          <h2 className='font-inter font-bold text-[64px] leading-[77.45px] tracking-tight'>
            Get More Done with Whitespace
          </h2>
          <p className='font-serif font-normal text-[18px] leading-[30px] tracking-tight'>
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button className='w-[219px] h-[63px] py-[20px] rounded-lg bg-[#4F9CF9] text-black font-semibold'>
            Try Whitespace Free
          </button>
        </div>
        <div className='w-[824px] h-[549px] flex flex-col gap-[2px] bg-[#C4DEFD] ml-5'>
          
        </div>
      </div>
      <div className='w-full flex items-start mb-[60px]'>
        <div className='w-[672px] h-[288px] flex flex-col gap-[24px] text-white mr-10'>
          <h3 className='font-inter font-bold text-[32px] leading-[50px]'>
            Project Management
          </h3>
          <p className='font-inter font-normal text-[18px] leading-[30px] tracking-tight'>
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className='w-[201px] h-[63px] py-[20px] px-[40px] rounded-lg bg-[#4F9CF9] text-black font-semibold'>
            Get Started
          </button>
        </div>
        <div className='w-[748px] h-[547px] bg-[#C4DEFD]'>
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;





export const HeroSection2 = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[1480px] h-[661px] gap-[100px] mt-28 mb-10 flex'>
        <div className='box-border p-4 border-4 border-red-500'>
          <Image src="/WT image.png" alt="worktogether" width={710} height={661} className="object-cover" />
          
        </div>
        <div className=' pb-4 w-[670px] h-[294px] gap-[60px] flex flex-col justify-center box-border p-4 border-4 border-green-500 mt-32'>
          <h1 className='font-serif  text-4xl font-extrabold text-justify'>Work Together</h1>
          <p className='text-justify '>
            With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>
        </div>
      </div>
    </div>
  );
};


