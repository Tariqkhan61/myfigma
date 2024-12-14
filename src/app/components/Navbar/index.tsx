import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-[1920px] h-[92px] flex items-center justify-between pt-4 pr-[220px] pb-4 pl-[220px] bg-[#043873]'>
      <div className='flex items-center'>
        <div className='w-[191px] h-[34px]'>
          <Image src="/logo.png" alt='logo' width={191} height={34} />
        </div>
      </div>
      <div className='flex items-center space-x-[60px] ml-auto'>
        <ul className='w-[549px] h-[23px] flex items-center gap-[32px] text-[18px] font-semibold leading-[23px] text-white'>
          <li className='w-[78px] h-[23px] '>Products</li>
          <li className='w-[78px] h-[23px]'>Solutions</li>
          <li className='w-[89px] h-[23px]'>Resources</li>
          <li className='w-[58px] h-[23px]'>Pricing</li>
        </ul>
        <button className='w-[126px] h-[60px] py-[16px] px-[40px] rounded-lg bg-[#FFE492]'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
