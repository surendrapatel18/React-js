import React from 'react'
import blogHeader from '../asset/blogPage_banner.png'
import uperDesign from '../asset/leading_banner.png'


const MainPage = () => {
  return (
    <>
     <div className="w-full bg-customorange">
                <div className="w-full mx-auto max-w-[1440px] px-8 pt-20">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <div className="mb-6 md:mb-0 pt-5">
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
                     
                       
                        <div className="relative">
                           
                            <img src={uperDesign} alt="Design" className="absolute  left-0 w-full h-auto" />
                          
                            <img src={blogHeader} alt="Blog Banner" className="relative  w-full h-auto" />
                        </div>
                    </div>
                </div>

            </div>

       
    </>
  )
}

export default MainPage;