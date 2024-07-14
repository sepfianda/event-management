import React from 'react';

const CityList = () => {
  return (
    <div className=" mt-10 mb-10 p-10">
      <div className="carousel mt-3 w-full gap-3 rounded-box ">
        <h3 className="pb-10">Catch all the events happening in your city!</h3>
        <div className="flex flex-wrap justify-center gap-3 md:mx-auto md:gap-10">
          <div className="w-[100px] sm:w-[125px] md:w-[150px]">
            <div className="carousel-item">
              <img src="/images/sby.png" className="rounded-md" />
            </div>
            <h3 className="text-center font-semibold">Surabaya</h3>
          </div>

          <div className="w-[100px] sm:w-[125px] md:w-[150px]">
            <div className="carousel-item">
              <img src="/images/ygy.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Yogyakarta</h1>
          </div>

          <div className="w-[100px] sm:w-[125px] md:w-[150px]">
            <div className="carousel-item">
              <img src="/images/bdg.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Bandung</h1>
          </div>

          <div className="w-[100px] sm:w-[125px] md:w-[150px]">
            <div className="carousel-item">
              <img src="/images/Balii.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Bali</h1>
          </div>

          <div className="w-[100px] sm:w-[125px] md:w-[150px]">
            <div className="carousel-item">
              <img src="/images/Jabodetabek.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Jakarta</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityList;
