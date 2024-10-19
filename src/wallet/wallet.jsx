import React from 'react';
import walletImage from '../asset/Group 17320.png';
import designImage from '../asset/Group 1000002313.png';
import dottImage from '../asset/Group 17321.png';

const Wallet = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center">
           
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img src={walletImage} alt="Wallet" className="-ml-24" />
            </div>
            
           
            <div className="w-full lg:w-1/2 px-4 lg:px-10">
              
              <div className="flex justify-end">
                <img src={designImage} alt="Design"/>
              </div>
              
            
              <div className="font-sans font-semibold text-[18px] lg:text-[22px] text-customorange pt-6 lg:pt-10">
                Welcome to Sendkolo
              </div>

            
              <div className="font-sans font-extrabold text-2xl lg:text-4xl text-darkBlue lg:max-w-[419px] w-full py-2">
                Your bridge to financial connectivity!
              </div>

             
              <div className="font-sans font-bold text-darkBlue text-base lg:text-lg max-w-[430px]">
                From small beginnings to big achievements{" "}
                <span className="font-sans font-medium text-customgray text-base lg:text-lg">
                  - start by sending as little as Kolo back home
                </span>
              </div>

             
              <div className="flex justify-end pt-4">
                <img src={dottImage} alt="Dots" className="w-[100px] lg:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
