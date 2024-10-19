import React from 'react';
import PrivacyPolicy from '../asset/privacy_policy_banner.png';
import uperDesign from '../asset/leading_banner.png';

const PrivacyBanner = () => {
    return (
        <>
            <div className="w-full bg-customorange">
                <div className="w-full mx-auto max-w-[1440px] px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                      
                        <div className="mb-6 md:mb-0 pt-5">
                            <div className="md:text-lg text-base text-white font-semibold pb-3">
                                Need to know more about Senkolo
                            </div>
                            <div className="text-2xl lg:text-[42px] text-white font-extrabold">
                                Privacy Policy
                            </div>
                        </div>

                       
                        <div className="relative">
                           
                            <img src={uperDesign} alt="Design" className="absolute  left-0 w-full h-auto" />
                          
                            <img src={PrivacyPolicy} alt="Privacy Policy" className="relative  w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto max-w-[1440px] px-8 py-10'>
                <div className='text-lightgrey font-medium text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='text-lightblack font-bold text-lg py-3'>
                    Lorem ipsum title here
                </div>
                <div className='text-lightgrey font-medium text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='text-lightblack font-bold text-lg py-3'>
                    Lorem ipsum title here
                </div>
                <div className='text-lightgrey font-medium text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div className='text-lightblack font-bold text-lg py-3'>
                    Lorem ipsum title here
                </div>
                <div className='text-lightgrey font-medium text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='text-lightblack font-bold text-lg py-3'>
                    Lorem ipsum title here
                </div>
                <div className='text-lightgrey font-medium text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='text-lightblack font-bold text-lg py-3'>
                    Lorem ipsum title here
                </div>
                <div className='text-lightgrey font-medium text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </>
    );
};

export default PrivacyBanner;
