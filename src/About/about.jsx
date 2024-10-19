import React from 'react'
import AboutBanner from '../asset/about_banner.png'
import ourvision from '../asset/our_vision.png'
import ourstatement from '../asset/mission_Statement.png'
import ourstory from '../asset/our_story.png'
import uperDesign from '../asset/leading_banner.png'

const About= () => {
    return (
        <>
        <div className="w-full bg-customorange">
                <div className="w-full mx-auto max-w-[1440px] px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <div className="mb-6 md:mb-0 pt-5">
                            <div className="md:text-lg text-base text-white font-semibold pb-3">
                                Know something about us
                            </div>
                            <div className="text-2xl lg:text-[42px] text-white font-extrabold max-w-[470px] leading-10 pb-3">
                                Enabling you to transact safely and securely at no cost.
                            </div>
                            <div className="text-base lg:text-lg text-white font-medium max-w-[420px]">
                                Our services and solutions are tailored to provide our members with exchange options for their transactions using our platform.
                            </div>
                        </div>
                     
                       
                        <div className="relative">
                           
                            <img src={uperDesign} alt="Design" className="absolute  left-0 w-full h-auto" />
                          
                            <img src={AboutBanner} alt="About Banner" className="relative  w-full h-auto" />
                        </div>
                    </div>
                </div>

            </div>

           
            <div className="relative w-full mx-auto max-w-[1440px] px-8">
                <div className="max-w-[1280px] mx-auto shadow-md p-10 bg-white -mt-12 md:-mt-16 z-10 relative rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                       
                        <div className="max-w-[320px]">
                            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-orangePink">
                                <img src={ourvision} alt="Our Vision" />
                            </div>
                            <div className="text-xl text-darkBlue font-bold py-2">Our Vision</div>
                            <div className="text-lg text-customgray font-medium">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                            </div>
                        </div>
                       
                        <div className="max-w-[320px]">
                            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-orangePink">
                                <img src={ourstatement} alt="Mission Statement" />
                            </div>
                            <div className="text-xl text-darkBlue font-bold py-2">Mission Statement</div>
                            <div className="text-lg text-customgray font-medium">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                            </div>
                        </div>
                      
                        <div className="max-w-[320px]">
                            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-orangePink">
                                <img src={ourstory} alt="Our Story" />
                            </div>
                            <div className="text-xl text-darkBlue font-bold py-2">Our Story</div>
                            <div className="text-lg text-customgray font-medium">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
