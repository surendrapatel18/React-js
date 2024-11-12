import React from 'react';
import bannerImage from '../asset/hero_banner.png';
import heroBackdesign from '../asset/headerbanner_background.png';
import playstore from '../asset/Play Store icon.png';
import appstore from '../asset/App Store icon.png';

const HeroPage = () => {
    return (
        <>
            <div className="w-full bg-customorange">
                <div className="mx-auto max-w-[1440px] pt-24 px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                        <div className="xl:w-full mb-6 md:mb-0">
                            <div classname="justify-center xl:justify-start">
                                <div className="text-[22px] text-customwhite font-semibold font-sans">
                                    Welcome to Sendkolo
                                </div>
                                <div className="text-[32px] md:text-[42px] text-lightGray font-extrabold font-sans max-w-[460px] mt-4">
                                    Send Funds to Africa for FREE
                                </div>
                                <div className="text-base md:text-lg text-lightGray font-medium font-sans max-w-[470px] py-4">
                                    Digital asset transfer solution tailored to easily move diaspora funds to Africa and promote financial connectivity in the African community
                                </div>
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


                        <div className="relative w-full flex justify-center pt-10">

                            <img src={heroBackdesign} alt="Background Design" className='w-full' />

                            <img src={bannerImage} alt="Banner Image" className="absolute w-[200px] md:w-[360px]  h-auto bottom-0 left-1/2 transform -translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroPage;
