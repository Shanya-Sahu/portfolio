import React from 'react';
import profile from "../assets/profile_img.jpg";

function sidebar() {
  return (
    <div>
      <aside className='fixed top-0 z-10 bg-white w-[10%] min-h-[100vh] border-r-4 border-[var(--pink)] flex justify-start items-center flex-col py-5'>
        <img src={profile} alt="profileimage" className='w-24 h-24 rounded-full object-cover' />
       
       {/* Tab Menu */}
       <div className="tabmenu py-10 w-full px-5">
        <div className=' w-full py-5 text-center border-b-[1px] border-gray-200 rounded-lg bg-white cursor-pointer transition-transform transform hover:bg-[#FFDEDE]'>
        <i className="fi fi-rr-poll-h text-2xl text-[var(--pink)]" ></i>
        <p className='text-sm'>About</p>
        </div>
        <div className=' w-full py-5 text-center border-b-[1px] border-gray-200 bg-white rounded-lg cursor-pointer hover:bg-[#CDF3F9]'>
        <i className="fi fi-rr-calendar-clock text-2xl text-[var(--pri-heading)]" ></i>
        <p className='text-sm'>Experience</p>

        </div>
        <div className=' w-full py-5 text-center border-b-[1px] border-gray-200 bg-white rounded-lg cursor-pointer hover:bg-[#FFEDCA]'>
        <i className="fi fi-rr-display-code text-2xl text-[var(--yellow)]" ></i>
        <p className='text-sm'>Skills</p>

        </div>
        <div className=' w-full py-5 text-center border-b-[1px] border-gray-200 bg-white rounded-lg cursor-pointer hover:bg-[#FFD4C7]'>
        <i className="fi fi-rr-briefcase text-2xl text-[var(--orange)]" ></i>
        <p className='text-sm'>Projects</p>


        </div>
        <div className=' w-full py-5 text-center border-b-[1px] border-gray-200 bg-white rounded-lg cursor-pointer hover:bg-[#0a57ca3d]'>
        <i className="fi fi-rr-phone-call text-2xl text-[var(--link)]" ></i>
        <p className='text-sm'>Contact</p>

        </div>
       
       {/* <i class="fi fi-rr-envelope-marker"></i> */}
      


       </div>
      </aside>
    </div>
  );
}

export default sidebar;
