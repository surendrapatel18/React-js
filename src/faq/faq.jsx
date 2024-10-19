import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import downarrow from '../asset/down-arrow.svg';
import laptopuser from '../asset/men-laptop.png';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqItems = [
    "Why do I have to use Sendkolo?",
    "How is Sendkolo different from other solutions?",
    "How does Sendkolo make profit without charging transfer fees?",
    "How does Sendkolo ensure the security and reliability of transfers?",
    "Where is SendKolo available?"
  ];

  return (
    <div className="w-full bg-[#F7F7F7]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[70px] bg-[#F7F7F7] py-5">

        <div className="text-[22px] font-tt-wellingtons text-customorange font-semibold pt-4 text-center lg:text-left">
          FAQ
        </div>

        <div className="lg:text-[42px] leading-10 text-2xl font-tt-wellingtons text-darkBlue font-extrabold max-w-[489px] mx-auto lg:mx-0 text-center lg:text-left">
          Frequently Asked Questions
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:items-start lg:space-x-10">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="space-y-4 mt-5">
              {faqItems.map((item, index) => (
                <div key={index} className="shadow-md lg:max-w-[571px] w-full mx-auto lg:mx-0">
                  <div 
                    className="text-lg font-tt-wellingtons text-black font-semibold h-auto flex justify-between p-4 rounded-lg cursor-pointer" 
                    onClick={() => toggleAnswer(index)}
                  >
                    {item}
                    <span className="w-6 h-6 bg-[#141C281A] rounded-full flex items-center justify-center">
                      <img 
                        src={downarrow} 
                        alt="icon" 
                        className={`transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`} 
                      />
                    </span>
                  </div>
                  {openQuestion === index && (
                    <div className="p-4 bg-white text-gray-700 rounded-b-lg">
                      <p>
                        This is the answer to the question: "{item}". You can customize this content based on the question.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-xl font-tt-wellingtons text-customorange font-semibold underline  mt-8 hover:text-green-600">
          <Link to ="/help">Got more Questions?</Link>
        </div>
          </div>
          <div className="lg:w-2/5 mt-10 lg:mt-0">
            <img src={laptopuser} alt="laptop-user" className="mx-auto lg:mx-0" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Faq;
