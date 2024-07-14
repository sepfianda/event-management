import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Badge } from '../ui/badge';

const HeroSection = () => {
  return (
    <div className="container px-0">
      <div className="relative w-full h-full">
        <div className="absolute -z-10 h-full w-full bg-[url('../../public/images/hero.jpg')] bg-cover bg-bottom md:block"></div>
        <div className=" text-left pt-28 px-10 font-extrabold">
          <div className="pb-7">
            <h1 className='text-white text-6xl pb-3'>Eventify</h1>
            <h3 className='text-white text-lg'>Let's Create Joyful Moments Together</h3>
          </div>
        </div>

        <div className="px-10 pt-5 gap-10 pb-96">
          <div className="pb-8">
            <label htmlFor="city" className="text-white font-bold w-full pb-5">
              Search your destination:
            </label>
            <div>
              <input
                type="text"
                placeholder="Enter name here..."
                className="md:w-1/4 w-full h-1/2 p-2 text-white rounded-md bg-[#747264]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="text-white font-bold w-full pb-5">
              Select your date:
            </label>
            <div>
              <input type="date" 
              className='md:w-1/4 w-full p-2 h-1/2 rounded-md bg-[#747264] text-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
