import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import userName from '../asset/users_men.png';
import usergirl from '../asset/user_girl.png';
import usermen from '../asset/user_men.png';

const UserPage = () => {
  return (
    <>
      <div className="w-full max-w-[1080px] mx-auto px-4 md:px-8 py-5 overflow-hidden">
        <div className="text-center mb-8">
          <div className="text-lg text-customorange font-semibold">
            Why Choose Us
          </div>
          <div className="text-[32px] md:text-[42px] text-darkBlue font-extrabold">
            User success stories
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1, // Single slide for 320px and smaller
            },
            640: {
              slidesPerView: 2, // Two slides for screens 640px and up
            },
            1024: {
              slidesPerView: 3, // Three slides for screens 1024px and up
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          <SwiperSlide>
            <div className="max-w-[300px] mx-auto">
              <div className="bg-orangePink rounded-t-lg flex justify-center pt-10">
                <img src={userName} alt="men" className="max-w-[162px]" />
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-lg text-center">
                <div className="font-bold text-xl text-darkBlue">Floyd Miles</div>
                <div className="font-medium text-sm md:text-lg text-darkBlue mt-2">
                  Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-[300px] mx-auto">
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
            <div className="max-w-[300px] mx-auto">
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

          {/* Duplicate Swiper slides to maintain the structure */}
          <SwiperSlide>
            <div className="max-w-[300px] mx-auto">
              <div className="bg-orangePink rounded-t-lg flex justify-center pt-10">
                <img src={userName} alt="men" className="max-w-[162px]" />
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-lg text-center">
                <div className="font-bold text-xl text-darkBlue">Floyd Miles</div>
                <div className="font-medium text-sm md:text-lg text-darkBlue mt-2">
                  Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-[300px] mx-auto">
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
            <div className="max-w-[300px] mx-auto">
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
    </>
  );
};

export default UserPage;
