import React from 'react'
import screenImage1 from '../asset/Put Your Image Here 1.png'
import screenImage2 from '../asset/Screen 2.png'
import screenImage3 from '../asset/Screen 3.png'
import vactor from '../asset/Vector (2).png'
import vactor1 from '../asset/Group.png'
import vactor2 from '../asset/Group 17361.png'
import vactor3 from '../asset/Group 17362.png'

const Work = () => {
  return (
    <>
      <div className="w-full bg-orangePink">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center pt-8">
            <h2 className="font-sans font-semibold text-customorange text-[22px]">
              Who this work
            </h2>
            <h3 className="font-sans font-extrabold text-3xl text-darkBlue py-4">
              How does the magic work?
            </h3>
          </div>

      
          <div className="flex flex-col xl:flex-row pt-14 justify-between items-start gap-x-8">
            
           
            <div className="w-full lg:w-1/4 space-y-4">
              <div className="flex w-full lg:w-80 h-16 bg-customwhite rounded-2xl px-5 items-center">
                <img src={vactor} alt="Step 1" className="w-7 h-10" />
                <span className="font-sans text-base lg:text-xl text-darkBlue font-semibold pl-4">
                  1. Download App
                </span>
              </div>

              <div className="flex w-full lg:w-80 h-16 bg-customwhite rounded-2xl px-5 items-center">
                <img src={vactor1} alt="Step 2" className="w-8 h-10" />
                <span className="font-sans text-base lg:text-xl text-darkBlue font-semibold pl-4">
                  2. Create an account
                </span>
              </div>

              <div className="flex w-full lg:w-80 h-16 bg-customwhite rounded-2xl px-5 items-center">
                <img src={vactor2} alt="Step 3" className="w-9 h-9" />
                <span className="font-sans text-base lg:text-xl text-darkBlue font-semibold pl-4">
                  3. Verify your account
                </span>
              </div>

              <div className="flex w-full lg:w-80 h-16 bg-customwhite rounded-2xl px-5 items-center">
                <img src={vactor3} alt="Step 4" className="w-10 h-10" />
                <span className="font-sans text-base lg:text-xl text-darkBlue font-semibold pl-4">
                  4. Send funds instantly
                </span>
              </div>
            </div>

          
            <div className="w-full lg:w-3/4 flex justify-center lg:justify-end items-center flex-wrap pt-10 lg:pt-0 space-x-4">
              <div className="space-y-4 flex xl:flex-row mt-5">
                <div>
                  <img src={screenImage1} alt="screen-1" />
                </div>
                <div className="flex items-end">
                  <img src={screenImage2} alt="screen-2"/>
                </div>
                <div className="flex items-end">
                  <img src={screenImage3} alt="screen-3"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Work;
