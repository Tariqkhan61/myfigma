import React from 'react';

const Footer = () => {
  return (
    <footer className='w-[1920px] h-[461px] flex flex-col items-center justify-start pt-[140px] pr-[220px] pb-[32px] pl-[220px] bg-[#043873] text-white'>
      <div className='w-[1480px] h-[289px] flex justify-between gap-[100px]'>
        <div className='w-[295px] h-[169px] flex flex-col gap-[15px]'>
          <div className='flex-shrink-0'>
            <img src='/logo.png' alt='Logo' width={191} height={34} />
          </div >
          <p className='w-[240px] h-[120px] text-[18px] leading-[30px] tracking-custom-tigh '>Whitepace was created for the new ways we live and work, we make a better Workspace around the world</p>
        </div>
        <div className='w-[295px] h-[169px] flex flex-col gap-[15px]'>
          <h2 className='text-[22px] font-semibold'>Product</h2>
          <p className='w-[70px] h-[20px]'>Overview</p>
          <p className='w-[50px] h-[20px]'>Pricing</p>
          <p className='w-[177px] h-[20px]'>Cutomer Stories</p>
          
        </div>
        <div className='w-[295px] h-[130px] flex flex-col gap-[16px]'>
          <h2 className='text-[22px] font-semibold'>Resources</h2>
         <p className='w-[33px] h-[20px]'>Blog</p>
         <p className='w-[128px] h-[20px]'>Guides & tutorials</p>
         <p>Help center</p>
        </div>
        <div className='w-[295px] h-[130px] flex flex-col gap-[16px]'>
          <h2 className='text-[22px] font-semibold'>Support</h2>
          <ul className='flex flex-col gap-[16px]'>
            <li>FAQ</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      <div className='w-[169px] h-[20px] flex justify-between gap-[60px] mt-[100px]'>
        <a href="#" className='hover:underline'>@2021 Whitepace LLC.</a>
       
      </div>
    </footer>
  );
}

export default Footer;
