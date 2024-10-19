import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import userSuccess from '../asset/succus_user.png';
import takingPeople from '../asset/groups_member.png';
import annetteBlack from '../asset/annetic_black.png';
import FollowWin from '../asset/celebrite_selfish.png';

const SeeOur = () => {
  return (
    <>
      <div className="w-full bg-orangePink">
        <div className="mx-auto max-w-[1240px] px-8 py-10">
        
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
           
           <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 w-[365px] h-[450px] flex flex-col justify-between">
                <img src={userSuccess} alt="User success" className="w-full" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  User success story
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddolor sit amet, consetetur sadipscing elitr, seddolor sit amet, consetetur sadipscing elitr, sed
                </div>
              </div>
            </SwiperSlide>

          
            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 w-[365px] h-[450px] flex flex-col justify-between">
                <img src={takingPeople} alt="Taking People" className="w-full" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Africa's moving, we're taking you along!
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4 items-center">
                  <img src={annetteBlack} alt="Annette Black" className="w-12 h-12" />
                  <div>
                    <div className="text-lg text-black font-bold">Jenny Wilson</div>
                    <div className="text-base text-customgray font-medium">August 24, 2023</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 w-[365px] h-[450px] flex flex-col justify-between">
                <img src={FollowWin} alt="Follow Win" className="w-full" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Follow, Invite, Win!
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  We rise by lifting each other. Follow our social media and invite others to win regular bonuses and giveaways.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 w-[365px] h-[450px] flex flex-col justify-between">
                <img src={userSuccess} alt="User success" className="w-full" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  User success story
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddolor sit amet, consetetur sadipscing elitr, seddolor sit amet, consetetur sadipscing elitr, sed
                </div>
              </div>
            </SwiperSlide>

          
            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 w-[365px] h-[450px] flex flex-col justify-between">
                <img src={takingPeople} alt="Taking People" className="w-full" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Africa's moving, we're taking you along!
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4 items-center">
                  <img src={annetteBlack} alt="Annette Black" className="w-12 h-12" />
                  <div>
                    <div className="text-lg text-black font-bold">Jenny Wilson</div>
                    <div className="text-base text-customgray font-medium">August 24, 2023</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 w-[365px] h-[450px] flex flex-col justify-between">
                <img src={FollowWin} alt="Follow Win" className="w-full" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Follow, Invite, Win!
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  We rise by lifting each other. Follow our social media and invite others to win regular bonuses and giveaways.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

         
          <div className="font-semibold text-lg text-customorange text-center py-8">
            <Link to="/blog" className="inline-block border-b-2 border-customorange hover:text-green-600 hover:border-green-700">
              See our blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeOur;
