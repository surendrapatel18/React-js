import React from 'react';
import europeanUnion from '../asset/european union.png';
import onRamp from '../asset/Group 1000002391.png';
import digitalAsset from '../asset/Group 1000002390.png';
import offRamp from '../asset/Group 1000002389.png';
import shiedIcon from '../asset/Shield Done.svg';
import speedIcon from '../asset/speed-icon.png';
import firstArrow from '../asset/first_arrow.png';
import digitalInternet from '../asset/digital_internet.png';
import secondArrow from '../asset/second_arrow.png';

const Transfer = () => {
  return (
    <>
      <div className="w-full px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-customorange text-[22px] font-semibold text-center pt-12">
            Blockchain powered
          </div>
          <div className="text-darkBlue text-3xl font-extrabold text-center py-4">
            Secured, Fast, FREE transfer!
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <img src={europeanUnion} alt="European Union" className="mx-auto" />
              <img src={onRamp} alt="On Ramp" className="mx-auto w-full my-4" />
              <div className="text-darkBlue text-xl font-semibold">
                On-Ramp
              </div>
              <div className="flex justify-center py-4">
                <div className="flex items-center justify-center gap-4 bg-white border-2 border-[#FFDDCE] rounded-full p-2 max-w-[190px]">
                  <div className="flex items-center justify-center w-[37px] h-[37px] border-2 border-customorange rounded-full text-darkBlue text-[22px] font-bold">
                    $
                  </div>
                  <div className="flex items-center justify-center w-[37px] h-[37px] border-2 border-customorange rounded-full text-darkBlue text-[22px] font-bold">
                    &euro;
                  </div>
                  <div className="flex items-center justify-center w-[37px] h-[37px] border-2 border-customorange rounded-full text-darkBlue text-[22px] font-bold">
                    &delta;
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className='flex justify-center'>
              <img src={firstArrow} alt="Arrow" className="lg:hidden block" />
              </div>
              
              <img src={digitalInternet} alt="Digital" className="lg:hidden block" />
              
              <img 
             alt="Digital Asset" 
              className="mx-auto w-full my-4 block rotate-90 sm:rotate-0 hidden lg:block hidden" 
              src={digitalAsset} 
             />


              <div className="text-darkBlue text-xl font-semibold pt-3">
                Digital Asset
              </div>
              <div className="flex justify-center py-4">
                <div className="flex items-center justify-center gap-4 bg-white border-2 border-[#FFDDCE] rounded-full p-2 max-w-[244px]">
                  <img src={shiedIcon} alt="Shield" className="" />
                  <img src={speedIcon} alt="Speed Icon" className="" />
                  <div className="text-darkBlue text-[22px] font-bold">
                    0% fees
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
              <img src={secondArrow} alt="Arrow" className="lg:hidden block" />
              </div>
            </div>

            <div className="text-center">
              <img src={offRamp} alt="Off Ramp" className="mx-auto w-full my-4" />
              <div className="text-darkBlue text-xl font-semibold">
                Off-Ramp
                <span className="text-customorange text-lg pl-2">
                  More soon
                </span>
              </div>
              <div className="flex justify-center py-4">
                <div className="flex items-center justify-center gap-4 bg-white border-2 border-[#FFDDCE] rounded-full p-2 max-w-[190px]">
                  <div className="text-darkBlue text-[22px] font-bold">
                    XAF
                  </div>
                  <div className="w-0.5 h-8 bg-customgray"></div>
                  <div className="text-darkBlue text-[22px] font-bold">
                    &euro;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
