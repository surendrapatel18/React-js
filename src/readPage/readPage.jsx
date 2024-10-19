import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import menPhone from '../asset/men_phone.png';
import officeLaptop from '../asset/office_laptop_work.png';
import groupPeople from '../asset/group_discussion.png';
import menAannete from '../asset/annetic_black.png';
import girlJenny from '../asset/jenny_girls.png';
import menbrooklyn from '../asset/brokeelyn_men.png';

const ReadPage = () => {
  return (
    <>
      <div className="w-full bg-orangePink">
        <div className="mx-auto max-w-[1240px] px-8 py-5">
          <div className="text-center pb-10">
            <div className="text-lg xl:text-[22px] text-customorange font-semibold">
              Read our blogs
            </div>
            <div className=" text-3xl lg:text-[42px] text-darkBlue font-extrabold pt-3">
              Did you know?
            </div>
          </div>

         
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
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
            className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 max-w-[365px]">
                <img src={menPhone} alt="Men with Phone" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Cameroon diaspora accomplished the following in 2022
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4">
                  <img src={menAannete} alt="Annette Black" />
                  <div className="text-lg text-black font-bold">
                    Annette Black
                    <div className="text-base text-customgray font-medium">
                      August 24, 2023
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 max-w-[365px]">
                <img src={officeLaptop} alt="Office Laptop" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Cameroon diaspora accomplished the following in 2022
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4">
                  <img src={girlJenny} alt="Jenny Wilson" />
                  <div className="text-lg text-black font-bold">
                    Jenny Wilson
                    <div className="text-base text-customgray font-medium">
                      August 24, 2023
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 max-w-[365px]">
                <img src={groupPeople} alt="Group Discussion" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Cameroon diaspora accomplished the following in 2022
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4">
                  <img src={menbrooklyn} alt="Brooklyn Simmons" />
                  <div className="xl:text-lg text-base text-black font-bold">
                    Brooklyn Simmons
                    <div className="text-base text-customgray font-medium">
                      August 24, 2023
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          
            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 max-w-[365px]">
                <img src={menPhone} alt="Men with Phone" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Cameroon diaspora accomplished the following in 2022
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4">
                  <img src={menAannete} alt="Annette Black" />
                  <div className="text-lg text-black font-bold">
                    Annette Black
                    <div className="text-base text-customgray font-medium">
                      August 24, 2023
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 max-w-[365px]">
                <img src={officeLaptop} alt="Office Laptop" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Cameroon diaspora accomplished the following in 2022
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4">
                  <img src={girlJenny} alt="Jenny Wilson" />
                  <div className="text-lg text-black font-bold">
                    Jenny Wilson
                    <div className="text-base text-customgray font-medium">
                      August 24, 2023
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="shadow-md bg-white rounded-lg p-4 max-w-[365px]">
                <img src={groupPeople} alt="Group Discussion" />
                <div className="text-xl text-darkBlue font-bold py-3">
                  Cameroon diaspora accomplished the following in 2022
                </div>
                <div className="text-lg text-customgray font-medium pb-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div className="flex gap-4">
                  <img src={menbrooklyn} alt="Brooklyn Simmons" />
                  <div className="xl:text-lg text-base text-black font-bold">
                    Brooklyn Simmons
                    <div className="text-base text-customgray font-medium">
                      August 24, 2023
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>

       
          <div className="font-semibold text-lg text-darkBlue text-center py-8">
            <button className="px-4 py-2 border border-darkBlue text-darkBlue rounded-3xl hover:bg-darkBlue hover:text-white transition-colors">
            <Link to="/">Older Posts</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadPage;
