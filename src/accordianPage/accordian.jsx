import React, { useState } from 'react';
import downarrow from '../asset/down-arrow.svg';


const Accordian = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqItems1 = [
        "Why do I have to use Sendkolo?",
        "How is Sendkolo different from other solutions?",
        "How does Sendkolo make profit without charging transfer fees?",
        "How does Sendkolo ensure the security and reliability of transfers?",
        "Where is SendKolo available?"
    ];

    const faqItems2 = [
        "How does Sendkolo ensure all transfers are confidential?",
        "How do beneficiaries receive the funds sent?",
        "What are the means of payment accepted by Sendkolo?",
        "Is SendKolo a bank or a payment institution?"
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

               
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:space-x-10 mt-5">
                    
                   
                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-4">
                            {faqItems1.map((item, index) => (
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
                    </div>

                   
                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-4">
                            {faqItems2.map((item, index) => (
                                <div key={index + faqItems1.length} className="shadow-md lg:max-w-[571px] w-full mx-auto lg:mx-0">
                                    <div
                                        className="text-lg font-tt-wellingtons text-black font-semibold h-auto flex justify-between p-4 rounded-lg cursor-pointer"
                                        onClick={() => toggleAnswer(index + faqItems1.length)}
                                    >
                                        {item}
                                        <span className="w-6 h-6 bg-[#141C281A] rounded-full flex items-center justify-center">
                                            <img
                                                src={downarrow}
                                                alt="icon"
                                                className={`transform transition-transform ${openQuestion === index + faqItems1.length ? 'rotate-180' : ''}`}
                                            />
                                        </span>
                                    </div>
                                    {openQuestion === index + faqItems1.length && (
                                        <div className="p-4 bg-white text-gray-700 rounded-b-lg">
                                            <p>
                                                This is the answer to the question: "{item}". You can customize this content based on the question.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
    );
}

export default Accordian;
