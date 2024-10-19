import React from 'react';
import playstore from '../asset/Play Store icon.png';
import appstore from '../asset/App Store icon.png';
import usercaller from '../asset/user_caller.png';
import sendkolo from '../asset/sendkolo-fevicon.png';
import userlaptop from '../asset/user_laptop.png';

const Support = () => {
    return (
        <div className="w-full mx-auto max-w-[1440px] py-5 px-4 md:px-8">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <div className="text-[22px] text-customorange font-semibold mb-2">
                        Quick access support
                    </div>

                    <div className="text-[32px] md:text-[42px] text-darkBlue font-extrabold mb-4">
                        Instantly send support
                    </div>

                    <div className="text-lg text-customgray font-medium max-w-[470px] mb-4">
                        Instantly send support, fuel your projects and fortify bonds back home.
                    </div>

                    <div className="text-lg text-customgray font-medium max-w-[417px] pb-5">
                        Gravida diam sed purus volutpat eget senectus faucibus. Est elit viverra urna quis eleifend at. Fringilla commodo mus aliquam eu adipiscing amet in. Neque pellentesque faucibus quisque et. Augue sit quam facilisi tincidunt.
                    </div>

                    <div className="flex gap-4 justify-center lg:justify-start">
                        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={playstore} alt="Playstore" className="w-[150px] h-auto" />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <img src={appstore} alt="Appstore" className="w-[150px] h-auto" />
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <div className="flex gap-8 items-center relative justify-center">
                        <div className="relative -translate-y-2">
                            <img src={usercaller} alt="User caller image" className="w-[150px] md:w-[250px] h-auto" />
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                            <img src={sendkolo} alt="Send Kolo image" className="w-[80px] md:w-[120px] h-auto" />
                        </div>
                        <div className="relative -translate-y-2">
                            <img src={userlaptop} alt="User laptop image" className="w-[150px] md:w-[250px] h-auto mt-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
