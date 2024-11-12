import React from 'react'
import questionImage from '../asset/help_banner.png'
import heroBackdesign from '../asset/headerbanner_background.png';

const HelpBanner = () => {
    return (
      <>
            <div className="w-full bg-customorange">
                <div className="mx-auto max-w-[1440px] pt-20 px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                        <div className="xl:w-full mb-6 md:mb-0">
                            <div classname="justify-center xl:justify-start">
                            <div className="md:text-[22px] text-lg text-white font-semibold pb-3">
                Know something about us
                </div>
                <div className="text-2xl lg:text-[42px] text-white font-extrabold max-w-[470px] leading-10 pb-3">
                You’ve got questions?
                we’ve got answers
                </div>
                <div className="text-base lg:text-lg text-white font-medium max-w-[420px]">
                Our services and solutions are tailored to provide our members, exchange options for their transactions using our platform.
                </div>
                            </div>
                          
                        </div>


                        <div className="relative w-full flex justify-center pt-10">

                            <img src={heroBackdesign} alt="Background Design" className='w-full' />

                            <img src={questionImage} alt="Help Banner" className="absolute w-[200px] md:w-[360px]  h-auto bottom-0 left-1/2 transform -translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </div>
            </>
  )
}

export default HelpBanner;

  
            <div className="w-full bg-customorange">
    <div className="w-full mx-auto max-w-[1440px] px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-6 md:mb-0">
               
            </div>

            <div>
               
            </div>
        </div>
    </div>
</div>
  