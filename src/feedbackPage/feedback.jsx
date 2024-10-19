import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import usergirl from '../asset/user_girl.png';
import usermen from '../asset/user_men.png';

const Feedback = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
    
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-8">
       
        <div className="w-full lg:w-6/12">
          <div className="block lg:hidden"> 
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
              }}
              modules={[Autoplay]} 
              className="mySwiper"
            >

              <SwiperSlide>
                <div className="flex-shrink-0 max-w-[300px] mx-auto">
                  <div className="bg-orangePink rounded-t-lg flex justify-center pt-6">
                    <img src={usermen} alt="men" className="max-w-[162px]" />
                  </div>
                  <div className="bg-white p-6 rounded-b-lg shadow-lg text-center">
                    <div className="font-bold text-xl text-darkBlue">Guy Hawkins</div>
                    <div className="font-medium text-sm md:text-lg text-darkBlue mt-2">
                      Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur.
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex-shrink-0 max-w-[300px] mx-auto">
                  <div className="bg-orangePink rounded-t-lg flex justify-center pt-6">
                    <img src={usergirl} alt="girl" className="max-w-[162px]" />
                  </div>
                  <div className="bg-white p-6 rounded-b-lg shadow-lg text-center">
                    <div className="font-bold text-xl text-darkBlue">Cameron Williamson</div>
                    <div className="font-medium text-sm md:text-lg text-darkBlue mt-2">
                      Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="hidden lg:flex justify-between"> 
            <div className="flex-shrink-0 max-w-[300px] mx-auto">
              <div className="bg-orangePink rounded-t-lg flex justify-center pt-6">
                <img src={usermen} alt="men" className="max-w-[162px]" />
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-lg text-center">
                <div className="font-bold text-xl text-darkBlue">Guy Hawkins</div>
                <div className="font-medium text-sm md:text-lg text-darkBlue mt-2">
                  Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur.
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 max-w-[300px] mx-auto">
              <div className="bg-orangePink rounded-t-lg flex justify-center pt-6">
                <img src={usergirl} alt="girl" className="max-w-[162px]" />
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-lg text-center">
                <div className="font-bold text-xl text-darkBlue">Cameron Williamson</div>
                <div className="font-medium text-sm md:text-lg text-darkBlue mt-2">
                  Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 text-center xl:text-left mt-8 lg:mt-0">
          <div className="text-customorange font-semibold text-lg md:text-[22px]">Feedback</div>
          <div className="text-darkBlue font-extrabold text-3xl md:text-[42px] mt-4">
            What our users say
          </div>
          <div className="text-customgray text-base md:text-lg font-medium mt-4">
            Lorem ipsum dolor sit amet consectetur. Risus gravida diam sed purus volutpat eget senectus faucibus. Est elit viverra urna quis eleifend at. Fringilla commodo mus aliquam eu adipiscing amet in. Neque pellentesque faucibus quisque et. Augue sit quam facilisi tincidunt.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
