import React from 'react'
import JaneCooper from '../asset/Jane Cooper_women.png'
import LeslieAlexander from '../asset/Leslie Alexander_men.png'
import EstherHoward from '../asset/Esther Howard_women.png'
import FloydMiles from '../asset/FloydMiles_men.png'
import KathrynMurphy from '../asset/Kathryn Murphy_women.png'
import JeromeBell from '../asset/JeromeBell_men.png'

const TeamWork = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-[1440px] px-8 py-10">
       
        <div className="text-center justify-center items-center py-10">
          <div className="text-[22px] text-customorange font-semibold">
            Meet our creative team
          </div>
          <div className="text-[42px] text-darkBlue font-extrabold">
            Meet our team
          </div>
          <div className="text-lg text-customgray font-medium max-w-[730px] mx-auto text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </div>
        </div>

        
        <div className="w-full mx-auto max-w-[1140px]">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            
      
            <div className="flex flex-col items-center">
              <div className="relative">
                <img src={JaneCooper} alt="women_pic" />
                <div className="absolute inset-x-0 bottom-[-30px] mx-auto max-w-[282px] rounded-xl p-5 shadow-md bg-white">
                  <div className="text-xl font-bold text-black text-center">Jane Cooper</div>
                  <div className="text-base text-lightgrey font-medium text-center">Co. Content Designer</div>
                </div>
              </div>
            </div>

          
            <div className="flex flex-col items-center py-3">
              <div className="relative">
                <img src={LeslieAlexander} alt="men_pic" />
                <div className="absolute inset-x-0 bottom-[-30px] mx-auto max-w-[282px] rounded-xl p-5 shadow-md bg-white">
                  <div className="text-xl font-bold text-black text-center">Leslie Alexander</div>
                  <div className="text-base text-lightgrey font-medium text-center">Co. Content Designer</div>
                </div>
              </div>
            </div>

           
            <div className="flex flex-col items-center">
              <div className="relative">
                <img src={EstherHoward} alt="women_pic" />
                <div className="absolute inset-x-0 bottom-[-30px] mx-auto max-w-[282px] rounded-xl p-5 shadow-md bg-white">
                  <div className="text-xl font-bold text-black text-center">Esther Howard</div>
                  <div className="text-base text-lightgrey font-medium text-center">Co. Content Designer</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center pt-3">
              <div className="relative">
                <img src={FloydMiles} alt="men_pic" />
                <div className="absolute inset-x-0 bottom-[-30px] mx-auto max-w-[282px] rounded-xl p-5 shadow-md bg-white">
                  <div className="text-xl font-bold text-black text-center">Floyd Miles</div>
                  <div className="text-base text-lightgrey font-medium text-center">Co. Content Designer</div>
                </div>
              </div>
            </div>

           
            <div className="flex flex-col items-center py-3">
              <div className="relative">
                <img src={KathrynMurphy} alt="women_pic" />
                <div className="absolute inset-x-0 bottom-[-30px] mx-auto max-w-[282px] rounded-xl p-5 shadow-md bg-white">
                  <div className="text-xl font-bold text-black text-center">Kathryn Murphy</div>
                  <div className="text-base text-lightgrey font-medium text-center">Co. Content Designer</div>
                </div>
              </div>
            </div>

        
            <div className="flex flex-col items-center">
              <div className="relative">
                <img src={JeromeBell} alt="men_pic" />
                <div className="absolute inset-x-0 bottom-[-30px] mx-auto max-w-[282px] rounded-xl p-5 shadow-md bg-white">
                  <div className="text-xl font-bold text-black text-center">Jerome Bell</div>
                  <div className="text-base text-lightgrey font-medium text-center">Co. Content Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamWork;
